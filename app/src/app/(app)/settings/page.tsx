
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUser } from "@/lib/mock-data";

const Settings = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Settings */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>Update your profile information and public details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <Button variant="outline" size="sm">
                                        Change Avatar
                                    </Button>
                                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF (max. 2MB)</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue={mockUser.name} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue={mockUser.email} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Input
                                    id="bio"
                                    placeholder="Tell us about yourself..."
                                    defaultValue="Creator and entrepreneur passionate about building authentic brand partnerships."
                                />
                            </div>

                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>

                    {/* Business Settings */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <CardTitle>Business Information</CardTitle>
                            <CardDescription>Your business details for invoicing and contracts.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="business-name">Business Name</Label>
                                    <Input id="business-name" placeholder="Your Business LLC" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tax-id">Tax ID</Label>
                                    <Input id="tax-id" placeholder="XX-XXXXXXX" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="business-address">Business Address</Label>
                                <Input id="business-address" placeholder="123 Creator Street, City, State 12345" />
                            </div>

                            <Button>Update Business Info</Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Notifications */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>Manage your notification preferences.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Email notifications</Label>
                                    <p className="text-xs text-muted-foreground">Get updates about your deals</p>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Push notifications</Label>
                                    <p className="text-xs text-muted-foreground">Mobile and browser notifications</p>
                                </div>
                                <Switch />
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Payment reminders</Label>
                                    <p className="text-xs text-muted-foreground">Remind clients about payments</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Account */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>Manage your account settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button variant="outline" className="w-full">
                                Change Password
                            </Button>
                            <Button variant="outline" className="w-full">
                                Export Data
                            </Button>
                            <Button variant="destructive" className="w-full">
                                Delete Account
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Settings;
