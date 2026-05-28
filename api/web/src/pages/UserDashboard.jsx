import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark, Github } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const UserDashboard = () => {
  const [updating, setUpdating] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Demo User',
    email: 'demo@example.com',
    github_username: '',
    profile_bio: '',
  });

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setTimeout(() => {
      toast.success('Profile updated successfully');
      setUpdating(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - DevOps Job Portal</title>
        <meta name="description" content="Manage your saved jobs, GitHub projects, and account settings" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <h1 className="text-5xl font-black uppercase text-black mb-8">Dashboard</h1>

          <Tabs defaultValue="saved-jobs" className="space-y-8">
            <TabsList className="border-medium border-black bg-card p-1 rounded-none">
              <TabsTrigger value="saved-jobs" className="font-black uppercase text-black data-[state=active]:bg-black data-[state=active]:text-white rounded-none">Saved Jobs</TabsTrigger>
              <TabsTrigger value="github-projects" className="font-black uppercase text-black data-[state=active]:bg-black data-[state=active]:text-white rounded-none">GitHub Projects</TabsTrigger>
              <TabsTrigger value="settings" className="font-black uppercase text-black data-[state=active]:bg-black data-[state=active]:text-white rounded-none">Account Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="saved-jobs" className="space-y-6">
              <div className="text-center py-24 border-thick border-black bg-card">
                <Bookmark className="w-20 h-20 mx-auto mb-6 text-black" />
                <h3 className="text-3xl font-black uppercase text-black mb-4">No saved jobs yet</h3>
                <p className="text-xl font-bold text-black/80 mb-8">
                  Start browsing jobs and save the ones you're interested in
                </p>
                <Link to="/jobs">
                  <Button className="bg-black text-white font-black uppercase border-medium border-black rounded-none hover:bg-black/80 px-8 py-6 text-lg">Browse Jobs</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="github-projects" className="space-y-6">
              <div className="text-center py-24 border-thick border-black bg-card">
                <Github className="w-20 h-20 mx-auto mb-6 text-black" />
                <h3 className="text-3xl font-black uppercase text-black mb-4">No GitHub projects synced</h3>
                <p className="text-xl font-bold text-black/80 mb-8">
                  Set your GitHub username and sync your DevOps repositories
                </p>
                <Link to="/projects">
                  <Button className="bg-black text-white font-black uppercase border-medium border-black rounded-none hover:bg-black/80 px-8 py-6 text-lg">Go to GitHub Projects</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="border-thick border-black rounded-none shadow-[8px_8px_0px_0px_#000000]">
                <CardHeader className="border-b-medium border-black pb-6 mb-6">
                  <CardTitle className="text-3xl font-black uppercase text-black">Account settings</CardTitle>
                  <CardDescription className="text-lg font-bold text-black/80">Update your profile information</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-black uppercase text-black">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="text-black border-medium border-black rounded-none font-bold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-black uppercase text-black">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        disabled
                        className="text-black border-medium border-black rounded-none font-bold opacity-60"
                      />
                      <p className="text-sm font-bold text-black/70">Email cannot be changed</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github_username" className="text-lg font-black uppercase text-black">GitHub Username</Label>
                      <Input
                        id="github_username"
                        value={profileData.github_username}
                        onChange={(e) => setProfileData({ ...profileData, github_username: e.target.value })}
                        placeholder="octocat"
                        className="text-black border-medium border-black rounded-none font-bold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profile_bio" className="text-lg font-black uppercase text-black">Bio</Label>
                      <Textarea
                        id="profile_bio"
                        value={profileData.profile_bio}
                        onChange={(e) => setProfileData({ ...profileData, profile_bio: e.target.value })}
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className="text-black border-medium border-black rounded-none font-bold"
                      />
                    </div>

                    <Button type="submit" disabled={updating} className="bg-black text-white font-black uppercase border-medium border-black rounded-none hover:bg-black/80 mt-8">
                      {updating ? 'Updating...' : 'Update Profile'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default UserDashboard;
