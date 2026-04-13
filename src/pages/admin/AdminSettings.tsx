import { useState } from "react";
import { useAdminStore } from "@/store/adminStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Save } from "lucide-react";

const AdminSettings = () => {
  const { settings, updateSettings } = useAdminStore();
  const [form, setForm] = useState(settings);
  const [password, setPassword] = useState({ current: "", newPass: "", confirm: "" });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(form);
    toast.success("Settings updated");
  };

  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.newPass !== password.confirm) { toast.error("Passwords don't match"); return; }
    if (password.newPass.length < 6) { toast.error("Min 6 characters"); return; }
    toast.success("Password updated");
    setPassword({ current: "", newPass: "", confirm: "" });
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="font-heading text-2xl font-bold text-foreground">Settings</h2>

      <Card className="border-border">
        <CardHeader><CardTitle className="text-base">Business Information</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Phone 1</Label>
                <Input value={form.phone1} onChange={(e) => setForm({ ...form, phone1: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Phone 2</Label>
                <Input value={form.phone2} onChange={(e) => setForm({ ...form, phone2: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>WhatsApp Link</Label>
              <Input value={form.whatsappLink} onChange={(e) => setForm({ ...form, whatsappLink: e.target.value })} />
            </div>
            <Button type="submit" className="gap-2"><Save size={16} /> Save Changes</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader><CardTitle className="text-base">Change Password</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={handlePassword} className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" value={password.current} onChange={(e) => setPassword({ ...password, current: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" value={password.newPass} onChange={(e) => setPassword({ ...password, newPass: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input type="password" value={password.confirm} onChange={(e) => setPassword({ ...password, confirm: e.target.value })} required />
            </div>
            <Button type="submit" className="gap-2"><Save size={16} /> Update Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
