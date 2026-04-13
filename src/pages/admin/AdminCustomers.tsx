import { useAdminStore } from "@/store/adminStore";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdminCustomers = () => {
  const bookings = useAdminStore((s) => s.bookings);

  // Group by customer name
  const customerMap = new Map<string, typeof bookings>();
  bookings.forEach((b) => {
    const existing = customerMap.get(b.name) || [];
    existing.push(b);
    customerMap.set(b.name, existing);
  });

  const customers = Array.from(customerMap.entries()).map(([name, bks]) => ({
    name,
    phone: bks[0].phone,
    totalEvents: bks.length,
    totalRevenue: bks.reduce((a, b) => a + b.revenue, 0),
    events: bks,
  }));

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-foreground">Customers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((c) => (
          <Card key={c.name} className="border-border">
            <CardContent className="p-5 space-y-3">
              <div>
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.phone}</p>
              </div>
              <div className="flex gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Events</p>
                  <p className="font-bold text-foreground">{c.totalEvents}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Revenue</p>
                  <p className="font-bold text-foreground">₹{c.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.events.map((e) => (
                  <Badge key={e.id} variant="outline" className="text-xs capitalize">
                    {e.eventType} - {e.date}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminCustomers;
