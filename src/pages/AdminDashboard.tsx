import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, LogOut, Users, Briefcase, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
    is_active: boolean;
    created_at: string;
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
    created_at: string;
}

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'jobs' | 'team'>('jobs');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [showForm, setShowForm] = useState(false);

    // Form States
    const [editingJob, setEditingJob] = useState<Job | null>(null);
    const [jobFormData, setJobFormData] = useState({
        title: '',
        department: '',
        location: '',
        type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract',
        description: ''
    });

    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [memberFormData, setMemberFormData] = useState({
        name: '',
        role: '',
        image: '',
        description: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        fetchJobs();
        fetchTeam();
    }, [navigate]);

    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('http://localhost:5000/api/jobs/admin/all', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.success) setJobs(data.jobs);
        } catch (error) {
            console.error('Fetch jobs error:', error);
        }
    };

    const fetchTeam = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/team');
            const data = await response.json();
            if (data.success) setTeam(data.data);
        } catch (error) {
            console.error('Fetch team error:', error);
        }
    };

    const handleJobSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        try {
            const url = editingJob ? `http://localhost:5000/api/jobs/${editingJob.id}` : 'http://localhost:5000/api/jobs';
            const method = editingJob ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(jobFormData)
            });
            const data = await response.json();
            if (data.success) {
                fetchJobs();
                setShowForm(false);
                setEditingJob(null);
                setJobFormData({ title: '', department: '', location: '', type: 'Full-time', description: '' });
            }
        } catch (error) {
            console.error('Submit job error:', error);
        }
    };

    const handleMemberSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        try {
            const url = editingMember ? `http://localhost:5000/api/team/${editingMember.id}` : 'http://localhost:5000/api/team';
            const method = editingMember ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(memberFormData)
            });
            const data = await response.json();
            if (data.success) {
                fetchTeam();
                setShowForm(false);
                setEditingMember(null);
                setMemberFormData({ name: '', role: '', image: '', description: '' });
            }
        } catch (error) {
            console.error('Submit team member error:', error);
        }
    };

    const handleDeleteMember = async (id: number) => {
        if (!confirm('Are you sure you want to remove this team member?')) return;
        const token = localStorage.getItem('adminToken');
        try {
            const response = await fetch(`http://localhost:5000/api/team/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.success) fetchTeam();
        } catch (error) {
            console.error('Delete member error:', error);
        }
    };

    const handleEditJob = (job: Job) => {
        setEditingJob(job);
        setJobFormData({
            title: job.title,
            department: job.department,
            location: job.location,
            type: job.type,
            description: job.description
        });
        setShowForm(true);
        setActiveTab('jobs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleEditMember = (member: TeamMember) => {
        setEditingMember(member);
        setMemberFormData({
            name: member.name,
            role: member.role,
            image: member.image,
            description: member.description
        });
        setShowForm(true);
        setActiveTab('team');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminData');
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight">Admin Dashboard</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Control center for Edutalks operations</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center gap-2 border border-gray-200 dark:border-gray-700 shadow-sm"
                        >
                            <LogOut size={20} />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex p-1.5 bg-gray-200 dark:bg-gray-800 rounded-2xl w-fit mb-10 shadow-inner">
                    <button
                        onClick={() => { setActiveTab('jobs'); setShowForm(false); }}
                        className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'jobs' ? 'bg-primary text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                        <Briefcase size={20} />
                        Jobs
                    </button>
                    <button
                        onClick={() => { setActiveTab('team'); setShowForm(false); }}
                        className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'team' ? 'bg-primary text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                        <Users size={20} />
                        Team
                    </button>
                </div>

                {/* Sub-header with Add Button */}
                <div className="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h2 className="text-2xl font-black">
                        {activeTab === 'jobs' ? `Active Postings (${jobs.length})` : `Team Members (${team.length})`}
                    </h2>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
                    >
                        <Plus size={20} />
                        {activeTab === 'jobs' ? 'New Job' : 'Add Team Member'}
                    </button>
                </div>

                {/* Forms Section */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-10 border border-primary/20 shadow-xl shadow-primary/5">
                                <h3 className="text-2xl font-black mb-6">{activeTab === 'jobs' ? 'Job Posting Details' : 'Team Member Details'}</h3>

                                {activeTab === 'jobs' ? (
                                    <form onSubmit={handleJobSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Position Title</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={jobFormData.title}
                                                    onChange={(e) => setJobFormData({ ...jobFormData, title: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                                    placeholder="e.g. Creative Lead"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Department</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={jobFormData.department}
                                                    onChange={(e) => setJobFormData({ ...jobFormData, department: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                                    placeholder="e.g. Design"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Location</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={jobFormData.location}
                                                    onChange={(e) => setJobFormData({ ...jobFormData, location: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                                    placeholder="e.g. Remote"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Commitment</label>
                                                <select
                                                    value={jobFormData.type}
                                                    onChange={(e) => setJobFormData({ ...jobFormData, type: e.target.value as any })}
                                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all"
                                                >
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="Contract">Contract</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Responsibilities & Requirements</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={jobFormData.description}
                                                onChange={(e) => setJobFormData({ ...jobFormData, description: e.target.value })}
                                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
                                                placeholder="Tell applicants what success looks like in this role..."
                                            />
                                        </div>
                                        <div className="flex gap-4">
                                            <button type="submit" className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                                                {editingJob ? 'Save Changes' : 'Publish Job'}
                                            </button>
                                            <button type="button" onClick={() => setShowForm(false)} className="px-10 py-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                                                Discard
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <form onSubmit={handleMemberSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={memberFormData.name}
                                                    onChange={(e) => setMemberFormData({ ...memberFormData, name: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                                    placeholder="e.g. Sarah Jenkins"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Designation</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={memberFormData.role}
                                                    onChange={(e) => setMemberFormData({ ...memberFormData, role: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                                    placeholder="e.g. Lead Instructor"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Profile Image URL</label>
                                            <div className="flex gap-4">
                                                <input
                                                    type="url"
                                                    value={memberFormData.image}
                                                    onChange={(e) => setMemberFormData({ ...memberFormData, image: e.target.value })}
                                                    className="flex-1 px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                                    placeholder="https://images.unsplash.com/..."
                                                />
                                                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                                                    {memberFormData.image ? <img src={memberFormData.image} alt="Preview" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-400" />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400">Professional Bio</label>
                                            <textarea
                                                rows={4}
                                                value={memberFormData.description}
                                                onChange={(e) => setMemberFormData({ ...memberFormData, description: e.target.value })}
                                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
                                                placeholder="Briefly describe their expertise and passion..."
                                            />
                                        </div>
                                        <div className="flex gap-4">
                                            <button type="submit" className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                                                {editingMember ? 'Save Changes' : 'Add to Team'}
                                            </button>
                                            <button type="button" onClick={() => { setShowForm(false); setEditingMember(null); setMemberFormData({ name: '', role: '', image: '', description: '' }); }} className="px-10 py-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                                                Discard
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content Lists */}
                <div className="space-y-6">
                    {activeTab === 'jobs' ? (
                        jobs.map((job) => (
                            <motion.div
                                key={job.id}
                                className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 flex justify-between items-center transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 shadow-sm"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-xl font-black">{job.title}</h4>
                                        <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${job.is_active ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'}`}>
                                            {job.is_active ? 'Active' : 'Draft'}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 font-bold flex items-center gap-2">
                                        {job.department} <span className="opacity-30">•</span> {job.location} <span className="opacity-30">•</span> {job.type}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEditJob(job)}
                                        className="p-3 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-xl hover:text-primary transition-colors"
                                    >
                                        <Edit2 size={20} />
                                    </button>
                                    <button className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={20} /></button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        team.map((member) => (
                            <motion.div
                                key={member.id}
                                className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 flex justify-between items-center transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 shadow-sm"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 overflow-hidden border border-gray-100 dark:border-gray-700">
                                        <img src={member.image || `https://ui-avatars.com/api/?name=${member.name}`} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black">{member.name}</h4>
                                        <p className="text-primary font-bold text-sm mb-1 uppercase tracking-widest">{member.role}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl line-clamp-1">{member.description}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEditMember(member)}
                                        className="p-3 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-xl hover:text-primary transition-colors"
                                    >
                                        <Edit2 size={20} />
                                    </button>
                                    <button onClick={() => handleDeleteMember(member.id)} className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={20} /></button>
                                </div>
                            </motion.div>
                        ))
                    )}

                    {((activeTab === 'jobs' && jobs.length === 0) || (activeTab === 'team' && team.length === 0)) && (
                        <div className="text-center py-24 bg-white dark:bg-gray-800 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-700">
                            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                                {activeTab === 'jobs' ? <Briefcase size={32} /> : <Users size={32} />}
                            </div>
                            <h3 className="text-2xl font-black text-gray-400 mb-2">No {activeTab} yet</h3>
                            <p className="text-gray-500 mb-8">Click the plus button above to get started.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
