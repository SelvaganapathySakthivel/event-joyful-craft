import { useAdminStore } from "@/store/adminStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, CheckCircle, Clock, IndianRupee } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";

const statusColor: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const COLORS = ["hsl(1,76%,55%)", "hsl(130,46%,33%)", "hsl(43,56%,52%)", "hsl(215,65%,50%)"];

const Dashboard = () => {
  const bookings = useAdminStore((s) => s.bookings);

  const totalBookings = bookings.length;
  const upcoming = bookings.filter((b) => b.status === 'confirmed' || b.status === 'pending').length;
  const completed = bookings.filter((b) => b.status === 'completed').length;
  const totalRevenue = bookings.reduce((a, b) => a + b.revenue, 0);

  const eventTypeCounts = bookings.reduce((acc, b) => {
    acc[b.eventType] = (acc[b.eventType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const pieData = Object.entries(eventTypeCounts).map(([name, value]) => ({ name, value }));

  const monthlyData = [
    { month: 'Jan', bookings: 3, revenue: 120000 },
    { month: 'Feb', bookings: 5, revenue: 250000 },
    { month: 'Mar', bookings: 4, revenue: 180000 },
    { month: 'Apr', bookings: 7, revenue: 350000 },
    { month: 'May', bookings: 6, revenue: 300000 },
    { month: 'Jun', bookings: 8, revenue: 420000 },
  ];

  const stats = [
    { label: "Total Bookings", value: totalBookings, icon: CalendarCheck, color: "text-primary" },
    { label: "Upcoming Events", value: upcoming, icon: Clock, color: "text-blue-600" },
    { label: "Completed", value: completed, icon: CheckCircle, color: "text-secondary" },
    { label: "Total Revenue", value: `₹${(totalRevenue / 1000).toFixed(0)}K`, icon: IndianRupee, color: "text-amber-600" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-foreground">Dashboard Overview</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="border-border">
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-muted ${s.color}`}>
                <s.icon size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader><CardTitle className="text-base">Monthly Revenue</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} />
                <Bar dataKey="revenue" fill="hsl(1,76%,55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader><CardTitle className="text-base">Events by Type</CardTitle></CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name }) => name}>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card className="border-border">
        <CardHeader><CardTitle className="text-base">Recent Bookings</CardTitle></CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Event</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Revenue</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(0, 5).map((b) => (
                <tr key={b.id} className="border-b border-border/50">
                  <td className="py-3 font-medium text-foreground">{b.name}</td>
                  <td className="py-3 capitalize text-muted-foreground">{b.eventType}</td>
                  <td className="py-3 text-muted-foreground">{b.date}</td>
                  <td className="py-3 text-foreground">₹{b.revenue.toLocaleString()}</td>
                  <td className="py-3">
                    <Badge variant="secondary" className={statusColor[b.status]}>{b.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
