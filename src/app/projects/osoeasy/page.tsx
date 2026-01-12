'use client';

import { motion } from 'framer-motion';
import {
    ArrowLeft, ExternalLink, CheckCircle2, Users, Shield, Database,
    Smartphone, Code, TrendingUp, Clock, Zap, ShoppingCart, Package,
    Barcode, Truck, FileSignature, CreditCard, BarChart3, Settings,
    UserCheck, Store, Building2, Scan, Receipt, MapPin, Image as ImageIcon, Play,
    Bell, AlertCircle, DollarSign, Printer, RefreshCw, Navigation
} from 'lucide-react';
import Link from 'next/link';

export default function OsoeasyLaundryCaseStudy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Link>
            </div>

            {/* SECTION 1: Hero / Project Introduction */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20 sm:py-32">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Osoeasy – Smart Laundry Management & POS System
                        </h1>
                        <p className="text-xl sm:text-2xl text-cyan-600 font-semibold mb-6">
                            Multi-Role SaaS Platform with POS, Subscription & Mobile Apps
                        </p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                            Osoeasy is an end-to-end laundry management system designed to handle complex operations
                            across multiple roles, POS billing, subscriptions, barcode tracking, mobile apps, and
                            real-time order processing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://osoeasy.no/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold shadow-lg hover:bg-cyan-700 transition-colors"
                            >
                                View Live Demo <ExternalLink className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="/#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

             {/* SECTION: Gallery & Videos */}
             <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
                            <ImageIcon className="w-8 h-8 text-cyan-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
                        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Take a closer look at the application interface and features.
                        </p>
                    </motion.div>

                    {/* Screenshots Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                         {/* Screenshot 1: Dashboard Overview */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
                        >
                            <div className="aspect-video bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src="/osoeasy-dashboard.png" 
                                    alt="Dashboard Overview" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-1">Dashboard Overview</h3>
                                <p className="text-gray-500 text-sm">Real-time analytics and quick actions.</p>
                            </div>
                        </motion.div>

                         {/* Screenshot 2: POS Interface */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
                        >
                            <div className="aspect-video bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src="/osoeasy-pos.png" 
                                    alt="POS Interface" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-1">POS Interface</h3>
                                <p className="text-gray-500 text-sm">Efficient billing and order management.</p>
                            </div>
                        </motion.div>

                         {/* Screenshot 3: Mobile App */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
                        >
                            <div className="aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src="/osoeasy-mobile.jpg" 
                                    alt="Mobile App" 
                                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-1">Mobile App</h3>
                                <p className="text-gray-500 text-sm">Customer booking and tracking.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Video Section */}
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                                <Play className="w-6 h-6 text-cyan-600" /> Demo Videos
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Video 1 */}
                            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative group">
                                <video controls className="w-full h-full object-cover">
                                    <source src="/osoeasy-demo-1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                             {/* Video 2 */}
                             <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative group">
                                <video controls className="w-full h-full object-cover">
                                    <source src="/osoeasy-demo-2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <p className="text-center text-gray-500 mt-4 text-sm">
                            Watch the platform in action.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Super Admin Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Super Admin Features</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Complete control over multiple branches, subscriptions, and global settings
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Multi-Branch Management', desc: 'Monitor and manage multiple laundry outlets from a single dashboard', icon: Building2 },
                            { title: 'Centralized Product Control', desc: 'Create and manage master product lists and categories for all branches', icon: Package },
                            { title: 'Subscription Management', desc: 'Create plans, assign to branches, and track expiry dates', icon: CreditCard },
                            { title: 'Global Reporting', desc: 'Access consolidated financial and operational reports across all stores', icon: BarChart3 },
                            { title: 'User Role Administration', desc: 'Manage system-wide users, permissions, and access levels', icon: Shield },
                            { title: 'System Configuration', desc: 'Configure global settings, taxes, and notification preferences', icon: Settings },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                            >
                                <feature.icon className="w-10 h-10 text-cyan-600 mb-3" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Project Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
                            <Package className="w-8 h-8 text-cyan-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
                        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Osoeasy is a full-scale laundry ERP & POS platform built to manage laundry operations
                                for admins, corporates, stores, delivery staff, and customers — all from a single
                                centralized system.
                            </p>
                            <p>
                                The platform automates order creation, billing, barcode tracking, subscriptions, delivery,
                                and customer engagement using web and mobile applications.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: User Roles & Access Control */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">User Roles & Access Control</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The system is designed with strict role-based access control (RBAC) to ensure security and
                            operational efficiency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield className="w-6 h-6" />,
                                role: "Super Admin",
                                desc: "Full control over all stores, pricing, users, and reports."
                            },
                            {
                                icon: <Building2 className="w-6 h-6" />,
                                role: "Corporate Admin",
                                desc: "Manages B2B contracts, bulk orders, and corporate billing."
                            },
                            {
                                icon: <Store className="w-6 h-6" />,
                                role: "Store Manager",
                                desc: "Handles daily store operations, staff, and inventory."
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                role: "Counter Staff",
                                desc: "Creates orders, processes payments, and hands over garments."
                            },
                            {
                                icon: <Truck className="w-6 h-6" />,
                                role: "Delivery Boy",
                                desc: "Manages pickups, deliveries, and route optimization via app."
                            },
                            {
                                icon: <UserCheck className="w-6 h-6" />,
                                role: "Customer",
                                desc: "Books pickups, tracks orders, and manages subscriptions."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.role}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Subscription Management */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Subscription Management</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Feature access controlled via subscription with automatic reminders
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
                            <CreditCard className="w-16 h-16 text-cyan-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscription Features</h3>
                            <ul className="space-y-3">
                                {[
                                    'Plans created by Super Admin',
                                    'Assigned to branch admins',
                                    'Feature access controlled',
                                    'Automatic expiry reminders',
                                    'Limited access when expired',
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <Shield className="w-16 h-16 text-cyan-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Access Control</h3>
                            <ul className="space-y-3">
                                {[
                                    'Role-based permissions',
                                    'Branch-specific access',
                                    'Subscription-based features',
                                    'Secure authentication',
                                    'Automated enforcement',
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Push Notification System */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Push Notification System</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Automatic alerts to improve renewal rate and ensure uninterrupted service
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            {...fadeInUp}
                            className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 shadow-lg"
                        >
                            <Bell className="w-16 h-16 text-cyan-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notification Features</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: AlertCircle, text: 'Automatic push notifications' },
                                    { icon: Clock, text: 'Alerts start 10 days before expiry' },
                                    { icon: Users, text: 'Reminders sent to admins' },
                                    { icon: TrendingUp, text: 'Improved renewal rates' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center gap-3 bg-white rounded-lg p-4"
                                    >
                                        <item.icon className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl h-full flex items-center justify-center p-8"
                        >
                            <div className="text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-flex items-center justify-center w-32 h-32 bg-cyan-100 rounded-full mb-4"
                                >
                                    <Bell className="w-16 h-16 text-cyan-600" />
                                </motion.div>
                                <p className="text-gray-600 font-semibold text-lg">Real-time Notifications</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: Barcode, Bag & Machine Integration */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Barcode, Bag & Machine Integration</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Seamless tracking from pickup to delivery with automated barcode systems
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Barcode Generation',
                                icon: Barcode,
                                desc: 'Unique barcode generated for every order and attached to laundry bags.',
                                color: 'cyan'
                            },
                            {
                                title: 'Machine Integration',
                                icon: Printer,
                                desc: 'Automated printing and assignment of bag numbers to orders.',
                                color: 'blue'
                            },
                            {
                                title: 'Real-time Scanning',
                                icon: Scan,
                                desc: 'Instant display of order details, customer info, and status upon scan.',
                                color: 'indigo'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group"
                            >
                                <div className={`w-14 h-14 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                                {item.icon === Scan && (
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 left-0 w-full h-1 bg-cyan-400 opacity-20"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Customer Mobile App */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Customer Mobile App</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            User-friendly mobile experience with branch-specific pricing
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div {...fadeInUp}>
                            <div className="space-y-6">
                                {[
                                    { title: 'Login & Registration', desc: 'Easy customer onboarding', icon: UserCheck },
                                    { title: 'Product Browsing', desc: 'Category-wise product display', icon: Package },
                                    { title: 'Branch Pricing', desc: 'Automatic price calculation based on branch', icon: DollarSign },
                                    { title: 'Order Placement', desc: 'Simple order creation and tracking', icon: Receipt },
                                    { title: 'Invoice Generation', desc: 'Digital invoices for all orders', icon: Receipt },
                                    { title: 'Offers & Discounts', desc: 'Real-time offer display', icon: TrendingUp },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-cyan-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full filter blur-3xl opacity-30"></div>
                            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border-4 border-gray-100">
                                 <img 
                                    src="/osoeasy-mobile.jpg" 
                                    alt="Osoeasy Mobile App" 
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: Delivery Boy Mobile App */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Delivery Boy Mobile App</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dedicated app for logistics with real-time tracking and updates
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div {...fadeInUp} className="space-y-8">
                            {[
                                { title: 'Order Assignment', desc: 'Instant notification of assigned pickups and deliveries', icon: Bell },
                                { title: 'Live Route Tracking', desc: 'Integrated maps for optimal route planning', icon: MapPin },
                                { title: 'Status Updates', desc: 'Real-time updates (Picked, In Process, Delivered)', icon: RefreshCw },
                                { title: 'Digital Proof', desc: 'Digital signatures and delivery confirmation', icon: FileSignature },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-cyan-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Mockup Visualization */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-3xl transform rotate-3"></div>
                             <div className="relative bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-900 max-w-sm mx-auto">
                                <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] relative">
                                    {/* Mock Header */}
                                    <div className="bg-cyan-600 p-6 text-white">
                                        <div className="flex justify-between items-center mb-4">
                                            <Truck className="w-6 h-6" />
                                            <span className="font-semibold">Delivery App</span>
                                        </div>
                                        <div className="text-2xl font-bold">3 Active Orders</div>
                                        <div className="text-cyan-100 text-sm">You are online</div>
                                    </div>
                                    
                                    {/* Mock Map Area */}
                                    <div className="bg-gray-100 h-1/2 p-4 relative">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                            <MapPin className="w-32 h-32 text-gray-400" />
                                        </div>
                                        {/* Route Line */}
                                        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                                            <path d="M 50 50 Q 150 150 250 100" stroke="#0891b2" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                                        </svg>
                                        {/* Pins */}
                                        <div className="absolute top-10 left-10 bg-white p-2 rounded-full shadow-lg">
                                            <Store className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div className="absolute top-24 right-16 bg-white p-2 rounded-full shadow-lg">
                                            <Navigation className="w-5 h-5 text-blue-600" />
                                        </div>
                                    </div>

                                    {/* Mock Order Card */}
                                    <div className="p-4 space-y-3">
                                        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-bold text-gray-800">Order #1234</span>
                                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pickup</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                <MapPin className="w-4 h-4" /> 123 Main St, Apt 4B
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="flex-1 bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium">Navigate</button>
                                                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* Footer CTA */}
             <section className="py-20 bg-cyan-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to build something amazing?</h2>
                    <p className="text-cyan-100 mb-8 text-lg">
                        Let's collaborate to bring your next project to life with the same level of quality and attention to detail.
                    </p>
                    <Link 
                        href="/#contact" 
                        className="inline-block px-8 py-4 bg-white text-cyan-900 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-lg"
                    >
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
}
