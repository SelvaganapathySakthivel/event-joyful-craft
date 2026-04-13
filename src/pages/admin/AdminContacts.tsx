import { useAdminStore } from "@/store/adminStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { CheckCircle, MessageSquare } from "lucide-react";

const AdminContacts = () => {
  const { contacts, markResponded } = useAdminStore();

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-foreground">Contact Leads</h2>

      <Card className="border-border">
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground bg-muted/50">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Message</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium text-foreground">{c.name}</td>
                  <td className="p-4 text-muted-foreground">
                    <a href={`https://wa.me/91${c.phone}`} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      {c.phone}
                    </a>
                  </td>
                  <td className="p-4 text-muted-foreground max-w-[300px] truncate">{c.message}</td>
                  <td className="p-4 text-muted-foreground">{c.createdAt}</td>
                  <td className="p-4">
                    <Badge variant="secondary" className={c.responded ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                      {c.responded ? "Responded" : "Pending"}
                    </Badge>
                  </td>
                  <td className="p-4">
                    {!c.responded && (
                      <Button size="sm" variant="outline" className="gap-1 text-secondary" onClick={() => { markResponded(c.id); toast.success("Marked as responded"); }}>
                        <CheckCircle size={14} /> Mark Done
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No contacts yet</td></tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContacts;
