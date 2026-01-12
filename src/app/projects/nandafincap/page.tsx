'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Users, Shield, Database, Smartphone, Code, TrendingUp, Clock, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function NandafincapCaseStudy() {
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
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Link>
            </div>

            {/* SECTION 1: Hero / Project Intro */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 sm:py-32">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Nandafincap – Loan Aggregator Platform
                        </h1>
                        <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
                            Secure & Scalable FinTech Solution
                        </p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                            A centralized digital platform that streamlines loan applications, KYC verification,
                            and agent workflows through e-Mitra integration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                            >
                                View Live Project <ExternalLink className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="/#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
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
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                            <Target className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nandafincap is a full-scale FinTech Loan Aggregator Platform that connects customers,
                            agents, and administrators into one unified system, enabling faster loan processing,
                            transparent tracking, and secure data management.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: Problem & Solution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                        Problem & Solution
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem Card */}
                        <motion.div
                            {...fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-red-500 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-red-500">⚠️</span> Problem
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-red-500 mt-1">✗</span>
                                    <span>Manual paperwork & slow approvals</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-red-500 mt-1">✗</span>
                                    <span>No centralized loan tracking</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-red-500 mt-1">✗</span>
                                    <span>Poor transparency for customers</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Solution Card */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-green-500 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-green-500">✓</span> Solution
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>Fully digital loan application system</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>Centralized dashboards</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>Real-time status tracking & notifications</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Key Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive features designed for seamless loan processing
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Users, title: 'Customer Loan Application', desc: 'Easy-to-use interface for customers to apply for loans with minimal steps' },
                            { icon: Shield, title: 'KYC Upload & Verification', desc: 'Secure document upload and automated verification process' },
                            { icon: Code, title: 'e-Mitra API Integration', desc: 'Seamless integration with government e-Mitra services' },
                            { icon: TrendingUp, title: 'Agent Lead Management', desc: 'Powerful tools for agents to manage and track leads efficiently' },
                            { icon: Database, title: 'Admin Dashboard & Reports', desc: 'Comprehensive analytics and reporting for administrators' },
                            { icon: CheckCircle2, title: 'Role-Based Authentication', desc: 'Secure access control with different permission levels' },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100 cursor-pointer"
                            >
                                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: User Roles & Workflow */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">User Roles & Workflow</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Each role has its own dashboard and permissions, ensuring secure and efficient loan processing
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { role: 'Customer', color: 'blue', desc: 'Apply for loans, upload documents, track application status' },
                            { role: 'Agent', color: 'indigo', desc: 'Manage leads, assist customers, process applications' },
                            { role: 'Admin', color: 'purple', desc: 'Oversee operations, generate reports, manage users' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.role}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ scale: 1.05 }}
                                className={`bg-white rounded-2xl p-8 shadow-lg text-center border-t-4 border-${item.color}-600`}
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${item.color}-100 rounded-full mb-4`}>
                                    <Users className={`w-8 h-8 text-${item.color}-600`} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.role}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Technology Stack */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
                        <p className="text-gray-600">Built with modern, reliable technologies</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: 'Laravel', category: 'Backend' },
                            { name: 'Blade', category: 'Frontend' },
                            { name: 'React', category: 'Frontend' },
                            { name: 'Flutter', category: 'Mobile App' },
                            { name: 'MySQL', category: 'Database' },
                            { name: 'e-Mitra API', category: 'Integration' },
                        ].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-md cursor-pointer"
                            >
                                <span className="block text-sm">{tech.name}</span>
                                <span className="block text-xs opacity-80">{tech.category}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 7: Screenshots / Visual Proof */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Screenshots & Visual Proof</h2>
                        <p className="text-gray-600">Explore the platform's interface and features</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            'Admin Dashboard',
                            'Loan Application Flow',
                            'Agent Panel',
                            'Mobile App Screens',
                        ].map((title, index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden shadow-lg cursor-pointer h-64 flex items-center justify-center relative group"
                            >
                                <span className="text-gray-600 font-semibold text-lg">{title}</span>
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: Project Impact */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Project Impact</h2>
                        <p className="text-gray-600">Measurable results and improvements</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, metric: '70%', label: 'Faster loan processing' },
                            { icon: Shield, metric: '100%', label: 'Improved transparency' },
                            { icon: TrendingUp, metric: 'Scalable', label: 'FinTech architecture' },
                            { icon: Zap, metric: '3x', label: 'Better agent productivity' },
                        ].map((impact, index) => (
                            <motion.div
                                key={impact.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md text-center border border-blue-100"
                            >
                                <impact.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <div className="text-4xl font-bold text-blue-600 mb-2">{impact.metric}</div>
                                <p className="text-gray-700 font-medium">{impact.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9: My Role & Contribution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Role & Contribution</h2>
                        <p className="text-gray-600">Key responsibilities in this project</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
                        <ul className="space-y-4">
                            {[
                                'Backend Development (Laravel)',
                                'API Integration (e-Mitra)',
                                'Database Design',
                                'Deployment & Debugging',
                            ].map((contribution, index) => (
                                <motion.li
                                    key={contribution}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-4 text-lg text-gray-700"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span>{contribution}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 10: Call To Action */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Want a secure & scalable system like this?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10">
                            Let's build something amazing together
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                        >
                            Let's Talk
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
