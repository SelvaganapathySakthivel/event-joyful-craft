import { useState } from "react";
import { useAdminStore, BookingStatus, EventType } from "@/store/adminStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Trash2, CheckCircle, XCircle, Clock, Search } from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";

const statusColor: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const AdminBookings = () => {
  const { bookings, updateBookingStatus, deleteBooking } = useAdminStore();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = bookings.filter((b) => {
    if (statusFilter !== "all" && b.status !== statusFilter) return false;
    if (typeFilter !== "all" && b.eventType !== typeFilter) return false;
    if (search && !b.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleStatus = (id: string, status: BookingStatus) => {
    updateBookingStatus(id, status);
    toast.success(`Booking ${status}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-foreground">Booking Management</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[150px]"><SelectValue placeholder="Event Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="birthday">Birthday</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="traditional">Traditional</SelectItem>
            <SelectItem value="engagement">Engagement</SelectItem>
            <SelectItem value="outdoor">Outdoor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="border-border">
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground bg-muted/50">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Event</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Revenue</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium text-foreground">{b.name}</td>
                  <td className="p-4 text-muted-foreground">{b.phone}</td>
                  <td className="p-4 capitalize text-muted-foreground">{b.eventType}</td>
                  <td className="p-4 text-muted-foreground">{b.date}</td>
                  <td className="p-4 text-foreground">₹{b.revenue.toLocaleString()}</td>
                  <td className="p-4">
                    <Badge variant="secondary" className={statusColor[b.status]}>{b.status}</Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      {b.status === 'pending' && (
                        <>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-secondary hover:text-secondary" onClick={() => handleStatus(b.id, 'confirmed')}>
                            <CheckCircle size={16} />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => handleStatus(b.id, 'rejected')}>
                            <XCircle size={16} />
                          </Button>
                        </>
                      )}
                      {b.status === 'confirmed' && (
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-secondary hover:text-secondary" onClick={() => handleStatus(b.id, 'completed')}>
                          <Clock size={16} />
                        </Button>
                      )}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive">
                            <Trash2 size={16} />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Booking?</AlertDialogTitle>
                            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => { deleteBooking(b.id); toast.success("Booking deleted"); }}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="p-8 text-center text-muted-foreground">No bookings found</td></tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBookings;
