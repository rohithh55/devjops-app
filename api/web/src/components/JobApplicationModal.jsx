import React, { useState } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const JobApplicationModal = ({ isOpen, onClose, jobId, jobTitle }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    cover_letter: '',
  });
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('jobId', jobId);
      data.append('full_name', formData.full_name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('cover_letter', formData.cover_letter);
      
      if (resume) {
        data.append('resume', resume);
      }

      await pb.collection('applications').create(data, { $autoCancel: false });
      
      toast.success('Application submitted successfully');
      onClose();
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        cover_letter: '',
      });
      setResume(null);
    } catch (error) {
      console.error('Application error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto border-thick border-black bg-card text-black rounded-none">
        <DialogHeader className="border-b-medium border-black pb-4">
          <DialogTitle className="text-2xl font-black uppercase text-black">Apply for {jobTitle}</DialogTitle>
          <DialogDescription className="text-lg font-bold text-black/80">
            Fill out the form below to submit your application
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="full_name" className="text-lg font-black uppercase text-black">Full Name *</Label>
            <Input
              id="full_name"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              required
              className="text-black border-medium border-black rounded-none font-bold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg font-black uppercase text-black">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="text-black border-medium border-black rounded-none font-bold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-lg font-black uppercase text-black">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-black border-medium border-black rounded-none font-bold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume" className="text-lg font-black uppercase text-black">Resume (PDF or Word)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}
              className="text-black border-medium border-black rounded-none font-bold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover_letter" className="text-lg font-black uppercase text-black">Cover Letter</Label>
            <Textarea
              id="cover_letter"
              value={formData.cover_letter}
              onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
              rows={6}
              placeholder="Tell us why you're a great fit for this role..."
              className="text-black border-medium border-black rounded-none font-bold"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t-medium border-black">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading} className="border-medium border-black text-black font-black uppercase rounded-none">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="bg-black text-white font-black uppercase border-medium border-black rounded-none hover:bg-black/80">
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
