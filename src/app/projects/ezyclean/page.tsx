'use client';

import { motion } from 'framer-motion';
import {
    ArrowLeft, ExternalLink, CheckCircle2, Users, Shield, Database,
    Smartphone, TrendingUp, Bell, Building2, Settings, BarChart3,
    CreditCard, Package, Truck, MapPin, Zap, GitBranch, UserCheck,
    DollarSign, AlertCircle, Receipt, Clock
} from 'lucide-react';
import Link from 'next/link';

export default function EzycleanCaseStudy() {
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
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Link>
            </div>

            {/* SECTION 1: Hero / Project Introduction */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white py-20 sm:py-32">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Ezyclean – Multi-Branch Laundry Management Platform
                        </h1>
                        <p className="text-xl sm:text-2xl text-emerald-600 font-semibold mb-6">
                            Scalable SaaS System for Branch-Wise Laundry Operations
                        </p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                            Ezyclean is a centralized laundry management platform built to manage multiple branches,
                            administrators, users, customers, and delivery operations with role-based access and
                            subscription control.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold shadow-lg hover:bg-emerald-700 transition-colors"
                            >
                                View Project <ExternalLink className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="/#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Project Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                            <GitBranch className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Ezyclean is designed for laundry businesses operating across multiple branches, where
                                each branch has its own administrators, users, products, pricing, and customers.
                            </p>
                            <p>
                                The platform ensures centralized control from Super Admin while allowing branch-level
                                flexibility and independence.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: System Hierarchy & User Roles */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">System Hierarchy & User Roles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Each user operates strictly under role-based permissions, ensuring secure access and controlled operations
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {[
                            { level: 1, role: 'Super Admin', icon: Shield, color: 'purple', desc: 'Complete system control and oversight' },
                            { level: 2, role: 'Multiple Branches', icon: Building2, color: 'emerald', desc: 'Independent branch operations' },
                            { level: 3, role: 'Branch Admins', icon: UserCheck, color: 'blue', desc: 'Branch-level management' },
                            { level: 4, role: 'Branch Users', icon: Users, color: 'cyan', desc: 'Operational staff access' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.role}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="flex items-center gap-6 mb-6">
                                    <div className={`flex-shrink-0 w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                                        <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                                    </div>
                                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.role}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                                {index < 3 && (
                                    <div className="absolute left-8 top-16 w-0.5 h-6 bg-emerald-300"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Branch-Wise Product & Pricing Management */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Branch-Wise Product & Pricing Management</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Centralized product control with local flexibility
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Category-Wise Products', desc: 'Products organized by categories for easy management', icon: Package },
                            { title: 'Branch-Specific Pricing', desc: 'Each branch can set its own product prices', icon: DollarSign },
                            { title: 'Local Price Control', desc: 'Price changes apply only to that specific branch', icon: Settings },
                            { title: 'Admin Visibility', desc: 'Products visible to all admins within the same branch', icon: Users },
                            { title: 'Centralized Management', desc: 'Super Admin controls product creation and distribution', icon: Database },
                            { title: 'Flexible Operations', desc: 'Branch-level customization with global oversight', icon: GitBranch },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md border border-emerald-100"
                            >
                                <feature.icon className="w-10 h-10 text-emerald-600 mb-3" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Subscription Management */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Subscription Management</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Feature access controlled via subscription with automatic reminders
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
                            <CreditCard className="w-16 h-16 text-emerald-600 mb-4" />
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
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
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
                            <Shield className="w-16 h-16 text-emerald-600 mb-4" />
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
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Push Notification System */}
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
                            className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-8 shadow-lg"
                        >
                            <Bell className="w-16 h-16 text-emerald-600 mb-4" />
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
                                        <item.icon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl h-full flex items-center justify-center p-8"
                        >
                            <div className="text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-flex items-center justify-center w-32 h-32 bg-emerald-100 rounded-full mb-4"
                                >
                                    <Bell className="w-16 h-16 text-emerald-600" />
                                </motion.div>
                                <p className="text-gray-600 font-semibold text-lg">Real-time Notifications</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Customer Mobile App */}
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
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-emerald-600" />
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
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl h-96 flex items-center justify-center"
                        >
                            <div className="text-center">
                                <Smartphone className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
                                <p className="text-gray-600 font-semibold">Customer App Interface</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Delivery Boy Mobile App */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Delivery Boy Mobile App</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Efficient delivery management with real-time tracking
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            {...fadeInUp}
                            className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl h-96 flex items-center justify-center order-2 md:order-1"
                        >
                            <div className="text-center">
                                <Truck className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
                                <p className="text-gray-600 font-semibold">Delivery App Interface</p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="order-1 md:order-2">
                            <div className="space-y-6">
                                {[
                                    { title: 'Assigned Orders', desc: 'View all assigned delivery orders', icon: Package },
                                    { title: 'Status Updates', desc: 'Update order status in real-time', icon: CheckCircle2 },
                                    { title: 'Live Tracking', desc: 'GPS-based order tracking', icon: MapPin },
                                    { title: 'Real-time Sync', desc: 'Automatic sync with admin system', icon: Zap },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-emerald-600" />
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
                    </div>
                </div>
            </section>

            {/* SECTION 9: Dashboards & Records */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Dashboards & Records</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive analytics and monitoring for each branch
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { label: 'Branch Dashboards', icon: BarChart3 },
                            { label: 'Customer Records', icon: Users },
                            { label: 'Order Monitoring', icon: Package },
                            { label: 'Payment History', icon: CreditCard },
                            { label: 'Performance Overview', icon: TrendingUp },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-xl p-6 shadow-md text-center"
                            >
                                <item.icon className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                                <p className="text-gray-900 font-semibold">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 10: Technology Stack */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
                        <p className="text-gray-600">Built with scalable, enterprise-grade technologies</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: 'Laravel', category: 'Backend' },
                            { name: 'Web Dashboard', category: 'Frontend' },
                            { name: 'Customer App', category: 'Mobile' },
                            { name: 'Delivery App', category: 'Mobile' },
                            { name: 'MySQL', category: 'Database' },
                            { name: 'Role-Based Auth', category: 'Security' },
                            { name: 'Push Notifications', category: 'Integration' },
                        ].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full font-semibold shadow-md cursor-pointer"
                            >
                                <span className="block text-sm">{tech.name}</span>
                                <span className="block text-xs opacity-80">{tech.category}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 11: My Role & Contribution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Role & Contribution</h2>
                        <p className="text-gray-600">Key responsibilities in building this multi-branch system</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                'Backend architecture & logic',
                                'Role & permission system',
                                'Branch & subscription management',
                                'Push notification implementation',
                                'Mobile app workflow integration',
                                'Testing & deployment support',
                            ].map((contribution, index) => (
                                <motion.li
                                    key={contribution}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-gray-700"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                    <span>{contribution}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 12: Call To Action */}
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Need a scalable multi-branch business system?
                        </h2>
                        <p className="text-xl text-emerald-100 mb-10">
                            Let's create a powerful solution for your growing business
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                        >
                            Let's Build It Together
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
