# 🚀 Reddit Clone – DevSecOps Platform on AWS EKS Jenkins CI | ArgoCD GitOps | Security Scanning | Observability

<div align="center">

**An end-to-end DevSecOps platform demonstrating production-grade CI/CD, GitOps, Kubernetes orchestration, and comprehensive security scanning on AWS**

---

</div>

## 🧠 Project Overview

This platform showcases a **complete DevSecOps implementation** for a Reddit Clone application, automating the entire software delivery lifecycle from code commit to production deployment. Built with **infrastructure as code**, **security at every stage**, and **GitOps principles**, this project demonstrates production-ready practices for cloud-native applications.

### 🎯 What This Project Demonstrates

- ✅ **Infrastructure as Code (IaC)** – Fully automated AWS infrastructure provisioning with Terraform
- ✅ **Continuous Integration** – Automated build, test, and security scanning with Jenkins
- ✅ **GitOps Deployment** – Declarative, Git-driven continuous delivery with ArgoCD
- ✅ **Container Orchestration** – Production-grade Kubernetes deployment on AWS EKS
- ✅ **Security Integration** – Multi-layered security scanning (SAST, dependency check, container scanning)
- ✅ **Observability** – Full-stack monitoring with Prometheus and Grafana
- ✅ **High Availability** – Multi-AZ deployment with auto-scaling capabilities

---

## 🏗️ Architecture

![DevSecOps Architecture](images/DevSecOps%20Architecture%20.jpeg)

**Flow Summary:**
1. Developer commits code to GitHub  
2. Jenkins CI pipeline is triggered  
3. Build, test, and security scans are executed  
4. Docker image is built and pushed  
5. Kubernetes manifests are updated in Git  
6. ArgoCD syncs changes to AWS EKS  
7. Application is monitored via Prometheus & Grafana

### Component Breakdown

| Component | Purpose | Technology |
|-----------|---------|------------|
| **Source Control** | Code repository and version control | GitHub |
| **CI Server** | Automated build and test | Jenkins |
| **Code Quality** | Static analysis and quality metrics | SonarQube |
| **Security Scanning** | Vulnerability detection | Trivy, OWASP |
| **Container Registry** | Docker image storage | AWS ECR |
| **CD/GitOps** | Declarative deployment | ArgoCD |
| **Orchestration** | Container orchestration | AWS EKS (Kubernetes) |
| **Monitoring** | Metrics and visualization | Prometheus, Grafana |
| **Infrastructure** | Infrastructure provisioning | Terraform |

---

## ✨ Key Features

### 🔄 CI/CD Automation
- **Jenkins Pipeline** with automated triggers on Git commits
- **Multi-stage builds** with parallel execution for faster feedback
- **Automated testing** at every stage
- **Quality gates** to prevent bad code from reaching production
- **Artifact management** with versioning and tagging

### 🛡️ Security-First Approach
- **SonarQube** – Static code analysis for code quality and security
- **Trivy** – Container and filesystem vulnerability scanning
- **OWASP Dependency Check** – Third-party dependency vulnerability analysis
- **Security gates** in the pipeline to block vulnerable builds
- **Least-privilege** IAM roles and security groups

### ☸️ Kubernetes & Cloud Native
- **AWS EKS** cluster with managed node groups
- **Multi-AZ deployment** for high availability
- **Horizontal Pod Autoscaling (HPA)** for dynamic scaling
- **Cluster Autoscaler** for node-level scaling
- **Rolling updates** with zero downtime
- **Health checks** and self-healing capabilities

### 📊 Observability
- **Prometheus** for metrics collection
- **Grafana** dashboards for visualization
- **Application metrics** and custom dashboards
- **Alerting** for critical issues

### 🔄 GitOps Methodology
- **ArgoCD** for declarative deployments
- **Git as single source of truth**
- **Automatic sync** from Git to cluster
- **Self-healing** deployments
- **Rollback capabilities** with Git history

---

## 🛠️ Technology Stack

### Application
- **Frontend:** Next.js
- **Backend:** Firebase
- **Build Tool:** npm

### DevOps & Infrastructure
- **Cloud Provider:** AWS (EKS, ECR, VPC, ALB, Route53)
- **Infrastructure as Code:** Terraform
- **Container Runtime:** Docker
- **Container Orchestration:** Kubernetes (EKS)
- **CI/CD:** Jenkins, ArgoCD

### Security & Quality
- **SAST:** SonarQube
- **Container Scanning:** Trivy
- **Dependency Scanning:** OWASP Dependency Check
- **Secrets Management:** Jenkins Secrets

### Observability
- **Metrics:** Prometheus
- **Visualization:** Grafana
  
---
</div>
