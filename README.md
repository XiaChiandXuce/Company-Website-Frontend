# TYH Company - 定制化软件开发官方网站

## 项目简介
这是 TYH Company 的官方网站，旨在展示我们高端的定制化软件开发服务。本项目采用现代化的前端技术栈，致力于打造高性能、视觉独特且用户体验一流的 Web 应用。

网站采用了 **"Deep Space & Digital Zen" (深空与数字禅意)** 的设计美学，结合深色玻璃拟态 (Dark Glassmorphism)、渐变光晕和微交互动画，体现公司的高科技属性与高端定位。

## 🌟 核心特性
-   **高端视觉设计**: 自定义 "Deep Space" 主题，拒绝通用模板。
-   **流畅微交互**: 基于 Framer Motion 的入场动画与悬停效果。
-   **响应式布局**: 完美适配桌面端、平板和移动端设备。
-   **组件化开发**: 基于 Atomic Design 原子化设计理念构建。
-   **CSS Modules**: 模块化样式管理，确保无样式冲突。

## 🛠 技术栈
本项目基于以下核心技术构建：
-   **构建工具**: [Vite](https://vitejs.dev/) - 极速的开发服务器和构建工具 (v6+)
-   **框架**: [React](https://react.dev/) - 用于构建用户界面的 JavaScript 库 (v18+)
-   **语言**: [TypeScript](https://www.typescriptlang.org/) - 提供强类型支持
-   **设计系统**: Vanilla CSS Variables + CSS Modules (定制化设计，无重型 UI 库依赖)
-   **路由**: React Router v6
-   **动画**: Framer Motion

## 📂 目录结构
```bash
frontend/
├── src/
│   ├── components/      # 组件库
│   │   ├── atoms/       # 原子组件 (Button, Input, TextArea, Logo...)
│   │   ├── molecules/   # 分子组件 (Card, PageHeader, NavLink...)
│   │   ├── organisms/   # 组织组件 (HeroSection, ServiceGrid, Footer...)
│   │   └── layout/      # 布局组件 (MainLayout, Container)
│   ├── pages/           # 页面路由组件
│   │   ├── LandingPage  # 首页
│   │   ├── ServicesPage # 服务详情页
│   │   ├── PortfolioPage# 案例展示页
│   │   ├── ContactPage  # 联系我们页
│   │   └── AboutPage    # 关于我们页
│   ├── styles/          # 全局样式
│   │   ├── variables.css # CSS 变量定义 (颜色, 字体, 间距)
│   │   └── global.css    # 全局重置与通用样式
│   └── App.tsx          # 根组件与路由配置
├── public/              # 公共静态文件
└── index.html           # 入口 HTML
```

## 🚀 快速开始

### 1. 环境准备
确保您的环境中已安装 [Node.js](https://nodejs.org/) (推荐 v18+)。

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```
访问 [http://localhost:5173](http://localhost:5173) 查看效果。

### 4. 构建生产版本
```bash
npm run build
```
构建产物将输出到 `dist` 目录。

## 🎨 设计系统概览 (Deep Space Theme)
-   **主色调**: 深蓝黑背景 (`#0B0B15`) 搭配 靛蓝/紫色渐变 (`#6366f1`, `#8b5cf6`)。
-   **质感**: 深色磨砂玻璃，高光边框，漫反射光晕。
-   **排版**: 使用系统字体栈 (Inter/Roboto) 配合优雅的字重与行高。

## 📝 许可证
Private (私有项目) - Copyright © 2026 TYH Company. All rights reserved.
