import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ReactNode } from "react";

const BookingModal = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl gradient-primary-text">Book Your Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <Input placeholder="Your Name" required className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
          <Input placeholder="Phone Number" type="tel" required className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
          <Input placeholder="Event Type" required className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
          <Input type="date" required className="bg-accent border-border text-foreground" />
          <Textarea placeholder="Additional details..." rows={3} className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
          <button
            type="submit"
            className="gradient-primary-bg text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            Submit Booking
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
