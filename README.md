# SAFETY-TRASH
## FOR FILES THST I LSTER EDDITED OR RE MODIFY KEEPING THE OLD VERSION FOR SECURITY JUST INCASE ANYTHING HAPPEN

# first one about full devsecops/platform matterial 







Week 1 - Linux Under Pressure → Module 1 (Linux)
Week 2 - Networking           → Module 2 (Networking)
Week 3 - IAM Deep Dive        → Module 3 (IAM)
Weeks 4-5 - Multi-Tier App    → Module 4 (Production App)
Week 6 - Cost Modeling        → Module 5 (Cost Modeling)
Week 7 - Control Plane        → Module 7 (Control Plane)
Weeks 9-10 - Production EKS   → Module 8 (EKS)
Week 12 - Autoscaling         → Module 9 (Autoscaling)
Weeks 13-14 - Terraform       → Module 10 (IaC)
Weeks 15-18 - CI/CD + GitOps  → Module 11 (CI/CD)
Phase 4 - Cost Domination     → Module 12 (Cost Domination)
Phase 5 - Observability+Chaos → Module 13 (Observability)

# Phase 6 - Portfolio           → Portfolio Repository


## THE COMPLETE JOURNEY — ALL 13 MODULES
MODULE 1:  Linux Under Pressure
           → You understand the OS the cluster runs on

MODULE 2:  Networking First Principles
           → You understand how every packet travels

MODULE 3:  IAM Deep Dive
           → You understand identity and permissions

MODULE 4:  Production Multi-Tier App
           → You deployed a real 3-tier production system

MODULE 5:  Cloud Cost Modeling
           → You can read any AWS bill and find the waste

MODULE 6:  Kubernetes Operator Level
           → You can operate any Kubernetes cluster

MODULE 7:  Control Plane Internals
           → You understand how Kubernetes thinks

MODULE 8:  Production EKS
           → You built a private, secure, production cluster

MODULE 9:  Autoscaling
           → Your system breathes automatically under load

MODULE 10: Infrastructure as Code
           → Your entire platform is in Git

MODULE 11: CI/CD + GitOps
           → Changes deploy automatically with 7 security gates

MODULE 12: Cost Domination
           → You cut the bill by 60% without breaking anything

MODULE 13: Observability + Chaos
           → You KNOW the system works. You have proof.

PORTFOLIO: Architecture + Postmortems + Cost Study + Security + Benchmarks
           → You can show any hiring manager exactly what you built

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT YOU CAN DO NOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Deploy a complete production platform from scratch
Secure it against the OWASP top 10 cloud attack vectors
Automate every deployment through CI/CD and GitOps
Cut cloud costs by 40-60% methodically
Scale applications automatically under any load
Detect failures before users do
Break things on purpose to find gaps before they find you
Document everything so the team knows what you built
Prove reliability with numbers not feelings

This is what Senior Platform Engineers and DevSecOps Engineers do.
This is what gets you hired.
This is what makes you irreplaceable.

Go build the portfolio. Put every piece in GitHub.
Link it in your resume. Walk any interviewer through it.
Show them the metrics. Show them the postmortems.
Show them the chaos experiments.

The portfolio IS the interview.
You now know everything. Not as a beginner who read about it. As an engineer who built it, broke it, fixed it, optimized it, secured it, measured it, and documented it.
Go make it real.

# Complete Curriculum — Everything Taught

---

## MODULE 1: Linux Under Pressure

**Study**
- Process lifecycle — states, fork, exec, wait, zombie
- Unix signals — SIGTERM, SIGKILL, SIGHUP, SIGSTOP, all 17
- Memory — RSS vs VSZ, overcommit, virtual vs physical
- File descriptors — stdin/stdout/stderr, limits, socket leaks
- cgroups — hierarchy, v2 structure, CPU throttling, memory limits
- TCP socket states — SYN, ESTABLISHED, TIME_WAIT, CLOSE_WAIT
- systemd — unit files, service management, journald, cgroup integration

**Practice**
- Inspect /proc like a detective
- Trace system calls with strace
- Simulate memory exhaustion
- Force OOM kill
- Limit CPU via cgroups
- Inspect /proc filesystem
- Trace system calls

**Deliverable**
- What happens during OOM
- How kernel chooses victim
- How CPU throttling behaves

---

## MODULE 2: Networking First Principles

**Study**
- TCP 3-way handshake — SYN, SYN-ACK, ACK, sequence numbers
- TLS handshake — certificate chain, CA trust, TLS 1.3 flow
- DNS resolution chain — recursive resolver, root NS, TLD, authoritative
- NAT — SNAT, DNAT, masquerade, AWS VPC NAT gateway
- Stateful vs stateless filtering — security groups vs NACLs
- Load balancing — algorithms, Layer 4 vs Layer 7, health checks

**Practice**
- Build VPC with public and private subnets
- NAT gateway routing
- Route tables
- Security groups
- Break and fix — remove route, block port, misconfigure NACL

**Deliverable**
- Packet flow diagram
- Failure case analysis

---

## MODULE 3: IAM Deep Dive

**Study**
- Policy evaluation logic — full 5-stage pipeline
- Explicit deny precedence — veto power
- Resource vs identity policies — same account vs cross account
- STS role assumption — trust policies, temporary credentials
- Federation basics — SAML, OIDC, GitHub Actions OIDC
- Confused deputy problem and ExternalId

**Practice**
- Create over-permissive role
- Simulate breach attempt
- Restrict to least privilege
- Permission boundaries
- IAM policy simulator

**Deliverable**
- IAM misconfiguration case study

---

## MODULE 4: Production Multi-Tier App

**Deploy**
- Application Load Balancer with HTTPS
- Auto Scaling EC2 with launch templates
- Private RDS PostgreSQL Multi-AZ
- Bastion host with SSH jump
- CloudWatch alarms and dashboard

**Simulate**
- Instance crash and ASG replacement
- DB connection exhaustion
- AZ outage and Multi-AZ failover

**Deliverable**
- Architecture diagram
- Failure propagation analysis
- Cost breakdown

---

## MODULE 5: Cloud Cost Modeling

**Study**
- AWS Cost Explorer queries
- Compute cost breakdown
- Storage cost breakdown
- Data transfer costs
- NAT gateway cost analysis

**Practice**
- Generate cost report script
- Analyze unattached EBS volumes
- S3 storage class analysis
- RDS storage analysis

**Deliverable**
- Cost model spreadsheet — [File needed: .xlsx]
- Dashboard tab
- Compute tab
- Storage tab
- Data transfer tab
- NAT gateway tab
- Optimization actions tab
- 30% reduction plan tab

---

## MODULE 6: Kubernetes Operator Level

**Study**
- Control plane components — API server, etcd, scheduler, controller manager
- Worker node agents — kubelet, kube-proxy, containerd, CNI
- Pod anatomy — security context, probes, resources, volumes
- Deployments — rolling updates, rollback, revision history
- Services — ClusterIP, NodePort, LoadBalancer, ExternalName, headless
- Ingress — rules, ALB controller, TLS termination
- ConfigMaps and Secrets — creation, mounting, external secrets
- RBAC — ServiceAccount, Role, RoleBinding, ClusterRole
- Resource management — Requests vs Limits, QoS classes
- LimitRange and ResourceQuota
- StatefulSets — stable identity, ordered deployment, PVC templates
- HorizontalPodAutoscaler — metrics, behavior, scale policies
- NetworkPolicies — default deny, explicit allow, zero trust

**Practice**
- kubectl toolkit — full command reference
- Production debugging flowchart

**Deliverable**
- Complete production Kubernetes setup

---

## MODULE 7: Control Plane Internals

**Study**
- etcd — Raft consensus, leader election, quorum, data structure
- etcd backup and restore — snapshot, restore procedure
- etcd performance tuning — disk latency, defrag, encryption at rest
- API server — full request pipeline (TLS → AuthN → AuthZ → Admission → etcd → Watch)
- Admission controllers — mutating, validating, webhook configuration
- Scheduler algorithm — filtering predicates, scoring functions
- Scheduler configuration — expanders, custom profiles
- Taints and tolerations — effects, production use cases
- kubelet — sync loop, probe workers, eviction manager, garbage collection
- kubelet configuration — eviction thresholds, image GC, pod limits
- kube-proxy — iptables mode, IPVS mode, endpoint slices
- Controller manager — all controllers, deployment controller step by step
- Node lifecycle controller — failure timeline, tuning recovery

**Practice**
- Local cluster with kind — 1 control plane + 3 workers
- etcd deep dive — read raw cluster memory
- Watch scheduler make decisions
- Kill a node — observe full reconciliation
- Observe API server request pipeline
- Watch kubelet manage containers
- Watch kube-proxy network rules update

**Deliverable**
- Control plane explanation document

---

## MODULE 8: Production EKS

**Deploy**
- VPC foundation — public/private subnets, dual NAT GW, VPC endpoints
- EKS cluster — private API endpoint, OIDC provider, CloudWatch logging
- IRSA — trust policy, permission policy, ServiceAccount annotation, testing
- AWS Load Balancer Controller — ALB from Ingress objects
- cert-manager — Let's Encrypt staging and production, DNS-01 challenge
- Prometheus and Grafana — kube-prometheus-stack
- AlertManager — Slack routing, custom alert rules
- Kyverno — policy as code enforcement
- Network policies — zero trust inside cluster
- Pod Security Standards — restricted profile

**Practice**
- IRSA test — pod assumes IAM role without access keys
- ALB creation from Ingress
- Certificate issuance and auto-renewal
- Grafana dashboards and alerting

**Deliverable**
- Full production EKS cluster running

---

## MODULE 9: Autoscaling

**Study**
- HPA internals — control loop, metrics fetch, calculation formula
- HPA behavior — stabilization windows, scale-up vs scale-down policies
- Metrics sources — resource metrics, custom metrics, external metrics
- Cluster Autoscaler — scale-up loop, scale-down loop, what blocks scale-down
- CA expander strategies — least-waste, priority, random
- Spot instances — economics, interruption handling, diversification strategy
- AWS Node Termination Handler — 2-minute warning, graceful drain
- Multiple instance type strategy — pool diversification

**Practice**
- Traffic spike simulation
- HPA scaling latency measurement
- CA node provision latency measurement
- Spot interruption simulation
- Full spike simulation script

**Deliverable**
- Scaling efficiency report with timestamps

---

## MODULE 10: Infrastructure as Code

**Terraform**
- Core syntax — terraform block, provider, variable, local, data, resource, output
- Meta-arguments — count, for_each, depends_on, lifecycle
- Module pattern — directory structure, inputs, outputs, reuse
- VPC module — full implementation
- IAM module — cluster role, node role, IRSA roles
- EKS module — cluster, node groups, OIDC, addons
- Root module — wire everything together
- Remote state — S3 backend with versioning, DynamoDB locking
- State commands — list, show, mv, rm, import, pull, push
- State break and recovery — 6 scenarios with fixes

**ArgoCD GitOps**
- App of Apps pattern
- Application definitions
- Sync policies — automated, prune, selfHeal
- Sync waves — ordered deployment
- Resource hooks — PreSync, Sync, PostSync, SyncFail
- Notification system
- Kustomize overlays — base and environment overlays

**Practice**
- Full remote state backend creation
- All modules written and deployed
- State lock stuck → force unlock
- Module renamed → state mv without destroying
- Console change → drift detected → reverted
- State backed up and restored

**Deliverable**
- Infrastructure recovery report

---

## MODULE 11: CI/CD + GitOps

**CI Pipeline — Application**
- Lint stage — hadolint, yamllint, shellcheck
- Unit test stage — coverage threshold enforcement
- Secret scanning — gitleaks full history, trufflehog
- Security scanning — trivy filesystem, semgrep, bandit
- Multi-arch build — linux/amd64 and linux/arm64
- Image scanning — trivy image scan before push
- Image signing — cosign keyless OIDC signing
- Policy enforcement — conftest OPA, kyverno CLI
- GitOps update — image tag update in gitops repo

**CI Pipeline — Terraform**
- tfsec — security misconfiguration detection
- checkov — 1000+ IaC policy checks
- Infracost — cost estimation as PR comment
- terraform plan — posted as PR comment with summary
- terraform apply — automatic on merge with OIDC auth

**OPA Policies**
- Rego policy language
- Terraform plan policies — deny S3 without encryption, deny public EKS, deny wildcard IAM
- Kubernetes manifest policies — deny root, require limits, deny latest tag

**GitOps Repository CI**
- YAML linting
- Kustomize build validation
- kubeval schema validation
- conftest policy check
- argocd diff as PR comment

**Break and Fix Reconciliation**
- Manual kubectl change — selfHeal reverts it
- Wrong image applied — selfHeal reverts it
- ConfigMap deleted — ArgoCD recreates it
- Unauthorized resource — ArgoCD prunes it
- Invalid manifest in Git — old pods keep running, sync fails safely
- ArgoCD cannot reach Git — cluster unchanged, safe failure

**Deliverable**
- Full automated platform report

---

## MODULE 12: Cost Domination

**Audit**
- Cost Explorer queries — service breakdown, compute analysis, storage
- EC2 CPU utilization analysis per instance
- Pod requests vs actual usage comparison
- EBS unattached volumes detection
- NAT gateway data processing analysis
- S3 storage class analysis

**Techniques**
- Spot instances — economics, NTH, diversification, mixed node groups
- Graviton migration — ARM architecture, multi-arch images, benchmark
- Rightsizing — VPA recommendation mode, Compute Optimizer
- Idle pod elimination — KEDA scale to zero, dev cluster scheduling
- NAT gateway elimination — VPC Gateway endpoints (free), Interface endpoints
- Inter-AZ transfer optimization — topology-aware routing, topology spread
- CloudFront — egress cost elimination, cache hit rate optimization
- S3 lifecycle policies — Standard → IA → Glacier → Deep Archive → Delete
- Savings Plans — Compute SP vs EC2 Instance SP, payment options
- RDS Reserved Instances — purchase and savings calculation

**Deliverable**
- Before vs after report — $1,121 → $447/month (60% reduction)
- Risk analysis per optimization
- Implementation priority order
- Ongoing governance checklist

---

## MODULE 13: Observability + Chaos

**Prometheus**
- Architecture — discover, scrape, store, evaluate
- Metric types — counter, gauge, histogram, summary
- PromQL patterns — traffic, errors, latency, saturation, SLO tracking
- Recording rules — pre-computed queries for dashboard performance

**Grafana**
- kube-prometheus-stack installation
- Golden signals dashboard — all four signals as code
- SLO panel — 30-day availability and error budget
- Dashboard as ConfigMap — ArgoCD syncs it automatically

**SLO Framework**
- SLI vs SLO vs SLA vs Error Budget
- Availability SLO — 99.9%, 43.8 min/month budget
- Latency SLO — P99 < 500ms, 99% of requests
- Fast burn alert — 14x threshold, 1 hour budget exhaustion
- Slow burn alert — 6x threshold, 5 day exhaustion
- Error budget remaining metric and alerting

**Alert Strategy**
- Alert philosophy — every alert requires human action
- Severity levels — critical, warning, info, dead letter
- Alert rules — high error rate, service down, pod crash, OOM
- AlertManager routing — PagerDuty for critical, Slack for warning
- Inhibition rules — suppress symptoms when root cause known

**Chaos Engineering**
- Chaos Mesh installation
- Experiment 1: Pod kill — MTTR measurement
- Experiment 2: Network latency injection
- Experiment 3: Memory stress — OOM handling
- Experiment 4: AZ failure simulation — gap found, topology fix applied
- Experiment 5: DB connection exhaustion — PgBouncer prevention
- MTTR measurement framework — MTTD, response time, fix time

---

## PORTFOLIO REPOSITORY

**Architecture**
- Full system architecture overview
- VPC and network design
- EKS cluster design
- CI/CD pipeline design
- GitOps flow design

**Postmortems**
- Postmortem template — timeline, root cause, impact, resolution, action items
- Blameless culture principle
- DB connection exhaustion postmortem example

**Cost Savings Case Study**
- Before state — every dollar accounted for
- Optimizations applied — 12 techniques with savings and risk
- After state — 60% reduction achieved
- Implementation timeline — week by week

**Security Analysis**
- 7 security gates in CI pipeline
- Zero static credentials proof
- Threat model
- Tool coverage — trivy, tfsec, checkov, gitleaks, semgrep, cosign, conftest, kyverno

**Scaling Benchmarks**
- HPA scaling latency — 75 seconds end to end
- Cluster Autoscaler latency — 110 seconds, 45 seconds with balloon pods
- Spot interruption handling — zero user impact
- Load test results — RPS vs error rate vs latency vs pod count
- Cost per million requests

---

## TOTAL CURRICULUM SCOPE

```
13 modules of progressive depth
Every layer from Linux kernel to GitOps pipeline
Every component from cgroups to Kubernetes control plane
Every practice from chaos engineering to cost optimization

Tools mastered:
  Linux: strace, /proc, systemd, cgroups, tcpdump
  AWS: EC2, EKS, RDS, ALB, IAM, STS, S3, CloudFront,
       NAT GW, VPC, Route53, ACM, Cost Explorer,
       Compute Optimizer, CloudWatch, EventBridge
  Kubernetes: kubectl, helm, kustomize, stern, k9s
  Observability: Prometheus, Grafana, AlertManager, PromQL
  IaC: Terraform, ArgoCD, Kustomize
  CI/CD: GitHub Actions, cosign, trivy, tfsec, checkov,
         gitleaks, semgrep, conftest, kyverno, infracost
  Chaos: Chaos Mesh, kind
  Cost: Infracost, AWS Cost Explorer, VPA, KEDA

Skills built:
  You can deploy a production platform from zero
  You can secure it against modern attack vectors
  You can automate it completely
  You can cut its cost by 60%
  You can prove it works with chaos experiments
  You can document everything professionally
  You can explain every decision to any stakeholder
```

# Complete Curriculum — Everything Taught

---

## MODULE 1: Linux Under Pressure

**Study**
- Process lifecycle — states, fork, exec, wait, zombie
- Unix signals — SIGTERM, SIGKILL, SIGHUP, SIGSTOP, all 17
- Memory — RSS vs VSZ, overcommit, virtual vs physical
- File descriptors — stdin/stdout/stderr, limits, socket leaks
- cgroups — hierarchy, v2 structure, CPU throttling, memory limits
- TCP socket states — SYN, ESTABLISHED, TIME_WAIT, CLOSE_WAIT
- systemd — unit files, service management, journald, cgroup integration

**Practice**
- Inspect /proc like a detective
- Trace system calls with strace
- Simulate memory exhaustion
- Force OOM kill
- Limit CPU via cgroups
- Inspect /proc filesystem
- Trace system calls

**Deliverable**
- What happens during OOM
- How kernel chooses victim
- How CPU throttling behaves

---

## MODULE 2: Networking First Principles

**Study**
- TCP 3-way handshake — SYN, SYN-ACK, ACK, sequence numbers
- TLS handshake — certificate chain, CA trust, TLS 1.3 flow
- DNS resolution chain — recursive resolver, root NS, TLD, authoritative
- NAT — SNAT, DNAT, masquerade, AWS VPC NAT gateway
- Stateful vs stateless filtering — security groups vs NACLs
- Load balancing — algorithms, Layer 4 vs Layer 7, health checks

**Practice**
- Build VPC with public and private subnets
- NAT gateway routing
- Route tables
- Security groups
- Break and fix — remove route, block port, misconfigure NACL

**Deliverable**
- Packet flow diagram
- Failure case analysis

---

## MODULE 3: IAM Deep Dive

**Study**
- Policy evaluation logic — full 5-stage pipeline
- Explicit deny precedence — veto power
- Resource vs identity policies — same account vs cross account
- STS role assumption — trust policies, temporary credentials
- Federation basics — SAML, OIDC, GitHub Actions OIDC
- Confused deputy problem and ExternalId

**Practice**
- Create over-permissive role
- Simulate breach attempt
- Restrict to least privilege
- Permission boundaries
- IAM policy simulator

**Deliverable**
- IAM misconfiguration case study

---

## MODULE 4: Production Multi-Tier App

**Deploy**
- Application Load Balancer with HTTPS
- Auto Scaling EC2 with launch templates
- Private RDS PostgreSQL Multi-AZ
- Bastion host with SSH jump
- CloudWatch alarms and dashboard

**Simulate**
- Instance crash and ASG replacement
- DB connection exhaustion
- AZ outage and Multi-AZ failover

**Deliverable**
- Architecture diagram
- Failure propagation analysis
- Cost breakdown

---

## MODULE 5: Cloud Cost Modeling

**Study**
- AWS Cost Explorer queries
- Compute cost breakdown
- Storage cost breakdown
- Data transfer costs
- NAT gateway cost analysis

**Practice**
- Generate cost report script
- Analyze unattached EBS volumes
- S3 storage class analysis
- RDS storage analysis

**Deliverable**
- Cost model spreadsheet — [File needed: .xlsx]
- Dashboard tab
- Compute tab
- Storage tab
- Data transfer tab
- NAT gateway tab
- Optimization actions tab
- 30% reduction plan tab

---

## MODULE 6: Kubernetes Operator Level

**Study**
- Control plane components — API server, etcd, scheduler, controller manager
- Worker node agents — kubelet, kube-proxy, containerd, CNI
- Pod anatomy — security context, probes, resources, volumes
- Deployments — rolling updates, rollback, revision history
- Services — ClusterIP, NodePort, LoadBalancer, ExternalName, headless
- Ingress — rules, ALB controller, TLS termination
- ConfigMaps and Secrets — creation, mounting, external secrets
- RBAC — ServiceAccount, Role, RoleBinding, ClusterRole
- Resource management — Requests vs Limits, QoS classes
- LimitRange and ResourceQuota
- StatefulSets — stable identity, ordered deployment, PVC templates
- HorizontalPodAutoscaler — metrics, behavior, scale policies
- NetworkPolicies — default deny, explicit allow, zero trust

**Practice**
- kubectl toolkit — full command reference
- Production debugging flowchart

**Deliverable**
- Complete production Kubernetes setup

---

## MODULE 7: Control Plane Internals

**Study**
- etcd — Raft consensus, leader election, quorum, data structure
- etcd backup and restore — snapshot, restore procedure
- etcd performance tuning — disk latency, defrag, encryption at rest
- API server — full request pipeline (TLS → AuthN → AuthZ → Admission → etcd → Watch)
- Admission controllers — mutating, validating, webhook configuration
- Scheduler algorithm — filtering predicates, scoring functions
- Scheduler configuration — expanders, custom profiles
- Taints and tolerations — effects, production use cases
- kubelet — sync loop, probe workers, eviction manager, garbage collection
- kubelet configuration — eviction thresholds, image GC, pod limits
- kube-proxy — iptables mode, IPVS mode, endpoint slices
- Controller manager — all controllers, deployment controller step by step
- Node lifecycle controller — failure timeline, tuning recovery

**Practice**
- Local cluster with kind — 1 control plane + 3 workers
- etcd deep dive — read raw cluster memory
- Watch scheduler make decisions
- Kill a node — observe full reconciliation
- Observe API server request pipeline
- Watch kubelet manage containers
- Watch kube-proxy network rules update

**Deliverable**
- Control plane explanation document

---

## MODULE 8: Production EKS

**Deploy**
- VPC foundation — public/private subnets, dual NAT GW, VPC endpoints
- EKS cluster — private API endpoint, OIDC provider, CloudWatch logging
- IRSA — trust policy, permission policy, ServiceAccount annotation, testing
- AWS Load Balancer Controller — ALB from Ingress objects
- cert-manager — Let's Encrypt staging and production, DNS-01 challenge
- Prometheus and Grafana — kube-prometheus-stack
- AlertManager — Slack routing, custom alert rules
- Kyverno — policy as code enforcement
- Network policies — zero trust inside cluster
- Pod Security Standards — restricted profile

**Practice**
- IRSA test — pod assumes IAM role without access keys
- ALB creation from Ingress
- Certificate issuance and auto-renewal
- Grafana dashboards and alerting

**Deliverable**
- Full production EKS cluster running

---

## MODULE 9: Autoscaling

**Study**
- HPA internals — control loop, metrics fetch, calculation formula
- HPA behavior — stabilization windows, scale-up vs scale-down policies
- Metrics sources — resource metrics, custom metrics, external metrics
- Cluster Autoscaler — scale-up loop, scale-down loop, what blocks scale-down
- CA expander strategies — least-waste, priority, random
- Spot instances — economics, interruption handling, diversification strategy
- AWS Node Termination Handler — 2-minute warning, graceful drain
- Multiple instance type strategy — pool diversification

**Practice**
- Traffic spike simulation
- HPA scaling latency measurement
- CA node provision latency measurement
- Spot interruption simulation
- Full spike simulation script

**Deliverable**
- Scaling efficiency report with timestamps

---

## MODULE 10: Infrastructure as Code

**Terraform**
- Core syntax — terraform block, provider, variable, local, data, resource, output
- Meta-arguments — count, for_each, depends_on, lifecycle
- Module pattern — directory structure, inputs, outputs, reuse
- VPC module — full implementation
- IAM module — cluster role, node role, IRSA roles
- EKS module — cluster, node groups, OIDC, addons
- Root module — wire everything together
- Remote state — S3 backend with versioning, DynamoDB locking
- State commands — list, show, mv, rm, import, pull, push
- State break and recovery — 6 scenarios with fixes

**ArgoCD GitOps**
- App of Apps pattern
- Application definitions
- Sync policies — automated, prune, selfHeal
- Sync waves — ordered deployment
- Resource hooks — PreSync, Sync, PostSync, SyncFail
- Notification system
- Kustomize overlays — base and environment overlays

**Practice**
- Full remote state backend creation
- All modules written and deployed
- State lock stuck → force unlock
- Module renamed → state mv without destroying
- Console change → drift detected → reverted
- State backed up and restored

**Deliverable**
- Infrastructure recovery report

---

## MODULE 11: CI/CD + GitOps

**CI Pipeline — Application**
- Lint stage — hadolint, yamllint, shellcheck
- Unit test stage — coverage threshold enforcement
- Secret scanning — gitleaks full history, trufflehog
- Security scanning — trivy filesystem, semgrep, bandit
- Multi-arch build — linux/amd64 and linux/arm64
- Image scanning — trivy image scan before push
- Image signing — cosign keyless OIDC signing
- Policy enforcement — conftest OPA, kyverno CLI
- GitOps update — image tag update in gitops repo

**CI Pipeline — Terraform**
- tfsec — security misconfiguration detection
- checkov — 1000+ IaC policy checks
- Infracost — cost estimation as PR comment
- terraform plan — posted as PR comment with summary
- terraform apply — automatic on merge with OIDC auth

**OPA Policies**
- Rego policy language
- Terraform plan policies — deny S3 without encryption, deny public EKS, deny wildcard IAM
- Kubernetes manifest policies — deny root, require limits, deny latest tag

**GitOps Repository CI**
- YAML linting
- Kustomize build validation
- kubeval schema validation
- conftest policy check
- argocd diff as PR comment

**Break and Fix Reconciliation**
- Manual kubectl change — selfHeal reverts it
- Wrong image applied — selfHeal reverts it
- ConfigMap deleted — ArgoCD recreates it
- Unauthorized resource — ArgoCD prunes it
- Invalid manifest in Git — old pods keep running, sync fails safely
- ArgoCD cannot reach Git — cluster unchanged, safe failure

**Deliverable**
- Full automated platform report

---

## MODULE 12: Cost Domination

**Audit**
- Cost Explorer queries — service breakdown, compute analysis, storage
- EC2 CPU utilization analysis per instance
- Pod requests vs actual usage comparison
- EBS unattached volumes detection
- NAT gateway data processing analysis
- S3 storage class analysis

**Techniques**
- Spot instances — economics, NTH, diversification, mixed node groups
- Graviton migration — ARM architecture, multi-arch images, benchmark
- Rightsizing — VPA recommendation mode, Compute Optimizer
- Idle pod elimination — KEDA scale to zero, dev cluster scheduling
- NAT gateway elimination — VPC Gateway endpoints (free), Interface endpoints
- Inter-AZ transfer optimization — topology-aware routing, topology spread
- CloudFront — egress cost elimination, cache hit rate optimization
- S3 lifecycle policies — Standard → IA → Glacier → Deep Archive → Delete
- Savings Plans — Compute SP vs EC2 Instance SP, payment options
- RDS Reserved Instances — purchase and savings calculation

**Deliverable**
- Before vs after report — $1,121 → $447/month (60% reduction)
- Risk analysis per optimization
- Implementation priority order
- Ongoing governance checklist

---

## MODULE 13: Observability + Chaos

**Prometheus**
- Architecture — discover, scrape, store, evaluate
- Metric types — counter, gauge, histogram, summary
- PromQL patterns — traffic, errors, latency, saturation, SLO tracking
- Recording rules — pre-computed queries for dashboard performance

**Grafana**
- kube-prometheus-stack installation
- Golden signals dashboard — all four signals as code
- SLO panel — 30-day availability and error budget
- Dashboard as ConfigMap — ArgoCD syncs it automatically

**SLO Framework**
- SLI vs SLO vs SLA vs Error Budget
- Availability SLO — 99.9%, 43.8 min/month budget
- Latency SLO — P99 < 500ms, 99% of requests
- Fast burn alert — 14x threshold, 1 hour budget exhaustion
- Slow burn alert — 6x threshold, 5 day exhaustion
- Error budget remaining metric and alerting

**Alert Strategy**
- Alert philosophy — every alert requires human action
- Severity levels — critical, warning, info, dead letter
- Alert rules — high error rate, service down, pod crash, OOM
- AlertManager routing — PagerDuty for critical, Slack for warning
- Inhibition rules — suppress symptoms when root cause known

**Chaos Engineering**
- Chaos Mesh installation
- Experiment 1: Pod kill — MTTR measurement
- Experiment 2: Network latency injection
- Experiment 3: Memory stress — OOM handling
- Experiment 4: AZ failure simulation — gap found, topology fix applied
- Experiment 5: DB connection exhaustion — PgBouncer prevention
- MTTR measurement framework — MTTD, response time, fix time

---

## PORTFOLIO REPOSITORY

**Architecture**
- Full system architecture overview
- VPC and network design
- EKS cluster design
- CI/CD pipeline design
- GitOps flow design

**Postmortems**
- Postmortem template — timeline, root cause, impact, resolution, action items
- Blameless culture principle
- DB connection exhaustion postmortem example

**Cost Savings Case Study**
- Before state — every dollar accounted for
- Optimizations applied — 12 techniques with savings and risk
- After state — 60% reduction achieved
- Implementation timeline — week by week

**Security Analysis**
- 7 security gates in CI pipeline
- Zero static credentials proof
- Threat model
- Tool coverage — trivy, tfsec, checkov, gitleaks, semgrep, cosign, conftest, kyverno

**Scaling Benchmarks**
- HPA scaling latency — 75 seconds end to end
- Cluster Autoscaler latency — 110 seconds, 45 seconds with balloon pods
- Spot interruption handling — zero user impact
- Load test results — RPS vs error rate vs latency vs pod count
- Cost per million requests

---

## TOTAL CURRICULUM SCOPE

```
13 modules of progressive depth
Every layer from Linux kernel to GitOps pipeline
Every component from cgroups to Kubernetes control plane
Every practice from chaos engineering to cost optimization

Tools mastered:
  Linux: strace, /proc, systemd, cgroups, tcpdump
  AWS: EC2, EKS, RDS, ALB, IAM, STS, S3, CloudFront,
       NAT GW, VPC, Route53, ACM, Cost Explorer,
       Compute Optimizer, CloudWatch, EventBridge
  Kubernetes: kubectl, helm, kustomize, stern, k9s
  Observability: Prometheus, Grafana, AlertManager, PromQL
  IaC: Terraform, ArgoCD, Kustomize
  CI/CD: GitHub Actions, cosign, trivy, tfsec, checkov,
         gitleaks, semgrep, conftest, kyverno, infracost
  Chaos: Chaos Mesh, kind
  Cost: Infracost, AWS Cost Explorer, VPA, KEDA

Skills built:
  You can deploy a production platform from zero
  You can secure it against modern attack vectors
  You can automate it completely
  You can cut its cost by 60%
  You can prove it works with chaos experiments
  You can document everything professionally
  You can explain every decision to any stakeholder
```

# Linux Under Pressure 🔥

## Your Senior DevSecOps Mentor Speaking

Alright, listen up. I'm going to wire this into your brain so deep that when an on-call alert fires at 3am, your hands already know what to do. No fluff, no filler. We go deep, we go practical, and by the end you'll think in kernel-space.

---

# PART 1: THE MENTAL MODEL FIRST

Before we touch a single command, you need the right picture in your head.

**Think of Linux like a city:**

```
🏙️ THE LINUX CITY

KERNEL = The city government (makes ALL the rules, owns all the land)
PROCESSES = Buildings (each one needs space, power, addresses)
CPU = Electricity (everyone fights for it)
RAM = Physical land (finite, can't be created)
FILE DESCRIPTORS = Mailboxes (how buildings receive messages)
CGROUPS = Zoning laws (government limits what each district can consume)
SYSTEMD = The city manager (starts/stops/watches all buildings)
```

**Never forget this:** You (root) think you're in charge. You're not. The kernel is. You just ask nicely.

---

# PART 2: PROCESS LIFECYCLE — "The Life of a Process"

## The Big Picture

```
                    fork()
PARENT PROCESS ──────────────► CHILD PROCESS
     │                              │
     │                              │ exec() ← loads new program
     │                              │
     │                              ▼
     │                         RUNNING 🟢
     │                              │
     │                    ┌─────────┴──────────┐
     │                    │                    │
     │               sleeping 💤          waiting for I/O 📡
     │                    │                    │
     │                    └─────────┬──────────┘
     │                              │
     │                         STOPPED ⏸️ (SIGSTOP)
     │                              │
     │                          ZOMBIE 🧟 (dead but parent hasn't called wait())
     │                              │
     └──────────── wait() ──────────┘
                (parent reaps child, process fully gone)
```

## The 5 Process States — Burn These In

| State | Code | What it means | You'll see this when... |
|-------|------|---------------|------------------------|
| Running | `R` | On CPU right now | App is healthy, doing work |
| Sleeping (interruptible) | `S` | Waiting, can be woken | Normal — waiting for network, disk |
| Sleeping (uninterruptible) | `D` | Waiting, CANNOT be killed | **RED FLAG** — usually I/O hang, NFS issue |
| Zombie | `Z` | Dead, parent didn't reap | Parent bug — memory leak risk |
| Stopped | `T` | Paused (SIGSTOP sent) | Debugger attached, or you paused it |

### The Commands You'll Live In

```bash
# See every process, all users, with extra detail
ps aux

# Real-time view (your best friend)
top
htop  # prettier, install it everywhere

# See process as a TREE (shows parent/child relationships)
ps axjf
pstree -p

# The deep dive — everything about ONE process
cat /proc/<PID>/status
cat /proc/<PID>/cmdline | tr '\0' ' '  # what command started it
ls -la /proc/<PID>/fd/                 # what files it has open
cat /proc/<PID>/maps                   # memory map

# Find a process by name
pgrep -la nginx
pidof nginx
```

### What to look for in production:

```bash
# DANGER SIGNALS:
# Too many D-state processes = I/O bottleneck or hung NFS
ps aux | awk '$8=="D"'

# Zombie processes piling up = parent not reaping children
ps aux | awk '$8=="Z"'

# Process running but eating 100% CPU
ps aux --sort=-%cpu | head -10
```

---

# PART 3: SIGNALS — "How You Talk to Processes"

## The Mental Model

Signals are like tapping someone on the shoulder... or hitting them with a bat.

```
YOU ──── signal ────► PROCESS
                          │
                    process can:
                    1. Handle it (custom behavior)
                    2. Ignore it
                    3. Die (default)
                    
          EXCEPT SIGKILL and SIGSTOP — kernel delivers these directly
          Process has ZERO choice. Zero.
```

## The Signals You Must Know Cold

| Signal | Number | Default Action | What it really means |
|--------|--------|----------------|----------------------|
| `SIGHUP` | 1 | Terminate | "Hey, reload your config" (nginx, sshd use this) |
| `SIGINT` | 2 | Terminate | Ctrl+C — polite stop |
| `SIGKILL` | 9 | **KILL — cannot block** | Nuclear option. Process is gone NOW |
| `SIGTERM` | 15 | Terminate | "Please shut down cleanly" |
| `SIGSTOP` | 19 | **STOP — cannot block** | Freeze. Cannot be ignored |
| `SIGCONT` | 18 | Continue | Unfreeze |
| `SIGUSR1/2` | 10/12 | Terminate (default) | App-defined — nginx uses USR1 to reopen logs |
| `SIGCHLD` | 17 | Ignore | "Your child process died" — parent gets this |

## The Kill Command Decoded

```bash
# SIGTERM first — always try this first
kill <PID>          # sends SIGTERM (15) by default
kill -15 <PID>      # explicit SIGTERM
kill -TERM <PID>    # same thing

# Wait 5-10 seconds. If still alive:
kill -9 <PID>       # SIGKILL — no cleanup, instant death

# Kill by name
pkill nginx         # SIGTERM to all nginx processes
pkill -9 nginx      # SIGKILL to all nginx
killall nginx       # same as pkill

# Send to process group (kills parent AND all children)
kill -9 -<PGID>

# Real-world nginx reload (zero downtime):
kill -HUP $(cat /var/run/nginx.pid)
# OR
nginx -s reload
```

### Production Rule of Thumb:

```
SIGTERM → wait 30s → SIGKILL

NEVER start with SIGKILL unless the process is completely 
unresponsive. SIGKILL = no cleanup = potential data corruption,
open connections dropped, temp files left behind.
```

---

# PART 4: MEMORY — RSS vs VSZ (The One That Confuses Everyone)

## The Mental Model — The Apartment Building

```
VSZ (Virtual Size) = The LEASE you signed
"I have rights to 4GB of space"
But you're only using one room.

RSS (Resident Set Size) = Stuff ACTUALLY in your apartment RIGHT NOW
The physical furniture, boxes, everything physically present in RAM

SWAP = The storage unit down the street
Overflow from RAM. Slow. Very slow. Painful slow.
```

## Why VSZ is Almost Always Larger Than RSS

```
Process asks kernel: "Give me 1GB of memory"
Kernel says: "Sure!" (lies — allocates virtually, not physically)
               ↓
         VSZ grows by 1GB immediately
               ↓
Process actually USES 100MB of that memory
               ↓
         RSS grows by 100MB (only what's actually touched)

This is called: OVERCOMMIT
Linux kernel does this by default.
It's how you run 50 containers that each "need" 4GB 
on a 16GB machine.
```

## Reading Memory for Real

```bash
# Quick view of all processes memory
ps aux --sort=-%mem | head -20

# Detailed breakdown of ONE process
cat /proc/<PID>/status | grep -E "VmRSS|VmSize|VmSwap|VmPeak"

# Output explained:
# VmSize  = VSZ (total virtual memory claimed)
# VmRSS   = RSS (actual RAM used)
# VmSwap  = How much is swapped out (BAD if high)
# VmPeak  = Highest VSZ ever reached

# System-wide memory picture
free -h
cat /proc/meminfo

# What's eating RAM right now (sorted)
ps aux --sort=rss | tail -20

# smaps — the DEEP memory map (which libraries, which mappings)
cat /proc/<PID>/smaps | grep -E "^[0-9a-f]|Rss:|Size:"
```

## The Numbers That Should Scare You

```bash
free -h

              total        used        free      shared  buff/cache   available
Mem:           15Gi       14Gi        200Mi       1.0Gi       800Mi       400Mi

# "available" is what matters — not "free"
# available = free + reclaimable cache
# When available < 5% of total = YOU ARE IN TROUBLE
# When swap is being used heavily = app is already degraded
```

---

# PART 5: FILE DESCRIPTORS — "The Mailboxes"

## Mental Model

```
Every process gets a table of file descriptors (FDs).
Think of it as a numbered list of "connections" the process has open.

FD 0 = stdin  (keyboard input)
FD 1 = stdout (terminal output)  
FD 2 = stderr (error output)
FD 3+ = everything else: files, sockets, pipes, devices

Default limit per process: 1024 (soft) / 65536 (hard)
When you run out: "Too many open files" error = app starts failing
```

## The Commands

```bash
# How many FDs does a process have open?
ls /proc/<PID>/fd | wc -l

# What ARE those file descriptors?
ls -la /proc/<PID>/fd

# lsof = "list open files" — your best FD tool
lsof -p <PID>              # all FDs for one process
lsof -i :80                # what's listening on port 80
lsof -i :443               # HTTPS
lsof -u www-data           # all FDs opened by user www-data
lsof | wc -l               # total open FDs system-wide

# Check limits
ulimit -n                  # current shell's FD limit
cat /proc/<PID>/limits     # limits for a specific process

# System-wide FD usage
cat /proc/sys/fs/file-nr
# output: [open FDs] [0] [max FDs]

# Change limits (for current session)
ulimit -n 65536

# Permanent change (for a service) in /etc/security/limits.conf:
# nginx soft nofile 65536
# nginx hard nofile 65536
```

### Production FD Crisis Checklist

```bash
# App throwing "Too many open files"?
# Step 1: Find the PID
pidof <appname>

# Step 2: Count its FDs
ls /proc/<PID>/fd | wc -l

# Step 3: See what's open
lsof -p <PID> | grep -v "REG\|DIR" | head -30  # network sockets and pipes

# Step 4: Check its limit
cat /proc/<PID>/limits | grep "open files"

# Step 5: Check for socket leaks
lsof -p <PID> | grep -c CLOSE_WAIT  # connections not being cleaned up
```

---

# PART 6: CGROUPS — "The Zoning Laws"

## Mental Model

```
Without cgroups:
Process A wants 100% CPU → takes it → everything else starves

With cgroups:
Kernel enforces: "Group A gets max 50% CPU, 2GB RAM. Period."

This is how Docker/Kubernetes containers work.
Every container = a cgroup.
```

## cgroups v2 Structure (Modern Linux)

```
/sys/fs/cgroup/
├── system.slice/          ← systemd system services
│   ├── nginx.service/
│   ├── docker.service/
│   └── ...
├── user.slice/            ← user sessions
└── kubepods/              ← Kubernetes pods
    ├── besteffort/
    ├── burstable/
    └── guaranteed/
```

## Working with cgroups

```bash
# See cgroup hierarchy
systemd-cgls

# See resource usage per cgroup
systemd-cgtop

# See which cgroup a process belongs to
cat /proc/<PID>/cgroup

# See CPU/memory limits for a systemd service
systemctl show nginx | grep -E "CPU|Memory|Tasks"

# Direct cgroup inspection
cat /sys/fs/cgroup/system.slice/nginx.service/memory.current
cat /sys/fs/cgroup/system.slice/nginx.service/cpu.stat

# Create a cgroup manually (v2)
mkdir /sys/fs/cgroup/mygroup
echo "50000 100000" > /sys/fs/cgroup/mygroup/cpu.max
# ↑ 50000 out of 100000 microseconds = 50% CPU max
echo "536870912" > /sys/fs/cgroup/mygroup/memory.max
# ↑ 512MB RAM max

# Add a process to the cgroup
echo <PID> > /sys/fs/cgroup/mygroup/cgroup.procs
```

---

# PART 7: TCP SOCKETS — "The Plumbing"

## Mental Model

```
TCP Connection = a phone call

LISTEN      = phone is ringing, waiting for calls
ESTABLISHED = you're talking
TIME_WAIT   = call just ended, waiting to ensure clean close (2 min)
CLOSE_WAIT  = other side hung up, YOU haven't closed your end yet
              (if you see hundreds of these = CODE BUG)
```

## The Full TCP State Machine (Simplified)

```
Client                          Server
  │                               │
  │──── SYN ──────────────────►  │  SYN_SENT / SYN_RECEIVED
  │◄─── SYN-ACK ─────────────── │  
  │──── ACK ──────────────────►  │  ESTABLISHED ← both sides
  │                               │
  │  [data flows both ways]       │
  │                               │
  │──── FIN ──────────────────►  │  FIN_WAIT_1
  │◄─── ACK ─────────────────── │  CLOSE_WAIT ← server must close too!
  │◄─── FIN ─────────────────── │  LAST_ACK
  │──── ACK ──────────────────►  │  
  │                               │
TIME_WAIT (client waits 2MSL)     CLOSED
```

## The Commands

```bash
# See all connections
ss -tunapo          # THE command. Replaces netstat.
# -t TCP, -u UDP, -n no DNS resolve, -a all, -p process, -o timers

# Specific states
ss -t state established
ss -t state time-wait | wc -l     # how many TIME_WAIT? (should be < 10k)
ss -t state close-wait | wc -l    # CLOSE_WAIT count (should be near 0)

# What's listening?
ss -tlnp            # TCP listeners with process names

# Old school (still works)
netstat -tunapo

# Socket statistics
ss -s

# Watch connections in real-time
watch -n1 'ss -t state established | wc -l'

# Find connections to a specific port
ss -tnp dst :443
```

### Red Flags in Production

```bash
# CLOSE_WAIT piling up = application bug (not closing sockets)
ss -t state close-wait | wc -l   # if > 100, investigate

# TIME_WAIT too high (normal is fine, but millions = problem)
ss -t state time-wait | wc -l

# Fix TIME_WAIT exhaustion (tune kernel):
sysctl net.ipv4.tcp_tw_reuse=1
sysctl net.ipv4.ip_local_port_range="1024 65535"
```

---

# PART 8: SYSTEMD — "The City Manager"

## Mental Model

```
Old way (SysV init): shell scripts. Fragile. Sequential. Slow.
systemd: parallel. dependency graph. socket activation. cgroups. journald.

systemd is PID 1. It is the parent of everything.
If systemd dies, the kernel panics.
```

## Unit File Anatomy

```ini
# /etc/systemd/system/myapp.service

[Unit]
Description=My Production App
After=network.target postgresql.service    # start after these
Requires=postgresql.service                # fail if postgres not running

[Service]
Type=simple                     # process stays in foreground
User=appuser
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/bin/server --port 8080
ExecReload=/bin/kill -HUP $MAINPID        # reload = SIGHUP
Restart=always                  # always restart on failure
RestartSec=5                    # wait 5s before restart
StandardOutput=journal          # logs go to journald
StandardError=journal

# Resource limits (cgroups under the hood!)
MemoryLimit=512M
CPUQuota=50%                    # max 50% of one CPU core
LimitNOFILE=65536               # max open files

[Install]
WantedBy=multi-user.target
```

## The Commands You Use Every Day

```bash
# The basics
systemctl start nginx
systemctl stop nginx
systemctl restart nginx
systemctl reload nginx          # graceful — no dropped connections
systemctl status nginx          # state + recent logs
systemctl enable nginx          # start on boot
systemctl disable nginx

# After editing a unit file
systemctl daemon-reload         # reload systemd's config
systemctl restart nginx         # then restart the service

# Logs — journald
journalctl -u nginx             # all logs for nginx
journalctl -u nginx -f          # follow (like tail -f)
journalctl -u nginx --since "1 hour ago"
journalctl -u nginx -n 100      # last 100 lines
journalctl -u nginx -p err      # only errors
journalctl --disk-usage         # how much space logs take

# System state
systemctl list-units --failed   # what's broken?
systemctl list-units --state=failed
systemctl is-active nginx       # returns active/inactive (scriptable)
systemctl is-failed nginx

# Dependencies
systemctl list-dependencies nginx

# Resource usage (cgroups integration)
systemd-cgtop                   # real-time per-service resource use
```

---

# PART 9: THE PROJECT — Hands-On Labs 🧪

Now we build. Follow each lab in order. Each one is a real skill you'll use in production.

---

## LAB 1: Inspect /proc Like a Detective

```bash
# Start a long-running process to study
sleep 1000 &
PID=$!
echo "Our target PID: $PID"

# --- Explore /proc ---

# What command is this?
cat /proc/$PID/cmdline | tr '\0' ' '; echo

# Process status — the full picture
cat /proc/$PID/status

# KEY LINES TO UNDERSTAND:
# VmPeak: peak virtual memory
# VmSize: current virtual (VSZ)
# VmRSS:  current physical RAM (RSS)
# Threads: how many threads
# voluntary_ctxt_switches: how often it willingly gave up CPU
# nonvoluntary_ctxt_switches: how often kernel TOOK the CPU away (high = CPU starved)

# What files does it have open?
ls -la /proc/$PID/fd

# 0 → /dev/pts/X (stdin)
# 1 → /dev/pts/X (stdout)  
# 2 → /dev/pts/X (stderr)

# Its memory maps
cat /proc/$PID/maps | head -20

# What cgroup is it in?
cat /proc/$PID/cgroup

# Its resource limits
cat /proc/$PID/limits

# Clean up
kill $PID
```

---

## LAB 2: Trace System Calls with strace

```bash
# strace shows EVERY system call a process makes
# This is like reading the process's diary

# Trace a simple command
strace ls 2>&1 | head -30

# What you'll see:
# execve("/bin/ls", ...) = 0           ← "I started"
# openat(AT_FDCWD, "/etc/ld.so.cache") ← "I opened a file"
# mmap(...)                            ← "I allocated memory"
# write(1, "file1\n", 6)              ← "I wrote output"
# exit_group(0)                        ← "I exited cleanly"

# Trace just specific syscalls
strace -e trace=open,read,write ls

# Trace a running process (attach to it)
sleep 500 &
PID=$!
strace -p $PID -e trace=read,write,select &
STRACE_PID=$!
sleep 3
kill $STRACE_PID
kill $PID

# Count syscalls (profiling)
strace -c ls
# Shows: syscall name, count, time spent

# Trace a web server handling a request (powerful!)
# strace -p $(pidof nginx | awk '{print $1}') -e trace=network
```

---

## LAB 3: Simulate Memory Exhaustion + Force OOM Kill

```bash
# First, understand your current memory
free -h
cat /proc/meminfo | grep -E "MemTotal|MemAvailable|SwapTotal"

# Method 1: Python memory eater
cat << 'EOF' > /tmp/memhog.py
import time
import os

chunk = []
print(f"PID: {os.getpid()}")
print("Eating memory... 100MB at a time")

try:
    while True:
        # Allocate 100MB
        chunk.append(' ' * 100 * 1024 * 1024)
        # Count how much we have
        gb = len(chunk) * 100 / 1024
        print(f"Allocated: {gb:.1f} GB", flush=True)
        time.sleep(0.5)
except MemoryError:
    print("MemoryError hit!")
    time.sleep(60)
EOF

# Run it and watch from another terminal:
# Terminal 1:
python3 /tmp/memhog.py &
HUNGRY_PID=$!

# Terminal 2 (watch memory):
watch -n1 'free -h; echo "---"; ps aux --sort=-%mem | head -5'

# Terminal 3 (watch kernel OOM messages):
# sudo dmesg -wH | grep -E "oom|killed|memory"

# Check OOM score of our process (higher = more likely to be killed)
cat /proc/$HUNGRY_PID/oom_score
cat /proc/$HUNGRY_PID/oom_score_adj

# Adjust OOM score — make it MORE likely to be killed first
echo 1000 > /proc/$HUNGRY_PID/oom_score_adj  # range: -1000 to 1000

# Force OOM kill manually (simulate kernel behavior)
# The kernel does this: echo f > /proc/sysrq-trigger
# But we'll just kill it with SIGKILL for safety in this lab:
kill -9 $HUNGRY_PID

# Read OOM logs
dmesg | grep -E -A 10 "Out of memory|oom_kill"
```

### Understanding What You'll See in OOM Logs

```
[123456.789] Out of memory: Kill process 12345 (python3) 
             score 987 or sacrifice child

# The log shows:
# - Which process was killed
# - Its OOM score (0-1000, higher = more killable)
# - Total memory usage at time of kill
# - Memory map of the killed process

# After OOM kill, check:
dmesg | tail -50
journalctl -k | grep -E "oom|killed" | tail -20
```

---

## LAB 4: Limit CPU via cgroups

```bash
# Create a CPU hog
cat << 'EOF' > /tmp/cpuhog.sh
#!/bin/bash
echo "CPU hog PID: $$"
# Infinite loop — burns 100% of one CPU core
while true; do
    :  # no-op, but keeps CPU busy
done
EOF
chmod +x /tmp/cpuhog.sh

# Run it
/tmp/cpuhog.sh &
HOG_PID=$!

# Watch it eat CPU
top -p $HOG_PID -b -n 3

# --- Now throttle it with cgroups v2 ---

# Create our cgroup
sudo mkdir -p /sys/fs/cgroup/lab-throttle

# Set CPU limit: 20% of one core
# Format: "quota period" in microseconds
# 20000 100000 = 20ms out of every 100ms = 20%
echo "20000 100000" | sudo tee /sys/fs/cgroup/lab-throttle/cpu.max

# Move our hog into the cgroup
echo $HOG_PID | sudo tee /sys/fs/cgroup/lab-throttle/cgroup.procs

# Watch the throttling take effect
top -p $HOG_PID -b -n 5
# CPU% should drop to ~20%

# Check CPU stats (throttled time)
cat /sys/fs/cgroup/lab-throttle/cpu.stat
# nr_throttled = how many times it was throttled
# throttled_usec = total time throttled (microseconds)

# Clean up
kill $HOG_PID
sudo rmdir /sys/fs/cgroup/lab-throttle

# --- With systemd (production way) ---
# Set CPU limit for a real service:
sudo systemctl set-property nginx.service CPUQuota=25%
sudo systemctl set-property nginx.service MemoryLimit=256M
# These persist across reboots in /etc/systemd/system.control/
PART 10: THE DELIVERABLE DOCUMENT
Now you write this up as a real runbook. Here's the framework — fill it in as you do the labs:
📄 Production Runbook: Linux Under Pressure
1. What Happens During OOM?
SEQUENCE OF EVENTS:

1. Process calls malloc() / mmap() asking for memory
2. Kernel checks: is there physical memory available?
3. If NO (and swap exhausted):
   a. Kernel invokes the OOM killer
   b. OOM killer scans ALL processes
   c. Calculates oom_score for each (0-1000)
   d. Selects victim (highest score = most killable)
   e. Sends SIGKILL to victim
   f. Frees victim's memory
   g. Attempting process may or may not get memory now

4. Kernel logs to dmesg:
   "Out of memory: Kill process <PID> (<name>) score <N>"

5. If OOM killer keeps failing: kernel panic (system crash)

IMPORTANT: The killed process gets NO warning.
           No SIGTERM. No chance to flush data.
           SIGKILL directly from kernel.
           This is why OOM kills corrupt databases.
2. How Does the Kernel Choose the Victim?
OOM SCORE FORMULA:
oom_score = (RAM used by process / total RAM) * 1000
           + oom_score_adj  (tunable, -1000 to +1000)

FACTORS that INCREASE oom_score (more killable):
- Uses lots of RAM
- High oom_score_adj (we set this)
- Recently forked (children inherit parent score)

FACTORS that DECREASE oom_score (protected):
- oom_score_adj = -1000 → NEVER kill (fully protected)
- Running as root (slight reduction)
- Been running a long time

PRODUCTION TUNING:
# Protect critical services from OOM kill:
echo -1000 > /proc/$(pidof postgres)/oom_score_adj
echo -1000 > /proc/$(pidof etcd)/oom_score_adj

# Make sacrificial processes killable first:
echo 1000 > /proc/$(pidof celery-worker)/oom_score_adj
3. How Does CPU Throttling Behave?
WITHOUT CGROUPS:
- Process runs at full speed until kernel preempts it
- Scheduler (CFS - Completely Fair Scheduler) gives time slices
- High-priority processes (nice -20) get more slices
- Low-priority (nice +19) get fewer slices
- But no HARD limit — a runaway process can starve others

WITH CGROUPS CPU THROTTLING:
- cpu.max = "quota period" (e.g., "50000 100000" = 50%)
- Every 100ms period, the cgroup gets 50ms of CPU time
- When quota is exhausted: all processes in cgroup STOP
- They resume at the start of next period
- This is called: THROTTLING

WHAT THROTTLING LOOKS LIKE:
- Application latency spikes (response time goes up)
- CPU% in top looks "limited"
- cpu.stat shows nr_throttled increasing
- p99/p999 latency goes up even if average is fine

KUBERNETES CPU THROTTLING:
In k8s, cpu.limits causes throttling.
cpu.requests = scheduling (where to place the pod)
cpu.limits   = cgroups quota = THROTTLING if exceeded

A pod with limits: 500m (0.5 CPU) will be throttled
when it tries to use more than 50% of one core.
This is one of the most common k8s performance bugs.

HOW TO DETECT:
kubectl top pod <podname>
cat /sys/fs/cgroup/.../cpu.stat | grep throttled
PART 11: YOUR STUDY & PRACTICE CHECKLIST
Work through this in order. Check each box when you've done it with your own hands:
STUDY PHASE:
□ Read /proc/self/status and understand every line
□ List the 5 process states and what causes each
□ Draw the TCP state machine from memory
□ Explain RSS vs VSZ to an imaginary colleague
□ Find where cgroups v2 lives on your system

PRACTICE PHASE:
□ Lab 1: /proc inspection (done above)
□ Lab 2: strace on ls, then on a running process
□ Lab 3: memory exhaustion + OOM kill observation
□ Lab 4: CPU throttling with cgroups

DELIVERABLE:
□ OOM event: what happens, in order
□ Victim selection: the formula, how to tune it
□ CPU throttling: detection + kubernetes angle
□ A /proc cheatsheet you wrote yourself
□ A systemd unit file with resource limits

BONUS (makes you stand out):
□ Write a shell script that monitors oom_score for a list of PIDs
□ Create a systemd service with MemoryLimit + CPUQuota
□ Trace a failing app with strace and identify the syscall error
QUICK REFERENCE CARD
# ============================================
# LINUX UNDER PRESSURE — CHEAT SHEET
# ============================================

# PROCESSES
ps aux --sort=-%cpu | head -10      # top CPU eaters
ps aux --sort=-%mem | head -10      # top RAM eaters
ps aux | awk '$8=="D"'              # hung processes (DANGER)
ps aux | awk '$8=="Z"'              # zombies

# MEMORY  
free -h                             # quick memory view
cat /proc/<PID>/status | grep Vm    # process memory detail
dmesg | grep oom                    # OOM kill history

# SIGNALS
kill -15 <PID>                      # polite kill (SIGTERM)
kill -9 <PID>                       # force kill (SIGKILL)
kill -HUP <PID>                     # reload config

# FILE DESCRIPTORS
lsof -p <PID>                       # what does process have open
lsof -i :80                         # what's on port 80
ls /proc/<PID>/fd | wc -l           # FD count

# TCP
ss -tunapo                          # all connections
ss -tlnp                            # what's listening
ss -t state close-wait | wc -l     # CLOSE_WAIT count

# CGROUPS
systemd-cgtop                       # resource use by service
cat /proc/<PID>/cgroup              # which cgroup is this PID in
cat /sys/fs/cgroup/.../cpu.stat     # CPU throttle stats

# SYSTEMD
systemctl status <service>          # full status + logs
journalctl -u <service> -f          # follow logs
systemctl list-units --failed       # what's broken
That's your foundation. Go through each lab with your actual hands on a terminal — not just reading. The muscle memory is the point. When you've done all 4 labs and written your deliverable document, come back and I'll take you to the next level: kernel tuning, eBPF tracing, and container-level debugging.
You've got this. Now go break things.


# Networking First Principles 🌐

## Your Senior DevSecOps Mentor Speaking — Again

Last module you learned how the OS thinks. Now you learn how machines **talk to each other** — and more importantly, why they sometimes **refuse to**. Every production incident involving "I can't reach the service" traces back to exactly what we're covering today.

Let's wire your brain for networking.

---

# THE MASTER MENTAL MODEL FIRST

Before one command, one diagram — burn this into your head:

```
When you type "curl https://api.myapp.com" here's what ACTUALLY happens:

1. 🔍 DNS      → "What is the IP address of api.myapp.com?"
2. 🤝 TCP      → "Let's establish a reliable connection to that IP"
3. 🔒 TLS      → "Let's prove who we are and encrypt everything"
4. 📦 HTTP     → "Now send my actual request"
5. 🚦 NAT      → "Translate my private IP so the internet accepts it"
6. 🛡️ Firewall → "Is this traffic allowed through?"
7. ⚖️ Load Balancer → "Which backend server handles this?"

Every. Single. Time.

When something breaks, it breaks at ONE of these layers.
Your job is to know which layer and why.
```

---

# PART 1: TCP 3-WAY HANDSHAKE — "The Phone Call Setup"

## The Mental Model

```
TCP is like calling someone on the phone before you talk.
You don't just start screaming information.
You establish that BOTH sides are ready first.

No handshake = no connection = no data.
```

## The Handshake — Frame by Frame

```
CLIENT                                    SERVER
  │                                          │
  │  "Hey, I want to talk. Here's my        │
  │   sequence number: 1000"                │
  │──────────── SYN (seq=1000) ───────────► │  SERVER: "Got it. 
  │                                          │   I'm ready too.
  │                                          │   My seq: 5000.
  │                                          │   Your seq+1: 1001"
  │◄────── SYN-ACK (seq=5000, ack=1001) ── │
  │                                          │
  │  "Got it. Your seq+1: 5001"             │
  │──────────── ACK (ack=5001) ───────────► │
  │                                          │
  │         CONNECTION ESTABLISHED          │
  │              ↕ data flows ↕             │
```

## Why the Sequence Numbers Matter

```
seq numbers are like page numbers in a conversation.
If packet 47 gets lost, client says:
"I got up to page 46. Resend from 47."

This is how TCP guarantees ORDERED, RELIABLE delivery.
UDP doesn't do this — it just fires and forgets.

TCP = Registered mail (confirmed delivery)
UDP = Throwing a paper airplane (fast, but maybe lost)
```

## What Can Go Wrong at TCP Layer

```
Problem                  What you see              Why
─────────────────────────────────────────────────────────────────
SYN sent, no SYN-ACK    Connection timeout         Server down, firewall
                                                    dropping SYN packets

SYN-ACK received,        RST (reset)               App not listening on
but RST comes back                                  that port

Connection established,  Timeout mid-transfer       Network flap, NAT
then drops                                          timeout, idle timeout

SYN flood               Server unreachable          DDoS attack
(millions of SYNs,
no ACKs)
```

## The Commands

```bash
# Watch a TCP handshake happen in real time
tcpdump -i eth0 'host google.com and tcp' -n

# What you'll see:
# Flags [S]    = SYN
# Flags [S.]   = SYN-ACK  (. means ACK bit set)
# Flags [.]    = ACK
# Flags [P.]   = PSH-ACK  (data being sent)
# Flags [F.]   = FIN-ACK  (connection closing)
# Flags [R]    = RST       (hard reset — something is wrong)

# Test if TCP port is reachable (does handshake, closes)
nc -zv 192.168.1.10 80
nc -zv 192.168.1.10 443

# See established connections
ss -tnp state established

# See half-open connections (SYN_SENT = we sent SYN, waiting)
ss -tnp state syn-sent

# Trace the full path packets take
traceroute -T -p 443 google.com   # TCP traceroute
mtr google.com                     # live traceroute (install mtr)
```

---

# PART 2: TLS HANDSHAKE — "Showing Your ID at the Door"

## The Mental Model

```
TCP said: "We can talk reliably."
TLS says: "But first — prove you are who you say you are.
           And let's agree on a secret language nobody else understands."

TLS solves THREE problems:
1. Authentication  → "Are you REALLY api.myapp.com?"
2. Encryption      → "Nobody else can read our conversation"
3. Integrity       → "Nobody can tamper with messages in transit"
```

## TLS 1.3 Handshake (Modern — What You'll See in Production)

```
CLIENT                                         SERVER
  │                                               │
  │  ClientHello:                                 │
  │  - "I support TLS 1.3"                       │
  │  - "Here are cipher suites I support"        │
  │  - Client random bytes                        │
  │  - Key share (public key for key exchange)   │
  │────────────────────────────────────────────► │
  │                                               │
  │           ServerHello:                        │
  │           - "Let's use TLS 1.3"              │
  │           - "Let's use AES-256-GCM"          │
  │           - Server random bytes               │
  │           - Key share (server's public key)  │
  │           + Certificate (signed by CA)        │
  │           + CertificateVerify                 │
  │           + Finished (encrypted already!)     │
  │◄──────────────────────────────────────────── │
  │                                               │
  │  [Client verifies certificate chain]          │
  │  [Both sides derive same session keys]        │
  │                                               │
  │  Finished                                     │
  │────────────────────────────────────────────► │
  │                                               │
  │         🔒 ENCRYPTED CHANNEL OPEN            │
  │              ↕ HTTP/2 flows ↕                │
```

## The Certificate Chain — "Who Vouches for You?"

```
YOUR BROWSER trusts: Root CAs (baked into OS/browser)
                         │
                         │ Root CA signed
                         ▼
                 Intermediate CA
                         │
                         │ Intermediate CA signed
                         ▼
               api.myapp.com certificate
               (presented by the server)

If ANY link in this chain is broken or expired:
→ "SSL Certificate Error" / "ERR_CERT_AUTHORITY_INVALID"

Common cert problems in production:
- Certificate expired (cron job to check this!)
- Wrong hostname (cert for api.myapp.com, connecting to www.myapp.com)
- Self-signed cert (no trusted CA signed it)
- Intermediate cert missing from server config
- Clock skew (server time wrong → cert appears expired)
```

## The Commands

```bash
# Inspect a server's certificate (most useful command in TLS debugging)
openssl s_client -connect api.myapp.com:443 -servername api.myapp.com

# What to look for:
# Certificate chain (how many levels?)
# subject= CN = is the hostname correct?
# notAfter= WHEN DOES IT EXPIRE?
# Verify return code: 0 (ok)  ← must be 0

# Quick cert expiry check
echo | openssl s_client -connect api.myapp.com:443 2>/dev/null \
  | openssl x509 -noout -dates

# Check cert from a file
openssl x509 -in cert.pem -noout -text

# See what cipher was negotiated
openssl s_client -connect api.myapp.com:443 2>/dev/null \
  | grep "Cipher is"

# Test TLS versions (is TLS 1.0 still enabled? Danger!)
openssl s_client -connect api.myapp.com:443 -tls1    # should fail
openssl s_client -connect api.myapp.com:443 -tls1_1  # should fail
openssl s_client -connect api.myapp.com:443 -tls1_2  # ok
openssl s_client -connect api.myapp.com:443 -tls1_3  # preferred

# Capture TLS handshake
tcpdump -i eth0 'tcp port 443' -w /tmp/tls.pcap
# Then open in Wireshark

# Decode TLS with session key (Wireshark + SSLKEYLOGFILE)
SSLKEYLOGFILE=/tmp/keys.log curl https://api.myapp.com
```

---

# PART 3: DNS RESOLUTION CHAIN — "The Internet's Phone Book"

## The Mental Model

```
DNS is a HIERARCHICAL, DISTRIBUTED database.
No single server knows everything.
They refer you to the right person.

Think of it like asking directions:

You: "Where is 42 Baker Street?"
Stranger: "I don't know, ask the post office"
Post Office: "I don't know exactly, ask the Baker Street district office"
District Office: "Yes! It's the blue building, third on the left"
```

## The Full Resolution Chain

```
You type: api.myapp.com

STEP 1: Check local cache
  → Browser cache (TTL not expired?)
  → OS cache (/etc/hosts file first!)
  → Local DNS resolver cache

STEP 2: If not cached → Ask Recursive Resolver
  (This is your ISP's DNS, or 8.8.8.8, or 1.1.1.1)

STEP 3: Recursive Resolver asks Root Nameserver
  "Who handles .com?"
  Root: "Ask the .com TLD nameserver at 192.5.6.30"

STEP 4: Recursive Resolver asks .com TLD Nameserver
  "Who handles myapp.com?"
  TLD: "Ask ns1.awsdns-12.com (Route53)"

STEP 5: Recursive Resolver asks Authoritative Nameserver
  "What is the IP for api.myapp.com?"
  Auth NS: "It's 10.0.1.45. TTL: 300 seconds"

STEP 6: Resolver caches the answer, returns to you
  → Connection begins to 10.0.1.45

TOTAL TIME: Usually 20-200ms (first time)
            ~0ms (cached)
```

## DNS Record Types — Know All of These

```
A       →  hostname to IPv4          api.myapp.com → 10.0.1.45
AAAA    →  hostname to IPv6          api.myapp.com → 2001:db8::1
CNAME   →  alias to another hostname api.myapp.com → lb-123.aws.com
MX      →  mail server               myapp.com → mail.myapp.com (priority 10)
TXT     →  text (SPF, DKIM, verify)  "v=spf1 include:sendgrid.net ~all"
NS      →  authoritative nameservers myapp.com → ns1.awsdns-12.com
PTR     →  reverse DNS (IP → name)   10.0.1.45 → api.myapp.com
SOA     →  zone authority info       TTLs, admin email, serial
SRV     →  service location          _http._tcp.myapp.com → port + hostname
```

## The Commands

```bash
# Basic lookup
dig api.myapp.com           # full detail
dig api.myapp.com +short    # just the IP

# Specific record types
dig api.myapp.com A
dig myapp.com MX
dig myapp.com NS
dig myapp.com TXT
dig myapp.com SOA

# Trace the FULL resolution chain (this is gold)
dig api.myapp.com +trace

# Ask a specific DNS server
dig @8.8.8.8 api.myapp.com      # ask Google
dig @1.1.1.1 api.myapp.com      # ask Cloudflare
dig @ns1.awsdns-12.com api.myapp.com  # ask authoritative directly

# Reverse DNS lookup
dig -x 8.8.8.8

# Check TTL (how long before cache expires)
dig api.myapp.com | grep -A2 "ANSWER SECTION"
# The number in the middle is TTL in seconds
# Low TTL = changes propagate fast but more DNS queries
# High TTL = cached longer, faster, but slow to update

# What DNS server is your system using?
cat /etc/resolv.conf
resolvectl status  # systemd-resolved

# Flush DNS cache
resolvectl flush-caches  # systemd
sudo systemd-resolve --flush-caches

# Check /etc/hosts (this wins over DNS!)
cat /etc/hosts

# Test DNS resolution time
time dig api.myapp.com +short    # first call (cache miss)
time dig api.myapp.com +short    # second call (cache hit = faster)
```

### DNS Failure Modes in Production

```
Symptom                          Cause                    Fix
──────────────────────────────────────────────────────────────────────
"Name resolution failed"         Wrong /etc/resolv.conf   Fix resolver IP
                                 DNS server down           Change to 8.8.8.8

Works from laptop, not           Different DNS servers     Check /etc/resolv.conf
from server                      seeing different answers  on server

Intermittent failures            TTL expired + slow        Increase TTL
                                 authoritative response    before changes

Just changed IP, old             TTL not expired yet       Lower TTL BEFORE
IP still resolving                                         making changes

Internal service can't           No internal DNS entry     Add Route53 private
resolve other service            or split-horizon DNS      hosted zone record
```

---

# PART 4: NAT — "The Translator at the Border"

## The Mental Model

```
Your home has ONE public IP from your ISP.
You have 10 devices (phone, laptop, TV, etc.)
They ALL access the internet.

How? NAT (Network Address Translation).

Your router keeps a translation table:

Private IP:Port    →    Public IP:Port
───────────────────────────────────────
192.168.1.5:54231  →  203.0.113.1:1024
192.168.1.7:61234  →  203.0.113.1:1025
192.168.1.5:54232  →  203.0.113.1:1026

When reply comes in to 203.0.113.1:1024
Router translates back → 192.168.1.5:54231

AWS VPC works EXACTLY like this.
Your EC2 instance: 10.0.1.45 (private)
NAT Gateway translates to: 54.23.45.67 (public Elastic IP)
```

## Types of NAT

```
SNAT (Source NAT)
→ Change the SOURCE IP
→ Private → Public (outbound traffic)
→ "My EC2 can reach the internet"

DNAT (Destination NAT)
→ Change the DESTINATION IP
→ Public → Private (inbound traffic)
→ "Requests to my Load Balancer get sent to my EC2"
→ Port forwarding is DNAT

MASQUERADE
→ Dynamic SNAT
→ Source IP set to the outbound interface's current IP
→ Used when public IP changes (DHCP)
→ What iptables uses for containers
```

## NAT in AWS VPC — The Architecture

```
INTERNET
    │
    │ public IP (e.g. 54.23.45.67)
    ▼
INTERNET GATEWAY (IGW)
    │
    │ routes to VPC
    ▼
┌─────────────────────────────────────────────┐
│                   VPC                        │
│  10.0.0.0/16                                │
│                                             │
│  ┌──────────────────┐  ┌─────────────────┐ │
│  │  PUBLIC SUBNET   │  │ PRIVATE SUBNET  │ │
│  │  10.0.1.0/24     │  │ 10.0.2.0/24    │ │
│  │                  │  │                 │ │
│  │  ┌────────────┐  │  │  ┌──────────┐  │ │
│  │  │ NAT Gateway│  │  │  │ EC2      │  │ │
│  │  │ 10.0.1.5   │  │  │  │10.0.2.10 │  │ │
│  │  │ EIP:54.x.x │  │  │  └──────────┘  │ │
│  │  └────────────┘  │  │       │         │ │
│  │                  │  │  (can't be      │ │
│  └──────────────────┘  │  reached from   │ │
│           ▲            │  internet       │ │
│           │ route      │  directly)      │ │
│           └────────────┘                 │ │
└─────────────────────────────────────────────┘

Private EC2 → internet traffic path:
EC2 (10.0.2.10) → Route Table → NAT GW (10.0.1.5) 
→ IGW → Internet (appears as 54.x.x.x)
```

---

# PART 5: STATEFUL vs STATELESS FILTERING

## The Mental Model

```
STATELESS FIREWALL = Security guard with a LIST
"Does this packet match my rules? Yes/No."
Treats every packet independently.
Doesn't remember previous packets.

STATELESS RULE:
"Allow TCP port 80 inbound" 
→ Also need: "Allow TCP 1024-65535 outbound" (return traffic!)
→ Must explicitly allow BOTH directions

STATEFUL FIREWALL = Security guard who REMEMBERS
"I remember you went out. The reply can come back in."
Tracks connection state (the 5-tuple: src IP, dst IP, src port, dst port, protocol)

STATEFUL RULE:
"Allow TCP port 80 inbound"
→ Return traffic automatically allowed
→ Only need ONE rule
```

## AWS Implementation

```
SECURITY GROUPS = STATEFUL
─────────────────────────────
- Attached to EC2 instances (and ENIs)
- Default: deny all in, allow all out
- You allow port 80 in → replies automatically allowed out
- Rules are ALLOW only (no explicit deny)
- Changes take effect immediately
- Think: per-instance firewall

NETWORK ACLs (NACLs) = STATELESS
─────────────────────────────────
- Attached to SUBNETS (all traffic in/out of subnet)
- Default: allow all (default NACL)
- Must allow BOTH inbound AND outbound explicitly
- Has ALLOW and DENY rules
- Rules evaluated in NUMBER ORDER (100, 200, 300...)
- First match WINS — order matters critically
- Think: subnet-level border control

TROUBLESHOOTING PRIORITY:
1. Check Security Group first (most common issue)
2. Check NACL second (often forgotten, stateless = tricky)
3. Check Route Table third
4. Check IGW/NAT GW fourth
```

## Stateful Deep Dive — Connection Tracking

```bash
# Linux connection tracking table (stateful firewall state)
cat /proc/net/nf_conntrack

# Or with conntrack tool
conntrack -L

# Each line is a tracked connection:
# tcp  6  86400  ESTABLISHED  
#   src=10.0.1.5  dst=93.184.216.34  sport=54231  dport=443  
#   src=93.184.216.34  dst=10.0.1.5  sport=443  dport=54231  [ASSURED]

# Count tracked connections (watch this on busy servers)
cat /proc/sys/net/netfilter/nf_conntrack_count    # current
cat /proc/sys/net/netfilter/nf_conntrack_max      # limit

# DANGER: if count approaches max → new connections DROPPED
# Fix:
sysctl -w net.netfilter.nf_conntrack_max=131072
```

---

# PART 6: LOAD BALANCING CONCEPTS

## The Mental Model

```
One server can only handle so much.
Load balancer = traffic cop standing in front of many servers.

              INTERNET
                 │
                 ▼
          LOAD BALANCER
         /      │      \
        ▼       ▼       ▼
    Server1  Server2  Server3
    10.0.1.1 10.0.1.2 10.0.1.3
```

## Load Balancing Algorithms

```
ROUND ROBIN
→ Request 1 → Server 1
→ Request 2 → Server 2  
→ Request 3 → Server 3
→ Request 4 → Server 1 (repeat)
→ Simple. Fair. But ignores server load.

LEAST CONNECTIONS
→ Send to whichever server has fewest active connections
→ Better for variable-length requests (some take 1ms, some 10s)
→ What you want for APIs and web apps

WEIGHTED ROUND ROBIN
→ Server 1: weight 3 (gets 3x more traffic — bigger machine)
→ Server 2: weight 1
→ Used when servers have different capacities

IP HASH
→ hash(client IP) % number_of_servers = always same server
→ "Session affinity" / "sticky sessions"
→ Same client ALWAYS goes to same server
→ Useful when app stores session data locally (not in Redis)
→ Problem: uneven distribution if many clients share IP (NAT)

LEAST RESPONSE TIME
→ Send to server with lowest latency + fewest connections
→ Best algorithm, but needs active health checking
→ What AWS ALB target groups approximate
```

## OSI Layers of Load Balancing

```
LAYER 4 (TCP/UDP) Load Balancer
→ Sees: IP addresses, ports, protocol
→ Does NOT see: HTTP headers, URLs, cookies
→ Very fast (no packet inspection)
→ Just forwards TCP connections
→ AWS: Network Load Balancer (NLB)
→ Use when: raw performance, non-HTTP protocols

LAYER 7 (HTTP) Load Balancer
→ Sees: HTTP headers, URLs, cookies, body
→ Can route based on path, host, header
→ Can do TLS termination (decrypts here, plain HTTP to backend)
→ AWS: Application Load Balancer (ALB)
→ Use when: HTTP/HTTPS traffic, need routing rules

EXAMPLE ALB ROUTING RULES:
api.myapp.com/users/*    → Users service target group
api.myapp.com/payments/* → Payments service target group
api.myapp.com/          → Frontend target group
```

## Health Checks — How LB Knows Who's Alive

```
Every 30 seconds, LB sends:
GET /health HTTP/1.1
Host: 10.0.1.1

If response: 200 OK → server is healthy, send traffic
If response: 500 / timeout → server is unhealthy

After 2 consecutive failures → remove from rotation
After 3 consecutive successes → add back

This is why your /health endpoint must:
✓ Check DB connection
✓ Check cache connection
✓ Check disk space
✓ Return 200 only if truly ready
✓ Be FAST (< 100ms)
✗ Never return 200 when the app is broken
```

---

PART 7: THE PROJECT — Build, Then Break, Then Fix
The Architecture We're Building
INTERNET
    │
    ▼
Internet Gateway (IGW)
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  VPC: 10.0.0.0/16                                   │
│                                                     │
│  ┌───────────────────┐   ┌───────────────────────┐ │
│  │  PUBLIC SUBNET    │   │   PRIVATE SUBNET      │ │
│  │  10.0.1.0/24      │   │   10.0.2.0/24         │ │
│  │  AZ: us-east-1a   │   │   AZ: us-east-1a      │ │
│  │                   │   │                       │ │
│  │  ┌─────────────┐  │   │  ┌─────────────────┐  │ │
│  │  │ Bastion/    │  │   │  │ Private EC2     │  │ │
│  │  │ Jump Host   │  │   │  │ (App Server)    │  │ │
│  │  │ 10.0.1.10   │  │   │  │ 10.0.2.10       │  │ │
│  │  └─────────────┘  │   │  └─────────────────┘  │ │
│  │                   │   │                       │ │
│  │  ┌─────────────┐  │   └───────────────────────┘ │
│  │  │ NAT Gateway │  │                             │
│  │  │ 10.0.1.5    │  │                             │
│  │  └─────────────┘  │                             │
│  └───────────────────┘                             │
└─────────────────────────────────────────────────────┘
LAB 1: Build the VPC (AWS Console + CLI)
# ============================================
# STEP 1: CREATE THE VPC
# ============================================

aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=lab-vpc}]'

# Save the VPC ID
VPC_ID=$(aws ec2 describe-vpcs \
  --filters "Name=tag:Name,Values=lab-vpc" \
  --query 'Vpcs[0].VpcId' --output text)

echo "VPC: $VPC_ID"

# Enable DNS hostnames (required for EC2 to get public DNS names)
aws ec2 modify-vpc-attribute \
  --vpc-id $VPC_ID \
  --enable-dns-hostnames

# ============================================
# STEP 2: CREATE SUBNETS
# ============================================

# Public subnet
aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block 10.0.1.0/24 \
  --availability-zone us-east-1a \
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=lab-public}]'

PUBLIC_SUBNET=$(aws ec2 describe-subnets \
  --filters "Name=tag:Name,Values=lab-public" \
  --query 'Subnets[0].SubnetId' --output text)

# Private subnet
aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block 10.0.2.0/24 \
  --availability-zone us-east-1a \
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=lab-private}]'

PRIVATE_SUBNET=$(aws ec2 describe-subnets \
  --filters "Name=tag:Name,Values=lab-private" \
  --query 'Subnets[0].SubnetId' --output text)

# Auto-assign public IPs in public subnet
aws ec2 modify-subnet-attribute \
  --subnet-id $PUBLIC_SUBNET \
  --map-public-ip-on-launch

echo "Public Subnet: $PUBLIC_SUBNET"
echo "Private Subnet: $PRIVATE_SUBNET"

# ============================================
# STEP 3: INTERNET GATEWAY
# ============================================

aws ec2 create-internet-gateway \
  --tag-specifications 'ResourceType=internet-gateway,Tags=[{Key=Name,Value=lab-igw}]'

IGW_ID=$(aws ec2 describe-internet-gateways \
  --filters "Name=tag:Name,Values=lab-igw" \
  --query 'InternetGateways[0].InternetGatewayId' --output text)

# Attach IGW to VPC
aws ec2 attach-internet-gateway \
  --internet-gateway-id $IGW_ID \
  --vpc-id $VPC_ID

echo "IGW: $IGW_ID"

# ============================================
# STEP 4: NAT GATEWAY (for private subnet outbound)
# ============================================

# NAT GW needs an Elastic IP
EIP_ALLOC=$(aws ec2 allocate-address --domain vpc \
  --query 'AllocationId' --output text)

# Create NAT Gateway in PUBLIC subnet
aws ec2 create-nat-gateway \
  --subnet-id $PUBLIC_SUBNET \
  --allocation-id $EIP_ALLOC \
  --tag-specifications 'ResourceType=natgateway,Tags=[{Key=Name,Value=lab-natgw}]'

NAT_GW=$(aws ec2 describe-nat-gateways \
  --filter "Name=tag:Name,Values=lab-natgw" \
  --query 'NatGateways[0].NatGatewayId' --output text)

echo "NAT GW: $NAT_GW"
echo "Waiting for NAT GW to become available..."
aws ec2 wait nat-gateway-available --nat-gateway-ids $NAT_GW

# ============================================
# STEP 5: ROUTE TABLES
# ============================================

# PUBLIC route table: internet traffic → IGW
aws ec2 create-route-table \
  --vpc-id $VPC_ID \
  --tag-specifications 'ResourceType=route-table,Tags=[{Key=Name,Value=lab-public-rt}]'

PUBLIC_RT=$(aws ec2 describe-route-tables \
  --filters "Name=tag:Name,Values=lab-public-rt" \
  --query 'RouteTables[0].RouteTableId' --output text)

# Add default route to IGW
aws ec2 create-route \
  --route-table-id $PUBLIC_RT \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $IGW_ID

# Associate with public subnet
aws ec2 associate-route-table \
  --route-table-id $PUBLIC_RT \
  --subnet-id $PUBLIC_SUBNET

# PRIVATE route table: internet traffic → NAT GW
aws ec2 create-route-table \
  --vpc-id $VPC_ID \
  --tag-specifications 'ResourceType=route-table,Tags=[{Key=Name,Value=lab-private-rt}]'

PRIVATE_RT=$(aws ec2 describe-route-tables \
  --filters "Name=tag:Name,Values=lab-private-rt" \
  --query 'RouteTables[0].RouteTableId' --output text)

# Add default route to NAT GW
aws ec2 create-route \
  --route-table-id $PRIVATE_RT \
  --destination-cidr-block 0.0.0.0/0 \
  --nat-gateway-id $NAT_GW

# Associate with private subnet
aws ec2 associate-route-table \
  --route-table-id $PRIVATE_RT \
  --subnet-id $PRIVATE_SUBNET

# ============================================
# STEP 6: SECURITY GROUPS
# ============================================

# Bastion host SG: allow SSH from your IP only
aws ec2 create-security-group \
  --group-name lab-bastion-sg \
  --description "Bastion host - SSH only" \
  --vpc-id $VPC_ID

BASTION_SG=$(aws ec2 describe-security-groups \
  --filters "Name=group-name,Values=lab-bastion-sg" \
  --query 'SecurityGroups[0].GroupId' --output text)

MY_IP=$(curl -s https://checkip.amazonaws.com)

aws ec2 authorize-security-group-ingress \
  --group-id $BASTION_SG \
  --protocol tcp \
  --port 22 \
  --cidr ${MY_IP}/32

# Private app server SG: SSH from bastion only, HTTP from anywhere in VPC
aws ec2 create-security-group \
  --group-name lab-private-sg \
  --description "Private app - SSH from bastion, HTTP internal" \
  --vpc-id $VPC_ID

PRIVATE_SG=$(aws ec2 describe-security-groups \
  --filters "Name=group-name,Values=lab-private-sg" \
  --query 'SecurityGroups[0].GroupId' --output text)

# SSH only from bastion SG (not an IP, but a security group reference)
aws ec2 authorize-security-group-ingress \
  --group-id $PRIVATE_SG \
  --protocol tcp \
  --port 22 \
  --source-group $BASTION_SG

# HTTP from within VPC
aws ec2 authorize-security-group-ingress \
  --group-id $PRIVATE_SG \
  --protocol tcp \
  --port 80 \
  --cidr 10.0.0.0/16

echo "Setup complete!"
echo "VPC=$VPC_ID, Public=$PUBLIC_SUBNET, Private=$PRIVATE_SUBNET"
echo "IGW=$IGW_ID, NAT=$NAT_GW"
echo "Bastion SG=$BASTION_SG, Private SG=$PRIVATE_SG"
LAB 2: Launch EC2 Instances and Verify Connectivity
# Get latest Amazon Linux 2 AMI
AMI=$(aws ec2 describe-images \
  --owners amazon \
  --filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2" \
            "Name=state,Values=available" \
  --query 'sort_by(Images,&CreationDate)[-1].ImageId' \
  --output text)

# Launch bastion in PUBLIC subnet
BASTION_ID=$(aws ec2 run-instances \
  --image-id $AMI \
  --instance-type t2.micro \
  --subnet-id $PUBLIC_SUBNET \
  --security-group-ids $BASTION_SG \
  --key-name your-key-pair \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=lab-bastion}]' \
  --query 'Instances[0].InstanceId' --output text)

# Launch app server in PRIVATE subnet
PRIVATE_ID=$(aws ec2 run-instances \
  --image-id $AMI \
  --instance-type t2.micro \
  --subnet-id $PRIVATE_SUBNET \
  --security-group-ids $PRIVATE_SG \
  --key-name your-key-pair \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=lab-private}]' \
  --query 'Instances[0].InstanceId' --output text)

# Wait for instances
aws ec2 wait instance-running --instance-ids $BASTION_ID $PRIVATE_ID

# Get bastion public IP
BASTION_IP=$(aws ec2 describe-instances \
  --instance-ids $BASTION_ID \
  --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)

# Get private server IP
PRIVATE_IP=$(aws ec2 describe-instances \
  --instance-ids $PRIVATE_ID \
  --query 'Reservations[0].Instances[0].PrivateIpAddress' --output text)

echo "Bastion: $BASTION_IP"
echo "Private: $PRIVATE_IP"

# Connect to bastion
ssh -i your-key.pem ec2-user@$BASTION_IP

# From bastion, connect to private server
ssh -i your-key.pem ec2-user@$PRIVATE_IP

# From private server, verify internet access (via NAT GW)
curl -s https://checkip.amazonaws.com
# Should return the NAT Gateway's Elastic IP — NOT the private EC2 IP
# This proves NAT translation is working
LAB 3: BREAK IT — And Learn to Diagnose
Break #1: Remove the Default Route
# BREAK IT: Delete the internet route from public route table
aws ec2 delete-route \
  --route-table-id $PUBLIC_RT \
  --destination-cidr-block 0.0.0.0/0

# WHAT HAPPENS:
# → You lose SSH access to bastion
# → Bastion can't reach internet
# → Everything in public subnet is island'd

# DIAGNOSE (from AWS console or another terminal):
aws ec2 describe-route-tables --route-table-ids $PUBLIC_RT
# → You'll see 0.0.0.0/0 route is MISSING

# SYMPTOMS YOU'D SEE:
# ssh ec2-user@$BASTION_IP   → hangs forever → connection timeout
# tcpdump on local machine: SYN sent, no SYN-ACK → packets not routed

# FIX IT:
aws ec2 create-route \
  --route-table-id $PUBLIC_RT \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $IGW_ID
Break #2: Block Port 22 on Security Group
# BREAK IT: Revoke SSH access on bastion SG
aws ec2 revoke-security-group-ingress \
  --group-id $BASTION_SG \
  --protocol tcp \
  --port 22 \
  --cidr ${MY_IP}/32

# WHAT HAPPENS:
# → SSH connection attempts get RST immediately (not timeout!)
# → Because stateful SG drops connection at SYN phase

# DIAGNOSE:
aws ec2 describe-security-groups --group-ids $BASTION_SG
# → Port 22 inbound rule is missing

# SYMPTOMS:
# ssh ec2-user@$BASTION_IP
# → "Connection refused" (immediate — not a timeout)
# → Timeout means routing issue
# → Immediate refused means port blocked at SG or app not listening

nc -zv $BASTION_IP 22
# → Connection refused

# KEY DISTINCTION:
# Timeout   = packet is being dropped (NACL, route issue, no listener)
# Refused   = TCP RST received (SG blocking, nothing listening on port)

# FIX IT:
aws ec2 authorize-security-group-ingress \
  --group-id $BASTION_SG \
  --protocol tcp \
  --port 22 \
  --cidr ${MY_IP}/32
Break #3: Misconfigure NACL
# CREATE A NACL and apply to public subnet
NACL_ID=$(aws ec2 create-network-acl \
  --vpc-id $VPC_ID \
  --tag-specifications 'ResourceType=network-acl,Tags=[{Key=Name,Value=lab-broken-nacl}]' \
  --query 'NetworkAcl.NetworkAclId' --output text)

# BREAK IT: Only allow HTTP (80) inbound — forget SSH, forget return traffic
aws ec2 create-network-acl-entry \
  --network-acl-id $NACL_ID \
  --rule-number 100 \
  --protocol tcp \
  --rule-action allow \
  --ingress \
  --cidr-block 0.0.0.0/0 \
  --port-range From=80,To=80

# Deny everything else inbound (explicit deny)
aws ec2 create-network-acl-entry \
  --network-acl-id $NACL_ID \
  --rule-number 200 \
  --protocol -1 \
  --rule-action deny \
  --ingress \
  --cidr-block 0.0.0.0/0

# Allow HTTP outbound only (FORGOT ephemeral ports!)
aws ec2 create-network-acl-entry \
  --network-acl-id $NACL_ID \
  --rule-number 100 \
  --protocol tcp \
  --rule-action allow \
  --egress \
  --cidr-block 0.0.0.0/0 \
  --port-range From=80,To=80

# Deny everything else outbound
aws ec2 create-network-acl-entry \
  --network-acl-id $NACL_ID \
  --rule-number 200 \
  --protocol -1 \
  --rule-action deny \
  --egress \
  --cidr-block 0.0.0.0/0

# Apply to public subnet
aws ec2 replace-network-acl-association \
  --association-id $(aws ec2 describe-network-acls \
    --filters "Name=association.subnet-id,Values=$PUBLIC_SUBNET" \
    --query 'NetworkAcls[0].Associations[0].NetworkAclAssociationId' \
    --output text) \
  --network-acl-id $NACL_ID

# WHAT BREAKS:
# SSH is completely blocked (port 22 not in NACL)
# HTTP works inbound but RESPONSES can't leave (ephemeral ports blocked!)
# This is the classic NACL mistake — forgetting return traffic

# DIAGNOSE:
aws ec2 describe-network-acls --network-acl-ids $NACL_ID
# → See missing rules for 22, missing ephemeral port range

# FIX IT: Add ephemeral ports for return traffic
aws ec2 create-network-acl-entry \
  --network-acl-id $NACL_ID \
  --rule-number 150 \
  --protocol tcp \
  --rule-action allow \
  --egress \
  --cidr-block 0.0.0.0/0 \
  --port-range From=1024,To=65535

# And allow SSH
aws ec2 create-network-acl-entry \
  --network-acl-id $NACL_ID \
  --rule-number 90 \
  --protocol tcp \
  --rule-action allow \
  --ingress \
  --cidr-block ${MY_IP}/32 \
  --port-range From=22,To=22
PART 8: THE DELIVERABLE — Packet Flow Diagram + Failure Cases
Normal Packet Flow: curl from Private EC2 → Internet
┌─────────────────────────────────────────────────────────────────┐
│  PACKET JOURNEY: Private EC2 → google.com                       │
│                                                                 │
│  1. App on 10.0.2.10 calls: curl https://google.com            │
│                                                                 │
│  2. DNS Resolution                                              │
│     10.0.2.10 → asks /etc/resolv.conf resolver                 │
│     → resolver contacts Route53 (169.254.169.253 in AWS)       │
│     → Returns: google.com = 142.250.x.x                        │
│                                                                 │
│  3. TCP SYN created                                             │
│     src: 10.0.2.10:54321  dst: 142.250.x.x:443                 │
│                                                                 │
│  4. Routing Decision (Private EC2 route table)                  │
│     10.0.2.10 checks: "Where does 142.250.x.x go?"             │
│     Route table: 0.0.0.0/0 → NAT Gateway (10.0.1.5)           │
│     Packet sent to NAT GW                                       │
│                                                                 │
│  5. NACL Check (Private Subnet outbound)                        │
│     Is outbound TCP to 443 allowed? → YES                       │
│                                                                 │
│  6. NAT Gateway translates                                      │
│     src: 10.0.2.10:54321 → src: 54.23.45.67:1024              │
│     (Records mapping in NAT table)                              │
│                                                                 │
│  7. NACL Check (Public Subnet outbound)                         │
│     Is outbound TCP 443 allowed? → YES                          │
│                                                                 │
│  8. Internet Gateway                                            │
│     Packet exits VPC to internet                                │
│                                                                 │
│  9. TLS Handshake with google.com                               │
│     Certificate verified, session key negotiated                │
│                                                                 │
│  10. HTTP GET sent (encrypted)                                  │
│                                                                 │
│  RETURN JOURNEY:                                                │
│  Google → 54.23.45.67:1024                                      │
│  IGW → NAT GW (de-NATs: 54.23.45.67:1024 → 10.0.2.10:54321)  │
│  Security Group check (stateful: connection tracked, ALLOW)     │
│  Delivered to Private EC2                                       │
└─────────────────────────────────────────────────────────────────┘
Failure Case Diagnosis Matrix
┌──────────────────────────────────────────────────────────────────────────┐
│  SYMPTOM                  │ LAYER    │ CHECK                             │
├──────────────────────────────────────────────────────────────────────────┤
│ SSH hangs (no response)   │ Routing  │ Route table missing 0.0.0.0/0    │
│                           │  or NACL │ NACL blocking port 22 inbound    │
├──────────────────────────────────────────────────────────────────────────┤
│ SSH refused immediately   │ SG / App │ Security Group missing port 22   │
│                           │          │ sshd not running on server       │
├──────────────────────────────────────────────────────────────────────────┤
│ Private EC2 can't reach   │ NAT / RT │ NAT GW not in route table        │
│ internet                  │          │ NAT GW not in public subnet      │
│                           │          │ NAT GW has no Elastic IP         │
├──────────────────────────────────────────────────────────────────────────┤
│ HTTP works, responses     │ NACL     │ Ephemeral ports (1024-65535)     │
│ don't come back           │          │ not allowed outbound in NACL     │
│                           │          │ (Classic NACL mistake)           │
├──────────────────────────────────────────────────────────────────────────┤
│ DNS resolution fails      │ DNS      │ /etc/resolv.conf wrong           │
│                           │          │ SG blocks UDP/TCP 53 outbound    │
│                           │          │ NACL blocks port 53              │
├──────────────────────────────────────────────────────────────────────────┤
│ TLS error                 │ TLS      │ Certificate expired              │
│                           │          │ Hostname mismatch                │
│                           │          │ Self-signed, untrusted CA        │
│                           │          │ Clock skew on server             │
├──────────────────────────────────────────────────────────────────────────┤
│ Intermittent failures     │ LB / App │ Unhealthy backend (LB removing   │
│                           │          │ and re-adding servers)           │
│                           │          │ Connection tracking table full   │
│                           │          │ NAT port exhaustion              │
└──────────────────────────────────────────────────────────────────────────┘
PART 9: THE DEBUGGING FLOWCHART — Production Instinct
Can't reach a service?
         │
         ▼
Can you ping the IP?
  YES → Layer 3 (routing) is OK
  NO  → Check route tables, IGW, NAT GW
         │
         ▼
Can you TCP connect? (nc -zv IP PORT)
  "Connection refused" → Port blocked by SG or app not running
  Timeout             → NACL blocking or route missing
  Connected           → Layer 4 OK, problem is Layer 7 (app/TLS)
         │
         ▼
Is DNS resolving correctly?
  dig @8.8.8.8 hostname → compare to dig hostname
  Different? → DNS propagation or wrong resolver
         │
         ▼
Is TLS valid?
  openssl s_client -connect host:443
  Check: expiry, hostname, chain
         │
         ▼
Check app logs
  journalctl -u appname -f
  Look for: connection refused, timeout, OOM, crash
         │
         ▼
Check load balancer target health
  Are all targets healthy?
  What's the health check endpoint returning?
  YOUR STUDY CHECKLIST
CONCEPTS — can you explain these without notes?
□ Draw TCP 3-way handshake from memory
□ Explain TLS certificate chain (who signs what)
□ Trace a DNS query from browser to authoritative NS
□ Explain SNAT vs DNAT with an example
□ Explain why NACLs need ephemeral ports and SGs don't
□ Explain Round Robin vs Least Connections

LABS — done with your own hands?
□ Built VPC with public + private subnet
□ NAT Gateway routing verified (private EC2 → internet via NAT IP)
□ Broke route table → diagnosed → fixed
□ Blocked port 22 on SG → diagnosed (refused vs timeout)
□ Misconfigured NACL → hit ephemeral port bug → fixed

DELIVERABLE
□ Packet flow diagram drawn (paper or digital)
□ Each break: symptom → layer → root cause → fix documented
□ Debugging flowchart you can follow during an incident
Two modules deep now. You've got the OS internals and the network layer wired into your brain. Next comes putting them together — containerization, where Linux namespaces, cgroups, networking, and all of this collides into Docker and Kubernetes. Everything you've learned so far is the foundation under every container you'll ever run.
Go build that VPC. Break it three times. Fix it three times. Then come back.



  

# IAM Deep Dive 🔐

## Your Senior DevSecOps Mentor Speaking

Last two modules you learned how the OS breathes and how packets travel. Now we go into something that will make or break your career in cloud security — **IAM**.

Every major cloud breach in the last 5 years traces back to one thing: IAM misconfiguration. Not unpatched servers. Not zero-days. **Misconfigured permissions.**

Capital One breach — IAM. Uber breach — IAM. Toyota cloud leak — IAM. This is the most important module yet.

Let's wire your brain for it completely.

---

# THE MASTER MENTAL MODEL FIRST

```
Think of AWS as a country.

RESOURCES = Buildings (S3 buckets, EC2 instances, RDS databases)
IDENTITIES = People and robots (Users, Roles, Services)
IAM POLICIES = The LAW (what each person/robot can do)
STS = The passport office (issues temporary ID cards)
FEDERATION = Foreign visa system (outside identities enter AWS)

The Golden Rule of IAM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVERYTHING IS DENIED BY DEFAULT.
You must EXPLICITLY ALLOW what you want.
One EXPLICIT DENY overrides ALL allows.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No policy = No access. Period.
```

---

# PART 1: POLICY EVALUATION LOGIC — "The Judge's Decision Tree"

## The Complete Evaluation Flow

This is the single most important diagram in all of AWS security. The AWS policy engine runs through this exact sequence every time any API call is made — millions of times per second across AWS globally.

```
API CALL ARRIVES
(e.g. s3:GetObject on arn:aws:s3:::my-bucket/secret.txt)
        │
        ▼
┌───────────────────────────────┐
│ 1. Is there an explicit DENY  │
│    in ANY policy?             │
│    (SCP, Resource, Identity,  │
│     Permission Boundary,      │
│     Session Policy)           │
└───────────────┬───────────────┘
                │
        YES ────┴──── NO
         │              │
         ▼              ▼
      DENY ❌    Is this a SERVICE CONTROL
                 POLICY (SCP) context?
                 (Only applies in AWS Orgs)
                         │
                  YES ───┴─── NO (skip SCP check)
                   │               │
                   ▼               │
            Does SCP allow         │
            this action?           │
                   │               │
            NO → DENY ❌          │
            YES → continue ────────┤
                                   ▼
                         Is there a PERMISSION
                         BOUNDARY on this identity?
                                   │
                            YES ───┴─── NO
                             │              │
                             ▼              │
                   Does boundary allow?     │
                             │              │
                      NO → DENY ❌         │
                      YES → continue ───────┤
                                           ▼
                                 Is there an explicit
                                 ALLOW in identity-based
                                 OR resource-based policy?
                                           │
                              YES ─────────┴──── NO
                               │                  │
                               ▼                  ▼
                           ALLOW ✅           DENY ❌
                                           (implicit deny)
```

## The 5 Policy Types — Know Every One

```
┌─────────────────────────────────────────────────────────────────┐
│  POLICY TYPE          │ ATTACHED TO    │ SCOPE                  │
├─────────────────────────────────────────────────────────────────┤
│ Identity-based        │ User/Role/Group│ What this identity     │
│                       │                │ can do                 │
├─────────────────────────────────────────────────────────────────┤
│ Resource-based        │ S3/SQS/KMS etc │ Who can access this    │
│                       │                │ resource               │
├─────────────────────────────────────────────────────────────────┤
│ Service Control       │ AWS Org OU or  │ Maximum permissions    │
│ Policy (SCP)          │ Account        │ for ENTIRE account     │
├─────────────────────────────────────────────────────────────────┤
│ Permission Boundary   │ User or Role   │ Maximum permissions    │
│                       │                │ for this identity only │
├─────────────────────────────────────────────────────────────────┤
│ Session Policy        │ AssumeRole call│ Restrict assumed role  │
│                       │                │ session further        │
└─────────────────────────────────────────────────────────────────┘

Every policy type acts as a FILTER.
All filters must PASS for access to be granted.
One filter fails = DENIED.
```

---

# PART 2: EXPLICIT DENY PRECEDENCE — "The Veto Power"

## The Mental Model

```
Imagine 10 judges voting on whether you get access.
9 judges say YES.
1 judge says NO.

In normal life, majority wins.
In IAM, ONE NO kills everything.

Explicit Deny = Veto power. Absolute. Irrevocable.
Even if you're the root account.
Even if every other policy allows it.
One explicit deny and it's over.
```

## Why This Matters in Production

```json
// Scenario: Developer has this identity policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": "*"
    }
  ]
}

// BUT the S3 bucket has this resource policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::prod-secrets/*",
      "Condition": {
        "StringNotEquals": {
          "aws:PrincipalTag/Environment": "production"
        }
      }
    }
  ]
}

// RESULT: Developer CANNOT access prod-secrets/
// even though their identity policy says s3:*
// The resource policy DENY wins.
// This is how you protect prod from dev access.
```

## The Deny Trick — Conditions Make it Surgical

```json
// Block everything EXCEPT from specific IP range
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "NotIpAddress": {
          "aws:SourceIp": [
            "203.0.113.0/24",
            "10.0.0.0/8"
          ]
        }
      }
    }
  ]
}

// Block S3 delete — even for admins
{
  "Effect": "Deny",
  "Action": [
    "s3:DeleteObject",
    "s3:DeleteBucket"
  ],
  "Resource": "*"
}

// Block leaving the region — data sovereignty
{
  "Effect": "Deny",
  "Action": "*",
  "Resource": "*",
  "Condition": {
    "StringNotEquals": {
      "aws:RequestedRegion": ["eu-west-1", "eu-central-1"]
    }
  }
}
```

---

# PART 3: RESOURCE vs IDENTITY POLICIES — "Two Sides of the Same Door"

## The Mental Model

```
IDENTITY POLICY = Badge worn by the person
"I (this user/role) am allowed to do X"

RESOURCE POLICY = Sign on the building door
"I (this resource) accept visitors who meet condition Y"

BOTH must agree for cross-account access.
For same-account access, EITHER one is enough.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SAME ACCOUNT:  identity policy OR resource policy = access
CROSS ACCOUNT: identity policy AND resource policy = access
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Same Account Access

```
Account: 111111111111

EC2 Instance (Role: app-role)
  Identity Policy: Allow s3:GetObject on my-bucket

S3 Bucket (my-bucket)
  Resource Policy: NONE

RESULT: ✅ ACCESS GRANTED
Reason: Same account + identity policy allows it.
Resource policy not required.
```

## Cross-Account Access

```
Account A: 111111111111 (owns the S3 bucket)
Account B: 222222222222 (has the EC2/Role trying to access)

For Account B's role to access Account A's S3:

STEP 1: Account A's S3 bucket policy must allow Account B
{
  "Effect": "Allow",
  "Principal": {
    "AWS": "arn:aws:iam::222222222222:role/app-role"
  },
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::account-a-bucket/*"
}

STEP 2: Account B's role must also allow the s3:GetObject action
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::account-a-bucket/*"
}

BOTH must exist. ONE missing = DENIED.

If only Step 1: Account B's role can't act (no identity allow)
If only Step 2: Account A's bucket won't accept (no resource allow)
```

## Which Services Support Resource Policies?

```
✅ S3 Buckets          (most common — bucket policies)
✅ SQS Queues          (queue policies)
✅ SNS Topics          (topic policies)
✅ KMS Keys            (key policies — REQUIRED for KMS)
✅ Lambda Functions    (function policies)
✅ API Gateway         (resource policies)
✅ ECR Repositories    (repository policies)
✅ Secrets Manager     (resource policies)
✅ IAM Roles           (trust policies ← this is a resource policy!)

❌ EC2 Instances       (no resource policy — use security groups + IAM)
❌ RDS Databases       (no resource policy — use IAM DB auth or SGs)
❌ DynamoDB Tables     (identity policies only, unless using VPC endpoint)
```

## KMS — The Special Case

```
KMS key policies are MANDATORY and different from everything else.

Without a key policy, NOBODY can use the key.
Not even root. Not even the key creator.

The default KMS key policy does something special:
{
  "Effect": "Allow",
  "Principal": {
    "AWS": "arn:aws:iam::111111111111:root"
  },
  "Action": "kms:*",
  "Resource": "*"
}

This allows the ROOT ACCOUNT to delegate access via IAM policies.
Without this, identity policies for KMS don't work at all.
This trips up EVERYONE who first works with KMS.
```

---

# PART 4: STS ROLE ASSUMPTION — "The Passport Office"

## The Mental Model

```
IAM Users = Permanent residents (long-term credentials)
            Access Key + Secret Key (never expire unless rotated)
            DANGEROUS if leaked — valid forever

IAM Roles = Temporary visa holders
            STS issues: Access Key + Secret Key + SESSION TOKEN
            Expires in 15 minutes to 12 hours
            Leaked credentials self-destruct

STS = Security Token Service
    = The government passport office
    = Issues temporary identity documents

This is why you NEVER use IAM users for applications.
Always use roles. Always temporary credentials.
```

## The Role Assumption Flow

```
                    ┌─────────────────────┐
                    │   TRUST POLICY      │
                    │   (Who can assume   │
                    │    this role?)      │
                    └─────────┬───────────┘
                              │
WHO WANTS TO ASSUME?          ▼
                    ┌─────────────────────┐
EC2 Instance ──────►│                     │
Lambda Function ───►│   TARGET ROLE       │◄── Permission Policy
ECS Task ──────────►│                     │    (What can the
Another AWS Acct ──►│                     │     role DO?)
OIDC Provider ──────►                     │
                    └─────────┬───────────┘
                              │
                              │ sts:AssumeRole
                              ▼
                    ┌─────────────────────┐
                    │       STS           │
                    │                     │
                    │  Validates trust    │
                    │  policy match       │
                    │                     │
                    │  Issues:            │
                    │  - AccessKeyId      │
                    │  - SecretAccessKey  │
                    │  - SessionToken     │
                    │  - Expiration       │
                    └─────────────────────┘
                              │
                              ▼
                    Caller uses temp creds
                    to make API calls
                    (valid until expiration)
```

## Trust Policy — The "Who Can Knock On This Door" Policy

```json
// Role trust policy: Allow EC2 instances to assume this role
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}

// Role trust policy: Allow specific role from another account
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::222222222222:role/deployer-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "unique-secret-handshake-12345"
        }
      }
    }
  ]
}
// ExternalId = prevents confused deputy attacks
// Third-party integrations MUST use ExternalId

// Role trust policy: Allow Lambda
{
  "Effect": "Allow",
  "Principal": {
    "Service": "lambda.amazonaws.com"
  },
  "Action": "sts:AssumeRole"
}
```

## The Confused Deputy Problem

```
WITHOUT ExternalId:

Evil Corp gets your AWS Account ID and Role ARN.
They create their OWN AWS account.
They call sts:AssumeRole on YOUR role from THEIR account.
Your role's trust policy only checks: "Is this from AWS?"
It says YES. Evil Corp now has your role's permissions.

WITH ExternalId:

Trust policy says: "Only if you know the secret handshake"
Evil Corp doesn't know your ExternalId.
AssumeRole call fails.
Your role is protected.

USE ExternalId FOR EVERY THIRD-PARTY INTEGRATION.
Datadog, Terraform Cloud, GitHub Actions — all of them.
```

## The Commands

```bash
# Assume a role manually (testing/debugging)
aws sts assume-role \
  --role-arn arn:aws:iam::111111111111:role/my-role \
  --role-session-name debug-session-$(date +%s) \
  --duration-seconds 3600

# Output:
# {
#   "Credentials": {
#     "AccessKeyId": "ASIA...",
#     "SecretAccessKey": "...",
#     "SessionToken": "...",    ← MUST include this with temp creds
#     "Expiration": "2024-01-01T12:00:00Z"
#   }
# }

# Use the assumed role credentials
export AWS_ACCESS_KEY_ID="ASIA..."
export AWS_SECRET_ACCESS_KEY="..."
export AWS_SESSION_TOKEN="..."
aws sts get-caller-identity   # confirm you're the role now

# Who am I right now?
aws sts get-caller-identity
# Returns: Account, UserId, ARN

# Assume role with session policy (restrict further)
aws sts assume-role \
  --role-arn arn:aws:iam::111111111111:role/admin-role \
  --role-session-name restricted-session \
  --policy '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":"s3:GetObject","Resource":"*"}]}'
# Now even though admin-role has full access,
# THIS SESSION can only do s3:GetObject

# Assume role across accounts
aws sts assume-role \
  --role-arn arn:aws:iam::999999999999:role/cross-account-role \
  --role-session-name cross-account-access \
  --external-id "my-external-id-secret"
```

---

# PART 5: FEDERATION BASICS — "The Visa System"

## The Mental Model

```
Federation = "We trust your ID from home. Come in."

WITHOUT federation:
Every developer needs an IAM User in every AWS account.
500 developers × 10 accounts = 5000 IAM Users.
When someone leaves: manually delete 10 accounts.
NIGHTMARE.

WITH federation:
Developers login to your company's Identity Provider (IdP)
IdP vouches for them to AWS: "This person is real, here's their groups"
AWS trusts the IdP and issues temporary credentials
Developer is in. No IAM User needed.
When someone leaves: disable in IdP. Done. All accounts.
```

## Federation Types

```
┌─────────────────────────────────────────────────────────────────┐
│  TYPE              │ PROTOCOL  │ USE CASE                       │
├─────────────────────────────────────────────────────────────────┤
│ SAML 2.0           │ SAML      │ Corporate SSO (Okta, AD,       │
│                    │           │ Azure AD → AWS Console)        │
├─────────────────────────────────────────────────────────────────┤
│ Web Identity /     │ OIDC      │ GitHub Actions, Google,        │
│ OIDC               │ (JWT)     │ Facebook → AWS                 │
├─────────────────────────────────────────────────────────────────┤
│ Cognito            │ OIDC/SAML │ App users → AWS resources      │
│                    │           │ (mobile/web apps)              │
├─────────────────────────────────────────────────────────────────┤
│ AWS IAM Identity   │ SAML/OIDC │ AWS's own SSO portal           │
│ Center (SSO)       │           │ Multi-account management       │
└─────────────────────────────────────────────────────────────────┘
```

## OIDC Federation — GitHub Actions to AWS (Most Common in DevSecOps)

```
The Flow:
─────────

1. GitHub Actions job starts
2. GitHub generates a JWT (identity token)
   Signed by GitHub's private key
   Contains: repo name, branch, workflow, actor

3. GitHub Actions calls AWS STS:
   sts:AssumeRoleWithWebIdentity
   Passes the JWT as proof of identity

4. AWS STS calls GitHub's OIDC endpoint to verify JWT
   https://token.actions.githubusercontent.com

5. JWT is valid → STS checks trust policy:
   "Does this JWT match the conditions I set?"

6. Trust policy matches → STS issues temp credentials

7. GitHub Actions uses credentials to deploy to AWS
   No AWS access keys stored anywhere.
   No secrets to rotate.
   No secrets to leak.
```

```json
// Trust policy for GitHub Actions OIDC
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": 
            "repo:myorg/myrepo:ref:refs/heads/main"
          // CRITICAL: Lock to specific repo AND branch
          // Without this: ANY GitHub repo could assume your role
        }
      }
    }
  ]
}
```

```yaml
# GitHub Actions workflow using OIDC
name: Deploy to AWS

on:
  push:
    branches: [main]

permissions:
  id-token: write   # REQUIRED: allows GitHub to request OIDC token
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Configure AWS credentials via OIDC
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::111111111111:role/github-deployer
          role-session-name: github-deploy-${{ github.run_id }}
          aws-region: us-east-1
          # No access keys. No secrets. Pure OIDC federation.

      - name: Verify identity
        run: aws sts get-caller-identity

      - name: Deploy
        run: |
          aws s3 sync ./dist s3://my-app-bucket/
          aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

---

PART 6: THE PROJECT — Build, Attack, Harden
LAB 1: Create the Over-Permissive Role (The Breach Setup)
# ============================================
# STEP 1: Create a wildly over-permissive role
# This is what junior engineers accidentally create
# This is what attackers look for
# ============================================

# Create the role trust policy
cat > /tmp/trust-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

# Create the role
aws iam create-role \
  --role-name lab-overpermissive-role \
  --assume-role-policy-document file:///tmp/trust-policy.json \
  --description "INTENTIONALLY BROKEN - lab only"

# Attach AdministratorAccess (the worst thing you can do)
aws iam attach-role-policy \
  --role-name lab-overpermissive-role \
  --policy-arn arn:aws:iam::aws:policy/AdministratorAccess

# See what we just created
aws iam get-role --role-name lab-overpermissive-role
aws iam list-attached-role-policies --role-name lab-overpermissive-role

# Create an instance profile so EC2 can use this role
aws iam create-instance-profile \
  --instance-profile-name lab-overpermissive-profile

aws iam add-role-to-instance-profile \
  --instance-profile-name lab-overpermissive-profile \
  --role-name lab-overpermissive-role

echo "💀 Over-permissive role created. Now let's see why this is dangerous."
LAB 2: Simulate the Breach Attempt
# ============================================
# From inside an EC2 instance with this role attached,
# an attacker (or you, simulating) can do ALL of this:
# ============================================

# First: who am I?
aws sts get-caller-identity
# Returns the role ARN — attacker now knows account ID

# Enumerate what I can do
aws iam simulate-principal-policy \
  --policy-source-arn $(aws sts get-caller-identity --query Arn --output text) \
  --action-names "s3:ListAllMyBuckets" "iam:CreateUser" "ec2:DescribeInstances" \
  --query 'EvaluationResults[*].[ActionName,EvalDecision]' \
  --output table

# List all S3 buckets in the account
aws s3 ls
# ALL of them. Every sensitive bucket. Every environment.

# Read secrets from Secrets Manager
aws secretsmanager list-secrets --query 'SecretList[*].Name'
aws secretsmanager get-secret-value --secret-id prod/database/password

# Create a backdoor IAM user (persistence!)
aws iam create-user --user-name attacker-backdoor
aws iam attach-user-policy \
  --user-name attacker-backdoor \
  --policy-arn arn:aws:iam::aws:policy/AdministratorAccess
aws iam create-access-key --user-name attacker-backdoor
# Now attacker has permanent credentials even if EC2 is terminated

# Exfiltrate data
aws s3 sync s3://prod-customer-data/ /tmp/stolen-data/

# Crypto mining pivot — launch EC2 in other regions
aws ec2 run-instances \
  --image-id ami-xxxxxxxx \
  --instance-type p3.16xlarge \  # GPU instance for mining
  --region ap-southeast-1

# The attacker just:
# 1. Read all secrets
# 2. Exfiltrated all data
# 3. Created backdoor persistence
# 4. Launched expensive instances
# All with ONE misconfigured IAM role.

echo "🔥 This is why IAM is the most critical security layer."
LAB 3: Restrict to Least Privilege
# ============================================
# STEP 1: Understand what the app ACTUALLY needs
# Ask: What specific actions? On what resources?
# In what conditions?
# ============================================

# Our app: Web application that needs to:
# - Read from ONE specific S3 bucket (app assets)
# - Write to ONE specific S3 prefix (user uploads)  
# - Read ONE specific secret (database password)
# - Write logs to CloudWatch
# - Read its own instance metadata (health checks)
# That's IT. Nothing else.

# ============================================
# STEP 2: Create the least-privilege policy
# ============================================

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGION="us-east-1"

cat > /tmp/least-privilege-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadAppAssets",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::myapp-assets",
        "arn:aws:s3:::myapp-assets/*"
      ]
    },
    {
      "Sid": "WriteUserUploads",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::myapp-assets/uploads/*"
      ]
    },
    {
      "Sid": "ReadDatabaseSecret",
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue"
      ],
      "Resource": [
        "arn:aws:secretsmanager:${REGION}:${ACCOUNT_ID}:secret:prod/myapp/database-??????"
      ]
    },
    {
      "Sid": "WriteCloudWatchLogs",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogStreams"
      ],
      "Resource": [
        "arn:aws:logs:${REGION}:${ACCOUNT_ID}:log-group:/myapp/*"
      ]
    },
    {
      "Sid": "DenyEverythingElse",
      "Effect": "Deny",
      "Action": [
        "iam:*",
        "sts:AssumeRole",
        "organizations:*",
        "account:*",
        "s3:DeleteBucket",
        "s3:PutBucketPolicy",
        "ec2:RunInstances",
        "secretsmanager:DeleteSecret",
        "secretsmanager:ListSecrets"
      ],
      "Resource": "*"
    }
  ]
}
EOF

# Create the least-privilege policy
aws iam create-policy \
  --policy-name myapp-least-privilege \
  --policy-document file:///tmp/least-privilege-policy.json \
  --description "Minimal permissions for myapp web server"

# Create the least-privilege role
cat > /tmp/app-trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "aws:RequestedRegion": "${REGION}"
        }
      }
    }
  ]
}
EOF

aws iam create-role \
  --role-name myapp-least-privilege-role \
  --assume-role-policy-document file:///tmp/app-trust-policy.json

aws iam attach-role-policy \
  --role-name myapp-least-privilege-role \
  --policy-arn arn:aws:iam::${ACCOUNT_ID}:policy/myapp-least-privilege

echo "✅ Least-privilege role created"

# ============================================
# STEP 3: Add a Permission Boundary
# (defense in depth — even if policy is wrong, boundary holds)
# ============================================

cat > /tmp/permission-boundary.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket",
        "secretsmanager:GetSecretValue",
        "logs:*",
        "cloudwatch:PutMetricData"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": [
        "iam:*",
        "sts:*",
        "organizations:*",
        "ec2:RunInstances",
        "ec2:TerminateInstances"
      ],
      "Resource": "*"
    }
  ]
}
EOF

aws iam create-policy \
  --policy-name myapp-permission-boundary \
  --policy-document file:///tmp/permission-boundary.json

# Apply boundary to the role
# Note: boundaries are applied to users/roles, not policies
aws iam put-role-permissions-boundary \
  --role-name myapp-least-privilege-role \
  --permissions-boundary arn:aws:iam::${ACCOUNT_ID}:policy/myapp-permission-boundary

echo "✅ Permission boundary applied"
LAB 4: Simulate Breach Attempt on Hardened Role
# ============================================
# Now try the same attacks with least-privilege role
# ============================================

# Assume the hardened role (simulate EC2 with this role)
CREDS=$(aws sts assume-role \
  --role-arn arn:aws:iam::${ACCOUNT_ID}:role/myapp-least-privilege-role \
  --role-session-name breach-simulation)

export AWS_ACCESS_KEY_ID=$(echo $CREDS | jq -r '.Credentials.AccessKeyId')
export AWS_SECRET_ACCESS_KEY=$(echo $CREDS | jq -r '.Credentials.SecretAccessKey')
export AWS_SESSION_TOKEN=$(echo $CREDS | jq -r '.Credentials.SessionToken')

echo "Now operating as the hardened role..."
aws sts get-caller-identity

# ATTACK 1: Try to list all S3 buckets
aws s3 ls
# ❌ AccessDenied — s3:ListAllMyBuckets not in policy

# ATTACK 2: Try to read secrets we shouldn't
aws secretsmanager list-secrets
# ❌ AccessDenied — ListSecrets explicitly denied

aws secretsmanager get-secret-value --secret-id prod/otherapp/apikey
# ❌ AccessDenied — resource ARN doesn't match

# ATTACK 3: Try to create IAM backdoor
aws iam create-user --user-name attacker
# ❌ AccessDenied — iam:* explicitly denied

# ATTACK 4: Try to assume another role
aws sts assume-role \
  --role-arn arn:aws:iam::${ACCOUNT_ID}:role/admin-role \
  --role-session-name escalation
# ❌ AccessDenied — sts:AssumeRole explicitly denied

# ATTACK 5: Try to launch GPU mining instances
aws ec2 run-instances --image-id ami-xxx --instance-type p3.16xlarge
# ❌ AccessDenied — ec2:RunInstances explicitly denied

# WHAT STILL WORKS (legitimate app operations):
# ✅ Read app assets from myapp-assets bucket
aws s3 ls s3://myapp-assets/

# ✅ Write uploads
aws s3 cp /tmp/test.txt s3://myapp-assets/uploads/

# ✅ Read the one secret it needs
aws secretsmanager get-secret-value --secret-id prod/myapp/database

# ✅ Write logs
aws logs put-log-events \
  --log-group-name /myapp/application \
  --log-stream-name instance-i-123

echo "✅ Breach simulation complete. Attacker stopped at every turn."

# Restore your original credentials
unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN
LAB 5: Detection — Find the Misconfiguration Before Attackers Do
# ============================================
# Tools that find IAM misconfigurations
# ============================================

# AWS Access Analyzer — finds resources exposed to outside
aws accessanalyzer create-analyzer \
  --analyzer-name lab-analyzer \
  --type ACCOUNT

# Wait a moment, then list findings
aws accessanalyzer list-findings \
  --analyzer-name lab-analyzer \
  --query 'findings[*].[resource,condition,action]' \
  --output table

# IAM Policy Simulator — test before deploying
aws iam simulate-principal-policy \
  --policy-source-arn arn:aws:iam::${ACCOUNT_ID}:role/myapp-least-privilege-role \
  --action-names \
    "s3:GetObject" \
    "s3:ListAllMyBuckets" \
    "iam:CreateUser" \
    "secretsmanager:ListSecrets" \
    "ec2:RunInstances" \
  --resource-arns "arn:aws:s3:::myapp-assets/*" \
  --query 'EvaluationResults[*].[ActionName,EvalDecision]' \
  --output table

# Expected output:
# s3:GetObject              | allowed
# s3:ListAllMyBuckets       | implicitDeny
# iam:CreateUser            | explicitDeny
# secretsmanager:ListSecrets| explicitDeny
# ec2:RunInstances          | explicitDeny

# Find roles with wildcard permissions (dangerous)
aws iam list-roles --query 'Roles[*].RoleName' --output text | \
  tr '\t' '\n' | while read role; do
    policies=$(aws iam list-attached-role-policies \
      --role-name "$role" \
      --query 'AttachedPolicies[*].PolicyArn' \
      --output text)
    if echo "$policies" | grep -q "AdministratorAccess\|PowerUser"; then
      echo "⚠️  DANGER: $role has admin/poweruser policy"
    fi
  done

# Find IAM users with access keys (should use roles instead)
aws iam list-users --query 'Users[*].UserName' --output text | \
  tr '\t' '\n' | while read user; do
    keys=$(aws iam list-access-keys \
      --user-name "$user" \
      --query 'AccessKeyMetadata[?Status==`Active`].AccessKeyId' \
      --output text)
    if [ -n "$keys" ]; then
      echo "⚠️  User $user has active access key: $keys"
    fi
  done

# Find roles with no activity (zombie roles — should be deleted)
aws iam get-role --role-name lab-overpermissive-role \
  --query 'Role.RoleLastUsed'
# If null or old date — this role should be reviewed/deleted

# CloudTrail — see who called what
aws cloudtrail lookup-events \
  --lookup-attributes AttributeKey=EventName,AttributeValue=AssumeRole \
  --start-time $(date -d '1 hour ago' +%s) \
  --query 'Events[*].[EventTime,Username,Resources[0].ResourceName]' \
  --output table
PART 7: THE DELIVERABLE — IAM Misconfiguration Case Study
Case Study: The Over-Permissive EC2 Role Breach
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INCIDENT REPORT: IAM Privilege Escalation via EC2 Metadata
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SEVERITY: Critical
IMPACT:   Full account compromise
ROOT CAUSE: EC2 instance role with AdministratorAccess

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ATTACK TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

T+0:00  Attacker exploits SSRF vulnerability in web app
        curl http://169.254.169.254/latest/meta-data/iam/security-credentials/
        → Receives role name: "prod-app-role"

        curl http://169.254.169.254/latest/meta-data/iam/security-credentials/prod-app-role
        → Receives AccessKeyId, SecretAccessKey, SessionToken
        → Credentials valid for 6 hours (default)

T+0:05  Attacker uses credentials from laptop:
        aws sts get-caller-identity
        → Account ID, role ARN confirmed

T+0:10  Reconnaissance:
        aws s3 ls → all 47 buckets enumerated
        aws secretsmanager list-secrets → all 23 secrets found
        aws rds describe-db-instances → prod database located

T+0:20  Data exfiltration:
        aws s3 sync s3://prod-customer-data/ ./exfil/
        → 2.3 million customer records downloaded

T+0:30  Persistence established:
        aws iam create-user --user-name support-backup
        aws iam attach-user-policy → AdministratorAccess
        aws iam create-access-key → permanent backdoor created
        (This key survives even after EC2 is terminated)

T+0:45  Lateral movement:
        aws ec2 run-instances → GPU fleet launched in 3 regions
        → $50,000 crypto mining bill in 24 hours

T+6:00  Original credentials expire. Attacker uses IAM backdoor.
        Account still fully compromised.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROOT CAUSE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIMARY CAUSE:
  EC2 role had AdministratorAccess policy attached.
  SSRF vulnerability + over-permissive role = full account takeover.

CONTRIBUTING FACTORS:
  1. No Permission Boundary — nothing capped the role's effective power
  2. No SCP — no account-level guardrails
  3. No IMDSv2 enforcement — v1 allows SSRF to steal credentials
  4. No Access Analyzer — public exposure not detected
  5. No CloudTrail alerting — enumeration went undetected
  6. iam:CreateUser not denied — attacker established persistence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REMEDIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMMEDIATE (during incident):
  1. Revoke all active sessions for compromised role
     aws iam put-role-policy --role-name prod-app-role \
       --policy-name DenyAll \
       --policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Deny","Action":"*","Resource":"*"}]}'

  2. Delete backdoor IAM user
     aws iam delete-access-key --user-name support-backup --access-key-id ...
     aws iam delete-user --user-name support-backup

  3. Terminate rogue EC2 instances
     aws ec2 terminate-instances --instance-ids ...

  4. Rotate all secrets that may have been read

SHORT-TERM (within 24 hours):
  5. Replace role policy with least-privilege version
  6. Enforce IMDSv2 on all EC2 instances
  7. Apply permission boundaries to all roles
  8. Enable AWS Access Analyzer

LONG-TERM (within 2 weeks):
  9. Implement SCPs in AWS Organizations
  10. CloudTrail → CloudWatch alerts for iam:CreateUser, unusual AssumeRole
  11. GuardDuty enabled (detects credential exfiltration)
  12. Fix the SSRF vulnerability in the application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREVENTION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ No role ever gets AdministratorAccess (except break-glass role)
□ Every role has a Permission Boundary
□ SCP denies iam:CreateUser, iam:CreateAccessKey in prod
□ IMDSv2 enforced on all EC2 (blocks SSRF attacks on metadata)
□ Access Analyzer enabled in every account
□ CloudTrail enabled with alerts on iam:* calls
□ GuardDuty enabled (auto-detects credential misuse)
□ All policies reviewed by IAM Access Analyzer before deploy
□ Quarterly IAM access reviews (delete unused roles/keys)
□ No IAM users — only roles and federation
Enforce IMDSv2 (Blocks the SSRF Attack Vector)
# IMDSv2 requires a session token — breaks simple SSRF attacks

# Require IMDSv2 on new instances (no way to use v1)
aws ec2 run-instances \
  --image-id ami-xxx \
  --instance-type t3.micro \
  --metadata-options "HttpTokens=required,HttpPutResponseHopLimit=1"

# Enforce on existing instances
aws ec2 modify-instance-metadata-options \
  --instance-id i-xxxxxxxxx \
  --http-tokens required \
  --http-put-response-hop-limit 1

# With IMDSv2, SSRF fails because:
# Step 1 requires a PUT request to get a token
# Most SSRF payloads only do GET
# Hop limit 1 means: only the instance itself can use it
# (not an attacker on a different network hop)

# Account-wide enforcement via SCP
cat > /tmp/require-imdsv2-scp.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "ec2:RunInstances",
      "Resource": "arn:aws:ec2:*:*:instance/*",
      "Condition": {
        "StringNotEquals": {
          "ec2:MetadataHttpTokens": "required"
        }
      }
    }
  ]
}
EOF
# Apply this SCP to your AWS Organization
# Now nobody can launch EC2 without IMDSv2
PART 8: THE IAM GOLDEN RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE TEN COMMANDMENTS OF IAM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. NEVER use IAM users for applications.
   Always use roles. Always temporary credentials.

2. NEVER attach AdministratorAccess to any role
   that touches production automatically.

3. ALWAYS apply Permission Boundaries to every role.
   Defense in depth. One misconfigured policy ≠ game over.

4. ALWAYS use SCPs in AWS Organizations.
   Account-level guardrails that nobody can override.

5. DENY iam:CreateUser and iam:CreateAccessKey in prod SCPs.
   Attackers establish persistence through IAM users.

6. ENFORCE IMDSv2 on all EC2.
   Blocks SSRF-based credential theft.

7. ENABLE Access Analyzer in every account.
   Finds public exposure you didn't know about.

8. ENABLE GuardDuty in every account.
   Detects credential misuse even after breach.

9. LOCK DOWN with resource ARNs, never wildcard Resources.
   "s3:GetObject on *" is almost always wrong.
   "s3:GetObject on arn:aws:s3:::myapp-assets/*" is right.

10. REVIEW IAM quarterly.
    Roles accumulate like dust.
    If a role hasn't been used in 90 days: delete it.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YOUR STUDY CHECKLIST
CONCEPTS — explain without notes:
□ Draw the full IAM policy evaluation flow (all 5 policy types)
□ Explain why explicit deny beats 100 explicit allows
□ Explain same-account vs cross-account resource policy rules
□ Explain the confused deputy problem and how ExternalId fixes it
□ Explain OIDC federation flow for GitHub Actions
□ Explain why SSRF + IMDSv1 = account takeover

LABS — done with your own hands:
□ Created over-permissive role with AdministratorAccess
□ Simulated breach: listed all buckets, read secrets, created backdoor
□ Created least-privilege policy with specific ARNs
□ Applied Permission Boundary to the role
□ Ran breach simulation again — confirmed denied at every step
□ Ran IAM policy simulator to verify
□ Set up Access Analyzer
□ Enforced IMDSv2 on EC2

DELIVERABLE:
□ Case study written: attack timeline + root cause + remediation
□ Before policy (over-permissive) documented
□ After policy (least-privilege) documented with reasoning per statement
□ Prevention checklist you can apply to any new AWS account
Three modules down. You now think in OS internals, network packets, and identity security. Everything from here — containers, Kubernetes, CI/CD pipelines, observability — builds directly on these three foundations.
IAM is the one that ends careers and makes headlines when it goes wrong. Now you know how it works and how to lock it down before the attacker gets there.
Go run those labs. Every single one.




# Production Multi-Tier App 🏗️

## Your Senior DevSecOps Mentor Speaking

Everything you've learned so far was theory with practice sprinkled in. Linux internals, networking, IAM — those were the foundations. **This module is where it all collides into something real.**

A multi-tier production app is what you will deploy, babysit, debug, and scale for the rest of your career. Every company runs some version of this architecture. When it breaks at 3am, you need to know exactly where to look, what to do, and how fast to do it.

We build it layer by layer. Then we destroy it — deliberately. Then we understand exactly what happened and why.

Let's go.

---

# THE MASTER MENTAL MODEL FIRST

```
THE THREE TIERS — why they exist

TIER 1: PRESENTATION (Public-facing)
  → ALB + Auto Scaling EC2 (Web/App servers)
  → Lives in PUBLIC subnet
  → Talks to the internet
  → Stateless — any instance can handle any request
  → Scales horizontally — add more instances under load

TIER 2: APPLICATION LOGIC (already merged with Tier 1 in modern apps)
  → Baked into the EC2 instances
  → Business logic, API endpoints
  → Reads/writes to database

TIER 3: DATA (Never public-facing)
  → RDS (PostgreSQL/MySQL)
  → Lives in PRIVATE subnet
  → ZERO direct internet access — ever
  → Stateful — data lives here permanently
  → Scales vertically (bigger instance) or read replicas

THE GLUE:
  → Bastion Host: your secure SSH entry point
  → ALB: traffic distributor + health enforcer
  → CloudWatch: the nervous system that feels pain
  → HTTPS/TLS: encryption from browser to ALB
  → Auto Scaling: self-healing capacity management

SECURITY PHILOSOPHY:
  Internet → ALB (port 443 only)
  ALB → App EC2 (port 80, from ALB SG only)
  App EC2 → RDS (port 5432, from App SG only)
  You → Bastion (port 22, from YOUR IP only)
  Bastion → App EC2 (port 22, from Bastion SG only)

Nobody touches the database directly. Ever.
Nobody SSHes to app servers from the internet. Ever.
```

---

# THE FULL ARCHITECTURE

```
                        INTERNET
                            │
                    ┌───────┴────────┐
                    │ Route 53       │
                    │ app.myapp.com  │
                    │ → ALB DNS name │
                    └───────┬────────┘
                            │ HTTPS (443)
                            ▼
                ┌───────────────────────┐
                │  Application Load     │
                │  Balancer (ALB)       │
                │  Listener: 443 → HTTP │
                │  Target: port 80      │
                │  Health: GET /health  │
                └───────────┬───────────┘
                            │
           ┌────────────────┴─────────────────┐
           │         VPC: 10.0.0.0/16         │
           │                                  │
           │  ┌─────────────────────────────┐ │
           │  │     PUBLIC SUBNETS          │ │
           │  │  10.0.1.0/24 (us-east-1a)  │ │
           │  │  10.0.2.0/24 (us-east-1b)  │ │
           │  │                             │ │
           │  │  ┌──────────┐  ┌─────────┐ │ │
           │  │  │ Bastion  │  │NAT GW   │ │ │
           │  │  │10.0.1.10 │  │10.0.1.5 │ │ │
           │  │  └──────────┘  └────┬────┘ │ │
           │  └────────────────────┼───────┘ │
           │                       │         │
           │  ┌────────────────────┼───────┐ │
           │  │    PRIVATE SUBNETS │       │ │
           │  │  10.0.3.0/24 (1a)  │       │ │
           │  │  10.0.4.0/24 (1b)  │       │ │
           │  │                    │       │ │
           │  │  ┌─────────────────────┐   │ │
           │  │  │  AUTO SCALING GROUP │   │ │
           │  │  │  ┌────┐    ┌────┐  │   │ │
           │  │  │  │EC2 │    │EC2 │  │   │ │
           │  │  │  │ 1a │    │ 1b │  │   │ │
           │  │  │  └────┘    └────┘  │   │ │
           │  │  │  min:2 max:6       │   │ │
           │  │  └─────────────────────┘   │ │
           │  │                            │ │
           │  │  ┌─────────────────────┐   │ │
           │  │  │   RDS (Multi-AZ)    │   │ │
           │  │  │  Primary: 10.0.3.x  │   │ │
           │  │  │  Standby: 10.0.4.x  │   │ │
           │  │  │  Port: 5432         │   │ │
           │  │  └─────────────────────┘   │ │
           │  └────────────────────────────┘ │
           └──────────────────────────────────┘
```

---

# PART 1: BUILD IT — Layer by Layer

## STEP 0: Environment Setup

```bash
#!/bin/bash
# Save this as setup-env.sh — run first

export AWS_REGION="us-east-1"
export PROJECT="prodapp"
export ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "Account: $ACCOUNT_ID"
echo "Region: $AWS_REGION"
echo "Project: $PROJECT"
```

---

## STEP 1: VPC and Network Foundation

```bash
# ============================================
# VPC
# ============================================

VPC_ID=$(aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --tag-specifications "ResourceType=vpc,Tags=[{Key=Name,Value=${PROJECT}-vpc},{Key=Project,Value=${PROJECT}}]" \
  --query 'Vpc.VpcId' --output text)

aws ec2 modify-vpc-attribute --vpc-id $VPC_ID --enable-dns-hostnames
aws ec2 modify-vpc-attribute --vpc-id $VPC_ID --enable-dns-support

echo "VPC: $VPC_ID"

# ============================================
# SUBNETS — 2 Public, 2 Private (multi-AZ)
# ============================================

# Public subnets (ALB + Bastion + NAT GW live here)
PUB_SUB_1A=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block 10.0.1.0/24 \
  --availability-zone ${AWS_REGION}a \
  --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=${PROJECT}-public-1a},{Key=Tier,Value=public}]" \
  --query 'Subnet.SubnetId' --output text)

PUB_SUB_1B=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block 10.0.2.0/24 \
  --availability-zone ${AWS_REGION}b \
  --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=${PROJECT}-public-1b},{Key=Tier,Value=public}]" \
  --query 'Subnet.SubnetId' --output text)

# Private subnets (App EC2 + RDS live here)
PRIV_SUB_1A=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block 10.0.3.0/24 \
  --availability-zone ${AWS_REGION}a \
  --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=${PROJECT}-private-1a},{Key=Tier,Value=private}]" \
  --query 'Subnet.SubnetId' --output text)

PRIV_SUB_1B=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block 10.0.4.0/24 \
  --availability-zone ${AWS_REGION}b \
  --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=${PROJECT}-private-1b},{Key=Tier,Value=private}]" \
  --query 'Subnet.SubnetId' --output text)

# Auto-assign public IPs in public subnets
aws ec2 modify-subnet-attribute --subnet-id $PUB_SUB_1A --map-public-ip-on-launch
aws ec2 modify-subnet-attribute --subnet-id $PUB_SUB_1B --map-public-ip-on-launch

echo "Public 1a: $PUB_SUB_1A | Public 1b: $PUB_SUB_1B"
echo "Private 1a: $PRIV_SUB_1A | Private 1b: $PRIV_SUB_1B"

# ============================================
# INTERNET GATEWAY
# ============================================

IGW_ID=$(aws ec2 create-internet-gateway \
  --tag-specifications "ResourceType=internet-gateway,Tags=[{Key=Name,Value=${PROJECT}-igw}]" \
  --query 'InternetGateway.InternetGatewayId' --output text)

aws ec2 attach-internet-gateway \
  --internet-gateway-id $IGW_ID \
  --vpc-id $VPC_ID

echo "IGW: $IGW_ID"

# ============================================
# NAT GATEWAY (single NAT for cost — use 2 for prod HA)
# ============================================

EIP_ALLOC=$(aws ec2 allocate-address \
  --domain vpc \
  --tag-specifications "ResourceType=elastic-ip,Tags=[{Key=Name,Value=${PROJECT}-nat-eip}]" \
  --query 'AllocationId' --output text)

NAT_GW=$(aws ec2 create-nat-gateway \
  --subnet-id $PUB_SUB_1A \
  --allocation-id $EIP_ALLOC \
  --tag-specifications "ResourceType=natgateway,Tags=[{Key=Name,Value=${PROJECT}-natgw}]" \
  --query 'NatGateway.NatGatewayId' --output text)

echo "Waiting for NAT Gateway..."
aws ec2 wait nat-gateway-available --nat-gateway-ids $NAT_GW
echo "NAT GW: $NAT_GW"

# ============================================
# ROUTE TABLES
# ============================================

# Public route table → IGW
PUB_RT=$(aws ec2 create-route-table \
  --vpc-id $VPC_ID \
  --tag-specifications "ResourceType=route-table,Tags=[{Key=Name,Value=${PROJECT}-public-rt}]" \
  --query 'RouteTable.RouteTableId' --output text)

aws ec2 create-route \
  --route-table-id $PUB_RT \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $IGW_ID

aws ec2 associate-route-table --route-table-id $PUB_RT --subnet-id $PUB_SUB_1A
aws ec2 associate-route-table --route-table-id $PUB_RT --subnet-id $PUB_SUB_1B

# Private route table → NAT GW
PRIV_RT=$(aws ec2 create-route-table \
  --vpc-id $VPC_ID \
  --tag-specifications "ResourceType=route-table,Tags=[{Key=Name,Value=${PROJECT}-private-rt}]" \
  --query 'RouteTable.RouteTableId' --output text)

aws ec2 create-route \
  --route-table-id $PRIV_RT \
  --destination-cidr-block 0.0.0.0/0 \
  --nat-gateway-id $NAT_GW

aws ec2 associate-route-table --route-table-id $PRIV_RT --subnet-id $PRIV_SUB_1A
aws ec2 associate-route-table --route-table-id $PRIV_RT --subnet-id $PRIV_SUB_1B

echo "✅ Network foundation complete"
```

---

## STEP 2: Security Groups — Every Layer Locked Down

```bash
# ============================================
# ALB Security Group
# Internet → ALB: 443 and 80 (redirect to 443)
# ============================================

ALB_SG=$(aws ec2 create-security-group \
  --group-name "${PROJECT}-alb-sg" \
  --description "ALB - internet facing" \
  --vpc-id $VPC_ID \
  --query 'GroupId' --output text)

aws ec2 authorize-security-group-ingress \
  --group-id $ALB_SG \
  --protocol tcp --port 443 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
  --group-id $ALB_SG \
  --protocol tcp --port 80 --cidr 0.0.0.0/0

aws ec2 create-tags \
  --resources $ALB_SG \
  --tags Key=Name,Value="${PROJECT}-alb-sg"

echo "ALB SG: $ALB_SG"

# ============================================
# App EC2 Security Group
# ALB → App: 80 (from ALB SG only — not from internet)
# Bastion → App: 22 (SSH from Bastion SG only)
# ============================================

APP_SG=$(aws ec2 create-security-group \
  --group-name "${PROJECT}-app-sg" \
  --description "App servers - ALB and bastion only" \
  --vpc-id $VPC_ID \
  --query 'GroupId' --output text)

# HTTP only from ALB security group (not from internet)
aws ec2 authorize-security-group-ingress \
  --group-id $APP_SG \
  --protocol tcp --port 80 \
  --source-group $ALB_SG

# SSH only from Bastion (we'll create Bastion SG next)
# We'll add this after bastion SG is created

aws ec2 create-tags \
  --resources $APP_SG \
  --tags Key=Name,Value="${PROJECT}-app-sg"

echo "App SG: $APP_SG"

# ============================================
# Bastion Security Group
# Your IP → Bastion: 22 only
# ============================================

MY_IP=$(curl -s https://checkip.amazonaws.com)

BASTION_SG=$(aws ec2 create-security-group \
  --group-name "${PROJECT}-bastion-sg" \
  --description "Bastion host - SSH from admin IP only" \
  --vpc-id $VPC_ID \
  --query 'GroupId' --output text)

aws ec2 authorize-security-group-ingress \
  --group-id $BASTION_SG \
  --protocol tcp --port 22 \
  --cidr "${MY_IP}/32"

aws ec2 create-tags \
  --resources $BASTION_SG \
  --tags Key=Name,Value="${PROJECT}-bastion-sg"

# Now add Bastion → App SSH rule
aws ec2 authorize-security-group-ingress \
  --group-id $APP_SG \
  --protocol tcp --port 22 \
  --source-group $BASTION_SG

echo "Bastion SG: $BASTION_SG"

# ============================================
# RDS Security Group
# App EC2 → RDS: 5432 from App SG only
# Bastion → RDS: 5432 from Bastion SG (for admin queries)
# ============================================

RDS_SG=$(aws ec2 create-security-group \
  --group-name "${PROJECT}-rds-sg" \
  --description "RDS - app and bastion only" \
  --vpc-id $VPC_ID \
  --query 'GroupId' --output text)

aws ec2 authorize-security-group-ingress \
  --group-id $RDS_SG \
  --protocol tcp --port 5432 \
  --source-group $APP_SG

aws ec2 authorize-security-group-ingress \
  --group-id $RDS_SG \
  --protocol tcp --port 5432 \
  --source-group $BASTION_SG

aws ec2 create-tags \
  --resources $RDS_SG \
  --tags Key=Name,Value="${PROJECT}-rds-sg"

echo "RDS SG: $RDS_SG"
echo "✅ All security groups created"
```

---

## STEP 3: RDS — Private Database Tier

```bash
# ============================================
# DB Subnet Group (required for RDS Multi-AZ)
# Must span at least 2 AZs
# ============================================

aws rds create-db-subnet-group \
  --db-subnet-group-name "${PROJECT}-db-subnet-group" \
  --db-subnet-group-description "Private subnets for RDS" \
  --subnet-ids $PRIV_SUB_1A $PRIV_SUB_1B \
  --tags Key=Name,Value="${PROJECT}-db-subnet-group"

# ============================================
# Store DB password in Secrets Manager
# NEVER hardcode passwords anywhere
# ============================================

DB_PASSWORD=$(openssl rand -base64 32 | tr -d /=+ | cut -c1-25)

aws secretsmanager create-secret \
  --name "${PROJECT}/rds/master-password" \
  --description "RDS master password for ${PROJECT}" \
  --secret-string "{\"username\":\"dbadmin\",\"password\":\"${DB_PASSWORD}\"}"

echo "DB Password stored in Secrets Manager"

# ============================================
# RDS PostgreSQL — Multi-AZ for HA
# Multi-AZ = synchronous standby in another AZ
# Automatic failover in ~60-120 seconds
# ============================================

aws rds create-db-instance \
  --db-instance-identifier "${PROJECT}-postgres" \
  --db-instance-class db.t3.medium \
  --engine postgres \
  --engine-version "15.4" \
  --master-username dbadmin \
  --master-user-password "${DB_PASSWORD}" \
  --db-name appdb \
  --vpc-security-group-ids $RDS_SG \
  --db-subnet-group-name "${PROJECT}-db-subnet-group" \
  --multi-az \
  --storage-type gp3 \
  --allocated-storage 100 \
  --max-allocated-storage 1000 \
  --storage-encrypted \
  --backup-retention-period 7 \
  --preferred-backup-window "03:00-04:00" \
  --preferred-maintenance-window "Mon:04:00-Mon:05:00" \
  --deletion-protection \
  --enable-performance-insights \
  --performance-insights-retention-period 7 \
  --monitoring-interval 60 \
  --enable-cloudwatch-logs-exports postgresql upgrade \
  --tags Key=Name,Value="${PROJECT}-postgres" Key=Environment,Value=production

echo "RDS creating (takes 10-15 minutes)..."
echo "Continue with other steps while RDS initializes"

# Get RDS endpoint (run after RDS is available)
# RDS_ENDPOINT=$(aws rds describe-db-instances \
#   --db-instance-identifier "${PROJECT}-postgres" \
#   --query 'DBInstances[0].Endpoint.Address' --output text)
```

---

## STEP 4: IAM Role for EC2 App Servers

```bash
# ============================================
# EC2 needs permissions to:
# - Read secrets from Secrets Manager (DB password)
# - Write logs to CloudWatch
# - SSM Session Manager (alternative to bastion SSH)
# - Pull from ECR (if using containers)
# ============================================

# Trust policy
cat > /tmp/ec2-trust.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {"Service": "ec2.amazonaws.com"},
    "Action": "sts:AssumeRole"
  }]
}
EOF

aws iam create-role \
  --role-name "${PROJECT}-app-role" \
  --assume-role-policy-document file:///tmp/ec2-trust.json

# Least privilege policy
cat > /tmp/app-role-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadAppSecrets",
      "Effect": "Allow",
      "Action": ["secretsmanager:GetSecretValue"],
      "Resource": [
        "arn:aws:secretsmanager:${AWS_REGION}:${ACCOUNT_ID}:secret:${PROJECT}/*"
      ]
    },
    {
      "Sid": "CloudWatchLogs",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogStreams",
        "cloudwatch:PutMetricData"
      ],
      "Resource": "*"
    },
    {
      "Sid": "SSMSessionManager",
      "Effect": "Allow",
      "Action": [
        "ssm:UpdateInstanceInformation",
        "ssmmessages:CreateControlChannel",
        "ssmmessages:CreateDataChannel",
        "ssmmessages:OpenControlChannel",
        "ssmmessages:OpenDataChannel"
      ],
      "Resource": "*"
    }
  ]
}
EOF

aws iam put-role-policy \
  --role-name "${PROJECT}-app-role" \
  --policy-name "${PROJECT}-app-policy" \
  --policy-document file:///tmp/app-role-policy.json

aws iam create-instance-profile \
  --instance-profile-name "${PROJECT}-app-profile"

aws iam add-role-to-instance-profile \
  --instance-profile-name "${PROJECT}-app-profile" \
  --role-name "${PROJECT}-app-role"

echo "✅ IAM role ready"
```

---

STEP 5: Launch Template + Auto Scaling Group
# ============================================
# USER DATA SCRIPT — runs on every new instance
# This bootstraps your app automatically
# ============================================

cat > /tmp/userdata.sh << 'USERDATA'
#!/bin/bash
set -e
exec > >(tee /var/log/userdata.log) 2>&1

echo "=== Starting instance bootstrap ==="

# Update and install dependencies
yum update -y
yum install -y python3 python3-pip postgresql15 amazon-cloudwatch-agent jq

# Install CloudWatch agent
wget -q https://s3.amazonaws.com/amazoncloudwatch-agent/amazon_linux/amd64/latest/amazon-cloudwatch-agent.rpm
rpm -U ./amazon-cloudwatch-agent.rpm

# Get DB credentials from Secrets Manager
REGION=$(curl -s http://169.254.169.254/latest/meta-data/placement/region)
SECRET=$(aws secretsmanager get-secret-value \
  --secret-id "prodapp/rds/master-password" \
  --region $REGION \
  --query SecretString --output text)
DB_PASS=$(echo $SECRET | jq -r '.password')
DB_USER=$(echo $SECRET | jq -r '.username')

# Get RDS endpoint (stored as SSM parameter)
DB_HOST=$(aws ssm get-parameter \
  --name "/prodapp/rds/endpoint" \
  --region $REGION \
  --query 'Parameter.Value' --output text)

# Create simple Python Flask app
pip3 install flask psycopg2-binary gunicorn

mkdir -p /opt/app
cat > /opt/app/app.py << APPEOF
from flask import Flask, jsonify
import psycopg2
import os
import socket

app = Flask(__name__)

DB_CONFIG = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'database': 'appdb',
    'user': os.environ.get('DB_USER', 'dbadmin'),
    'password': os.environ.get('DB_PASS', ''),
    'connect_timeout': 5
}

@app.route('/health')
def health():
    """ALB health check endpoint"""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        conn.close()
        return jsonify({
            'status': 'healthy',
            'instance': socket.gethostname(),
            'db': 'connected'
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'unhealthy',
            'error': str(e)
        }), 500

@app.route('/api/data')
def get_data():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cur = conn.cursor()
        cur.execute('SELECT NOW(), version()')
        row = cur.fetchone()
        cur.close()
        conn.close()
        return jsonify({
            'time': str(row[0]),
            'db_version': str(row[1]),
            'served_by': socket.gethostname()
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stress/cpu')
def stress_cpu():
    """For simulation — burns CPU"""
    result = sum(i*i for i in range(10**7))
    return jsonify({'result': result})

@app.route('/api/stress/memory')
def stress_memory():
    """For simulation — leaks memory"""
    app._leak = getattr(app, '_leak', [])
    app._leak.append(' ' * 50 * 1024 * 1024)  # 50MB
    return jsonify({'leaked_chunks': len(app._leak)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
APPEOF

# Set environment variables
cat > /etc/systemd/system/app.service << SVCEOF
[Unit]
Description=Production App
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/opt/app
Environment=DB_HOST=${DB_HOST}
Environment=DB_USER=${DB_USER}
Environment=DB_PASS=${DB_PASS}
ExecStart=/usr/local/bin/gunicorn --workers 4 --bind 0.0.0.0:80 app:app
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
SVCEOF

systemctl daemon-reload
systemctl enable app
systemctl start app

# Configure CloudWatch agent
cat > /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json << CWEOF
{
  "metrics": {
    "namespace": "ProdApp/EC2",
    "metrics_collected": {
      "cpu": {
        "measurement": ["cpu_usage_idle", "cpu_usage_user", "cpu_usage_system"],
        "metrics_collection_interval": 60
      },
      "mem": {
        "measurement": ["mem_used_percent", "mem_available"],
        "metrics_collection_interval": 60
      },
      "disk": {
        "measurement": ["disk_used_percent"],
        "metrics_collection_interval": 60,
        "resources": ["/"]
      }
    },
    "append_dimensions": {
      "InstanceId": "\${aws:InstanceId}",
      "AutoScalingGroupName": "\${aws:AutoScalingGroupName}"
    }
  },
  "logs": {
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/var/log/userdata.log",
            "log_group_name": "/prodapp/ec2/bootstrap",
            "log_stream_name": "{instance_id}"
          },
          {
            "file_path": "/var/log/messages",
            "log_group_name": "/prodapp/ec2/system",
            "log_stream_name": "{instance_id}"
          }
        ]
      },
      "journal": {
        "collect_list": [
          {
            "unit_names": ["app.service"],
            "log_group_name": "/prodapp/application",
            "log_stream_name": "{instance_id}"
          }
        ]
      }
    }
  }
}
CWEOF

/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
  -a fetch-config \
  -m ec2 \
  -s \
  -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json

echo "=== Bootstrap complete ==="
USERDATA

# ============================================
# LAUNCH TEMPLATE
# ============================================

AMI=$(aws ec2 describe-images \
  --owners amazon \
  --filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2" \
            "Name=state,Values=available" \
  --query 'sort_by(Images,&CreationDate)[-1].ImageId' \
  --output text)

LT_ID=$(aws ec2 create-launch-template \
  --launch-template-name "${PROJECT}-app-lt" \
  --version-description "v1" \
  --launch-template-data "{
    \"ImageId\": \"${AMI}\",
    \"InstanceType\": \"t3.small\",
    \"SecurityGroupIds\": [\"${APP_SG}\"],
    \"IamInstanceProfile\": {
      \"Name\": \"${PROJECT}-app-profile\"
    },
    \"MetadataOptions\": {
      \"HttpTokens\": \"required\",
      \"HttpPutResponseHopLimit\": 1
    },
    \"UserData\": \"$(base64 -w0 /tmp/userdata.sh)\",
    \"TagSpecifications\": [{
      \"ResourceType\": \"instance\",
      \"Tags\": [
        {\"Key\": \"Name\", \"Value\": \"${PROJECT}-app\"},
        {\"Key\": \"Project\", \"Value\": \"${PROJECT}\"}
      ]
    }]
  }" \
  --query 'LaunchTemplate.LaunchTemplateId' --output text)

echo "Launch Template: $LT_ID"

# ============================================
# AUTO SCALING GROUP
# min:2 ensures HA across AZs always
# max:6 controls cost ceiling
# ============================================

aws autoscaling create-auto-scaling-group \
  --auto-scaling-group-name "${PROJECT}-asg" \
  --launch-template "LaunchTemplateId=${LT_ID},Version=\$Latest" \
  --min-size 2 \
  --max-size 6 \
  --desired-capacity 2 \
  --vpc-zone-identifier "${PRIV_SUB_1A},${PRIV_SUB_1B}" \
  --health-check-type ELB \
  --health-check-grace-period 300 \
  --tags \
    "Key=Name,Value=${PROJECT}-app,PropagateAtLaunch=true" \
    "Key=Project,Value=${PROJECT},PropagateAtLaunch=true"

# ============================================
# SCALING POLICIES
# Target Tracking — simplest, most reliable
# "Keep CPU at 60% — add/remove instances to maintain"
# ============================================

aws autoscaling put-scaling-policy \
  --auto-scaling-group-name "${PROJECT}-asg" \
  --policy-name "${PROJECT}-cpu-scaling" \
  --policy-type TargetTrackingScaling \
  --target-tracking-configuration '{
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "ASGAverageCPUUtilization"
    },
    "TargetValue": 60.0,
    "ScaleInCooldown": 300,
    "ScaleOutCooldown": 60
  }'

echo "✅ Auto Scaling Group created"
STEP 6: ALB with HTTPS
# ============================================
# REQUEST SSL CERTIFICATE
# ============================================

# You need a domain in Route 53 first
# Certificate must be in us-east-1 for ALB

CERT_ARN=$(aws acm request-certificate \
  --domain-name "app.yourdomain.com" \
  --validation-method DNS \
  --subject-alternative-names "*.yourdomain.com" \
  --query 'CertificateArn' --output text)

echo "Certificate ARN: $CERT_ARN"
echo "IMPORTANT: Validate the certificate in ACM console"
echo "Add the CNAME record to Route 53 to validate"

# Wait for validation (after you add the DNS records)
aws acm wait certificate-validated --certificate-arn $CERT_ARN
echo "Certificate validated!"

# ============================================
# CREATE ALB
# ============================================

ALB_ARN=$(aws elbv2 create-load-balancer \
  --name "${PROJECT}-alb" \
  --subnets $PUB_SUB_1A $PUB_SUB_1B \
  --security-groups $ALB_SG \
  --scheme internet-facing \
  --type application \
  --ip-address-type ipv4 \
  --tags Key=Name,Value="${PROJECT}-alb" Key=Project,Value="${PROJECT}" \
  --query 'LoadBalancers[0].LoadBalancerArn' --output text)

ALB_DNS=$(aws elbv2 describe-load-balancers \
  --load-balancer-arns $ALB_ARN \
  --query 'LoadBalancers[0].DNSName' --output text)

echo "ALB ARN: $ALB_ARN"
echo "ALB DNS: $ALB_DNS"

# ============================================
# TARGET GROUP — where ALB sends traffic
# ============================================

TG_ARN=$(aws elbv2 create-target-group \
  --name "${PROJECT}-app-tg" \
  --protocol HTTP \
  --port 80 \
  --vpc-id $VPC_ID \
  --health-check-protocol HTTP \
  --health-check-path "/health" \
  --health-check-interval-seconds 30 \
  --health-check-timeout-seconds 5 \
  --healthy-threshold-count 2 \
  --unhealthy-threshold-count 3 \
  --matcher HttpCode=200 \
  --target-type instance \
  --tags Key=Name,Value="${PROJECT}-app-tg" \
  --query 'TargetGroups[0].TargetGroupArn' --output text)

echo "Target Group: $TG_ARN"

# ============================================
# LISTENERS
# HTTP (80) → redirect to HTTPS (443)
# HTTPS (443) → forward to target group
# ============================================

# HTTP listener — redirects everything to HTTPS
aws elbv2 create-listener \
  --load-balancer-arn $ALB_ARN \
  --protocol HTTP \
  --port 80 \
  --default-actions '[{
    "Type": "redirect",
    "RedirectConfig": {
      "Protocol": "HTTPS",
      "Port": "443",
      "StatusCode": "HTTP_301"
    }
  }]'

# HTTPS listener — forwards to target group
aws elbv2 create-listener \
  --load-balancer-arn $ALB_ARN \
  --protocol HTTPS \
  --port 443 \
  --certificates CertificateArn=$CERT_ARN \
  --ssl-policy "ELBSecurityPolicy-TLS13-1-2-2021-06" \
  --default-actions "[{
    \"Type\": \"forward\",
    \"TargetGroupArn\": \"${TG_ARN}\"
  }]"

# ============================================
# ATTACH ASG TO TARGET GROUP
# ============================================

aws autoscaling attach-load-balancer-target-groups \
  --auto-scaling-group-name "${PROJECT}-asg" \
  --target-group-arns $TG_ARN

echo "✅ ALB with HTTPS configured"

# ============================================
# ROUTE 53 — point domain to ALB
# ============================================

HOSTED_ZONE_ID=$(aws route53 list-hosted-zones \
  --query "HostedZones[?Name=='yourdomain.com.'].Id" \
  --output text | sed 's|/hostedzone/||')

aws route53 change-resource-record-sets \
  --hosted-zone-id $HOSTED_ZONE_ID \
  --change-batch "{
    \"Changes\": [{
      \"Action\": \"UPSERT\",
      \"ResourceRecordSet\": {
        \"Name\": \"app.yourdomain.com\",
        \"Type\": \"A\",
        \"AliasTarget\": {
          \"HostedZoneId\": \"Z35SXDOTRQ7X7K\",
          \"DNSName\": \"${ALB_DNS}\",
          \"EvaluateTargetHealth\": true
        }
      }
    }]
  }"

echo "✅ DNS configured"
STEP 7: Bastion Host
# ============================================
# BASTION HOST — secure jump server
# Public subnet, minimal footprint
# Your ONLY entry point into private network
# ============================================

BASTION_ID=$(aws ec2 run-instances \
  --image-id $AMI \
  --instance-type t3.micro \
  --subnet-id $PUB_SUB_1A \
  --security-group-ids $BASTION_SG \
  --key-name your-key-pair \
  --iam-instance-profile Name="${PROJECT}-app-profile" \
  --metadata-options HttpTokens=required \
  --tag-specifications "ResourceType=instance,Tags=[
    {Key=Name,Value=${PROJECT}-bastion},
    {Key=Project,Value=${PROJECT}}
  ]" \
  --user-data '#!/bin/bash
    yum update -y
    yum install -y postgresql15 htop tcpdump nmap-ncat
    echo "Bastion ready" > /var/log/bastion-ready.log
  ' \
  --query 'Instances[0].InstanceId' --output text)

aws ec2 wait instance-running --instance-ids $BASTION_ID

BASTION_IP=$(aws ec2 describe-instances \
  --instance-ids $BASTION_ID \
  --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)

echo "Bastion ID: $BASTION_ID"
echo "Bastion IP: $BASTION_IP"

# ============================================
# HOW TO USE THE BASTION
# ============================================

# Direct SSH to bastion
# ssh -i your-key.pem ec2-user@$BASTION_IP

# SSH tunnel to RDS through bastion (local port 5433 → RDS)
# ssh -i your-key.pem -L 5433:$RDS_ENDPOINT:5432 \
#     ec2-user@$BASTION_IP -N &
# psql -h localhost -p 5433 -U dbadmin -d appdb

# SSH ProxyJump to private EC2 (through bastion)
# ssh -i your-key.pem \
#     -J ec2-user@$BASTION_IP \
#     ec2-user@10.0.3.x

echo "✅ Bastion configured"
STEP 8: CloudWatch Alarms — The Nervous System
# ============================================
# SNS TOPIC FOR ALERTS
# ============================================

ALERT_TOPIC=$(aws sns create-topic \
  --name "${PROJECT}-alerts" \
  --query 'TopicArn' --output text)

# Subscribe your email
aws sns subscribe \
  --topic-arn $ALERT_TOPIC \
  --protocol email \
  --notification-endpoint "your-oncall@company.com"

echo "SNS Topic: $ALERT_TOPIC"
echo "CHECK EMAIL and confirm subscription!"

# ============================================
# ALB ALARMS
# ============================================

# High 5xx error rate (app is broken)
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-alb-5xx-high" \
  --alarm-description "ALB 5xx errors > 10 in 5 minutes" \
  --metric-name HTTPCode_Target_5XX_Count \
  --namespace AWS/ApplicationELB \
  --dimensions Name=LoadBalancer,Value=$(echo $ALB_ARN | cut -d/ -f2-) \
  --statistic Sum \
  --period 300 \
  --evaluation-periods 1 \
  --threshold 10 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions $ALERT_TOPIC \
  --ok-actions $ALERT_TOPIC \
  --treat-missing-data notBreaching

# High response time (app is slow)
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-alb-latency-high" \
  --alarm-description "ALB P99 latency > 3 seconds" \
  --metric-name TargetResponseTime \
  --namespace AWS/ApplicationELB \
  --dimensions Name=LoadBalancer,Value=$(echo $ALB_ARN | cut -d/ -f2-) \
  --extended-statistic p99 \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 3 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions $ALERT_TOPIC

# Unhealthy hosts (instances failing health checks)
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-alb-unhealthy-hosts" \
  --alarm-description "ALB has unhealthy target hosts" \
  --metric-name UnHealthyHostCount \
  --namespace AWS/ApplicationELB \
  --dimensions \
    Name=LoadBalancer,Value=$(echo $ALB_ARN | cut -d/ -f2-) \
    Name=TargetGroup,Value=$(echo $TG_ARN | cut -d/ -f2-) \
  --statistic Maximum \
  --period 60 \
  --evaluation-periods 2 \
  --threshold 0 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions $ALERT_TOPIC \
  --ok-actions $ALERT_TOPIC

# ============================================
# AUTO SCALING ALARMS
# ============================================

# High CPU — scale out trigger
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-asg-cpu-high" \
  --alarm-description "ASG CPU > 80% - scaling may be needed" \
  --metric-name CPUUtilization \
  --namespace AWS/EC2 \
  --dimensions Name=AutoScalingGroupName,Value="${PROJECT}-asg" \
  --statistic Average \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions $ALERT_TOPIC

# ASG at max capacity (can't scale further)
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-asg-at-max-capacity" \
  --alarm-description "ASG reached maximum capacity of 6" \
  --metric-name GroupMaxSize \
  --namespace AWS/AutoScaling \
  --dimensions Name=AutoScalingGroupName,Value="${PROJECT}-asg" \
  --statistic Maximum \
  --period 300 \
  --evaluation-periods 1 \
  --threshold 6 \
  --comparison-operator GreaterThanOrEqualToThreshold \
  --alarm-actions $ALERT_TOPIC

# ============================================
# RDS ALARMS
# ============================================

# High CPU on database
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-rds-cpu-high" \
  --alarm-description "RDS CPU > 80%" \
  --metric-name CPUUtilization \
  --namespace AWS/RDS \
  --dimensions Name=DBInstanceIdentifier,Value="${PROJECT}-postgres" \
  --statistic Average \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions $ALERT_TOPIC

# High DB connections (connection exhaustion approaching)
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-rds-connections-high" \
  --alarm-description "RDS connections > 80 (max ~100 for db.t3.medium)" \
  --metric-name DatabaseConnections \
  --namespace AWS/RDS \
  --dimensions Name=DBInstanceIdentifier,Value="${PROJECT}-postgres" \
  --statistic Maximum \
  --period 60 \
  --evaluation-periods 2 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions $ALERT_TOPIC

# Low free storage (disk filling up)
aws cloudwatch put-metric-alarm \
  --alarm-name "${PROJECT}-rds-low-storage" \
  --alarm-description "RDS free storage < 10GB" \
  --metric-name FreeStorageSpace \
  --namespace AWS/RDS \
  --dimensions Name=DBInstanceIdentifier,Value="${PROJECT}-postgres" \
  --statistic Minimum \
  --period 300 \
  --evaluation-periods 1 \
  --threshold 10737418240 \
  --comparison-operator LessThanThreshold \
  --alarm-actions $ALERT_TOPIC

# RDS failover happened (Multi-AZ switched)
# Detected via EventBridge rule
aws events put-rule \
  --name "${PROJECT}-rds-failover" \
  --event-pattern '{
    "source": ["aws.rds"],
    "detail-type": ["RDS DB Instance Event"],
    "detail": {
      "EventID": ["RDS-EVENT-0049", "RDS-EVENT-0050", "RDS-EVENT-0051"]
    }
  }' \
  --state ENABLED

aws events put-targets \
  --rule "${PROJECT}-rds-failover" \
  --targets "Id=1,Arn=${ALERT_TOPIC}"

# ============================================
# CLOUDWATCH DASHBOARD
# ============================================

aws cloudwatch put-dashboard \
  --dashboard-name "${PROJECT}-ops" \
  --dashboard-body '{
    "widgets": [
      {
        "type": "metric",
        "properties": {
          "title": "ALB Request Count + Errors",
          "metrics": [
            ["AWS/ApplicationELB", "RequestCount", "LoadBalancer", "'"$(echo $ALB_ARN | cut -d/ -f2-)"'"],
            [".", "HTTPCode_Target_5XX_Count", ".", "."],
            [".", "HTTPCode_Target_4XX_Count", ".", "."]
          ],
          "period": 60,
          "stat": "Sum",
          "view": "timeSeries"
        }
      },
      {
        "type": "metric",
        "properties": {
          "title": "ALB Response Time P50/P99",
          "metrics": [
            ["AWS/ApplicationELB", "TargetResponseTime", "LoadBalancer", "'"$(echo $ALB_ARN | cut -d/ -f2-)"'", {"stat": "p50"}],
            ["...", {"stat": "p99"}]
          ],
          "period": 60,
          "view": "timeSeries"
        }
      },
      {
        "type": "metric",
        "properties": {
          "title": "EC2 CPU + Instance Count",
          "metrics": [
            ["AWS/EC2", "CPUUtilization", "AutoScalingGroupName", "'"${PROJECT}-asg"'"],
            ["AWS/AutoScaling", "GroupInServiceInstances", "AutoScalingGroupName", "'"${PROJECT}-asg"'"]
          ],
          "period": 60,
          "view": "timeSeries"
        }


 SIMULATION 3: AZ Outage
# ============================================
# AZ OUTAGE SIMULATION
# We simulate us-east-1a going down
# by stopping all instances in 1a
# ============================================

# Find instances in 1a
AZ1A_INSTANCES=$(aws ec2 describe-instances \
  --filters \
    "Name=tag:aws:autoscaling:groupName,Values=${PROJECT}-asg" \
    "Name=availability-zone,Values=${AWS_REGION}a" \
    "Name=instance-state-name,Values=running" \
  --query 'Reservations[*].Instances[*].InstanceId' \
  --output text)

echo "Instances in us-east-1a: $AZ1A_INSTANCES"

# Terminate them all (simulate AZ failure)
aws ec2 terminate-instances --instance-ids $AZ1A_INSTANCES

# ============================================
# WHAT HAPPENS — AZ Outage Timeline
# ============================================

# T+0:     All 1a instances terminate
# T+0-30s: ALB detects 1a targets unhealthy
#           ALB immediately stops routing to 1a
#           ALL traffic shifts to 1b instance(s)
#           1b might be briefly overwhelmed

# T+30-60s: ASG detects desired capacity not met
#            ASG tries to launch in 1a (fails — AZ is "down")
#            ASG falls back to 1b (because we have 2 subnets)
#            ASG launches new instances in 1b

# T+60-300s: New 1b instances bootstrap
#             App recovers fully in 1b only

# RDS Impact:
# If primary was in 1a → Multi-AZ failover triggers
# RDS promotes 1b standby to primary
# DNS endpoint stays the same (CNAME flips internally)
# Failover takes ~60-120 seconds
# Apps experience ~1-2 minute DB disruption during failover

# T+120s:  RDS available from 1b primary
#           App can connect to DB again

# WATCH THE FAILOVER:
watch -n10 "aws rds describe-db-instances \
  --db-instance-identifier ${PROJECT}-postgres \
  --query 'DBInstances[0].[DBInstanceStatus,MultiAZ,AvailabilityZone,SecondaryAvailabilityZone]' \
  --output table"

# Check RDS events
aws rds describe-events \
  --source-identifier "${PROJECT}-postgres" \
  --source-type db-instance \
  --duration 60

# ============================================
# WHAT SINGLE NAT GATEWAY MEANS FOR AZ OUTAGE
# ============================================

# Our NAT GW is in 1a.
# If 1a goes down → NAT GW is gone
# → Private instances in 1b lose internet access
# → They can't reach AWS APIs
# → CloudWatch agent stops sending metrics
# → Secrets Manager calls fail
# → App may partially break even though EC2 is running

# PRODUCTION FIX: One NAT GW per AZ
NAT_GW_1B=$(aws ec2 create-nat-gateway \
  --subnet-id $PUB_SUB_1B \
  --allocation-id $(aws ec2 allocate-address \
    --domain vpc --query 'AllocationId' --output text) \
  --query 'NatGateway.NatGatewayId' --output text)

# Separate private route table for 1b pointing to 1b NAT
PRIV_RT_1B=$(aws ec2 create-route-table \
  --vpc-id $VPC_ID \
  --query 'RouteTable.RouteTableId' --output text)

aws ec2 create-route \
  --route-table-id $PRIV_RT_1B \
  --destination-cidr-block 0.0.0.0/0 \
  --nat-gateway-id $NAT_GW_1B

aws ec2 replace-route-table-association \
  --association-id $(aws ec2 describe-route-tables \
    --filters "Name=association.subnet-id,Values=$PRIV_SUB_1B" \
    --query 'RouteTables[0].Associations[0].RouteTableAssociationId' \
    --output text) \
  --route-table-id $PRIV_RT_1B

echo "✅ Now each AZ has its own NAT GW — true HA"
PART 3: THE DELIVERABLE
Architecture Diagram + Failure Propagation + Cost Breakdown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION MULTI-TIER ARCHITECTURE DOCUMENT
Project: prodapp | Region: us-east-1 | Environment: Production
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARCHITECTURE SUMMARY
──────────────────────────────────────────────────────────────
Internet
  └── Route 53 (alias record → ALB)
       └── ALB (multi-AZ, HTTPS/443, TLS 1.3)
            ├── HTTP→HTTPS redirect listener
            └── Target Group (health: /health every 30s)
                 ├── EC2 Auto Scaling Group
                 │    ├── us-east-1a: t3.small (min 1)
                 │    ├── us-east-1b: t3.small (min 1)
                 │    ├── Min: 2, Max: 6, Desired: 2
                 │    └── Scale policy: CPU target 60%
                 └── RDS PostgreSQL 15 (Multi-AZ)
                      ├── Primary: us-east-1a
                      └── Standby: us-east-1b (sync replica)

Support Infrastructure:
  Bastion Host → public subnet 1a → SSH gateway
  NAT GW → one per AZ (HA configuration)
  CloudWatch → alarms + dashboard + logs
  Secrets Manager → DB credentials (no hardcoded passwords)
  ACM → SSL certificate (auto-renewed)
  SSM → parameter store for config

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FAILURE PROPAGATION ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENARIO 1: Single Instance Crash
──────────────────────────────────────────────────────────────
Trigger: EC2 instance terminates unexpectedly

Propagation Path:
  EC2 dies
    → ALB health checks fail (3 × 30s = 90s)
    → ALB removes instance from rotation
    → ASG detects unhealthy instance (~60s)
    → ASG launches replacement in same AZ
    → New instance bootstraps (userdata: ~3-5 min)
    → ALB health checks pass (2 × 30s = 60s)
    → Traffic resumes to new instance

Impact:
  Duration: ~5-7 minutes from crash to full recovery
  User impact: Requests to dying instance may 502/504 briefly
               Remaining instance handles 100% of traffic
               No data loss (stateless tier)
  Database: No impact (DB unaffected)

Detection: CloudWatch alarm UnHealthyHostCount > 0
Response: Fully automated (ASG self-heals)
Action needed: None (monitor. investigate root cause after)

Prevention:
  ✓ min:2 ensures always 1 healthy instance
  ✓ ELB health checks drain before traffic stops
  ✓ Restart=always in systemd restarts app without instance death

──────────────────────────────────────────────────────────────
SCENARIO 2: Database Connection Exhaustion
──────────────────────────────────────────────────────────────
Trigger: Connection count approaches max_connections (100)

Propagation Path:
  App opens connections faster than they close
    → Connection pool fills up
    → New DB connect() calls fail
    → App returns HTTP 500 on all DB-dependent routes
    → /health endpoint detects DB failure
    → ALB marks all instances UNHEALTHY
    → ALB has no healthy targets → 503 Service Unavailable
    → Full application outage

Impact:
  Duration: Until connections are freed or DB restarted
  User impact: Complete outage (503 from ALB)
  Database: Still running, just rejecting new connections

Detection: CloudWatch alarm DatabaseConnections > 80
Timeline: Alarm fires → oncall paged within 60 seconds

Response Runbook:
  STEP 1: Confirm via CloudWatch → RDS → DatabaseConnections
  STEP 2: Identify connection leakers
    psql: SELECT usename, application_name, count(*)
          FROM pg_stat_activity
          GROUP BY usename, application_name
          ORDER BY count DESC;
  STEP 3: Kill idle connections immediately
    psql: SELECT pg_terminate_backend(pid)
          FROM pg_stat_activity
          WHERE state = 'idle'
          AND state_change < now() - interval '2 minutes';
  STEP 4: Deploy PgBouncer (permanent fix)
  STEP 5: Investigate why connections leaked (code bug)

Prevention:
  ✓ PgBouncer in transaction mode (20 real connections → 1000 app)
  ✓ Connection timeout settings in app
  ✓ Alarm at 80% of max_connections (gives warning time)

──────────────────────────────────────────────────────────────
SCENARIO 3: AZ Outage (us-east-1a)
──────────────────────────────────────────────────────────────
Trigger: AWS us-east-1a becomes unavailable

Propagation Path:
  1a AZ fails
    ├── EC2 path:
    │    → All 1a instances terminate
    │    → ALB removes 1a targets (immediately detects)
    │    → 100% traffic to 1b instance(s)
    │    → ASG tries to launch in 1a (fails)
    │    → ASG launches in 1b instead
    │    → 1b instances bootstrap (~5 min)
    │    → Full capacity restored in 1b
    │
    ├── RDS path (if primary in 1a):
    │    → RDS detects primary unavailable
    │    → Multi-AZ failover initiates (~60-120s)
    │    → Standby in 1b promoted to primary
    │    → CNAME endpoint flips to 1b primary
    │    → App reconnects to DB (connection pool refresh)
    │    → DB available again
    │
    └── NAT GW path (with HA config):
         → 1a NAT GW unavailable
         → 1b private instances use 1b NAT GW
         → No internet disruption for 1b instances

Impact (with proper HA setup):
  EC2: ~2-5 min degraded capacity, self-heals
  RDS: ~2 min DB disruption during failover
  NAT: No impact (dual NAT GW)
  Total: ~5 minute partial degraded experience

Impact (WITHOUT proper HA — single NAT GW in 1a):
  EC2: Same
  RDS: Same
  NAT: 1b instances lose all internet → secrets fail → app broken
  Total: Extended outage until 1a recovers

Detection:
  ALB: UnHealthyHostCount alarm
  RDS: EventBridge rule for failover events
  App: 5xx alarm

Response: Mostly automated. Monitor and communicate status.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COST BREAKDOWN — Monthly Estimate (us-east-1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPUTE
──────────────────────────────────────────────────────────────
EC2 t3.small × 2 (baseline)
  $0.0208/hr × 2 × 730 hr          = $30.37/month
  (scales to max 6 during peak)
  Peak cost (6 instances, 8hr/day)  = add ~$24/month
  Compute estimate:                   ~$30-55/month

LOAD BALANCER
──────────────────────────────────────────────────────────────
ALB fixed cost:                       $16.43/month
LCU charges (depends on traffic):     ~$5-20/month
ALB estimate:                         ~$22-36/month

DATABASE
──────────────────────────────────────────────────────────────
RDS db.t3.medium Multi-AZ:
  $0.136/hr × 2 (Multi-AZ) × 730   = $198.56/month
RDS storage gp3 100GB:              = $11.50/month
RDS backup storage (7 days):        = ~$5/month
RDS estimate:                         ~$215/month
NOTE: RDS is your biggest cost. Size carefully.

NETWORKING
──────────────────────────────────────────────────────────────
NAT Gateway × 2:
  $0.045/hr × 2 × 730               = $65.70/month
NAT data processing (~100GB):        = $4.50/month
Data transfer out (100GB):           = $9.00/month
Networking estimate:                  ~$79/month

BASTION HOST
──────────────────────────────────────────────────────────────
EC2 t3.micro:
  $0.0104/hr × 730                  = $7.59/month
  (Stop it when not needed → $0)
Bastion estimate:                     ~$0-8/month

MONITORING
──────────────────────────────────────────────────────────────
CloudWatch custom metrics:            ~$3/month
CloudWatch Logs (10GB):              ~$5/month
CloudWatch Alarms (10):              ~$1/month
SNS (email alerts):                   ~$0/month
Monitoring estimate:                  ~$9/month

CERTIFICATES + DNS
──────────────────────────────────────────────────────────────
ACM Certificate:                      FREE
Route 53 Hosted Zone:                $0.50/month
Route 53 Queries:                    ~$0.50/month
DNS estimate:                         ~$1/month

──────────────────────────────────────────────────────────────
TOTAL MONTHLY ESTIMATE
──────────────────────────────────────────────────────────────
Compute:         $30-55
Load Balancer:   $22-36
Database:        $215
Networking:      $79
Bastion:         $8
Monitoring:      $9
DNS:             $1
──────────────────────────────────────────────────────────────
TOTAL:           ~$364-403/month

COST OPTIMIZATION OPTIONS:
  RDS → reserved instance (1yr):    saves ~40% = -$86/month
  EC2 → savings plan (1yr):         saves ~30% = -$10/month
  Bastion → stop when unused:       saves $8/month
  NAT GW → reduce data transfer:    varies
  Potential optimized total:         ~$260-280/month

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR COMPLETE CHECKLIST
BUILD PHASE:
□ VPC with 4 subnets across 2 AZs deployed
□ IGW + dual NAT GW (one per AZ) configured
□ All 4 security groups created with correct rules
□ RDS Multi-AZ PostgreSQL running in private subnet
□ DB password in Secrets Manager (not hardcoded anywhere)
□ EC2 Launch Template with IMDSv2 and userdata
□ ASG min:2 max:6 across both private subnets
□ ALB with HTTP→HTTPS redirect and valid certificate
□ Health check hitting /health returning 200
□ Bastion host in public subnet, SSH from your IP only
□ CloudWatch alarms for ALB, ASG, and RDS
□ SNS email alerts confirmed and working
□ Dashboard shows all 4 metric panels

SIMULATE PHASE:
□ Terminated one EC2 → watched ASG replace it
□ Confirmed ALB kept serving during instance replacement
□ Exhausted DB connections → observed 500 errors
□ Fixed with pg_terminate_backend
□ Terminated all 1a instances → watched 1b take over
□ Watched RDS Multi-AZ failover in RDS events
□ Confirmed 1b NAT GW kept private instances connected

DELIVERABLE:
□ Architecture diagram complete
□ All 3 failure scenarios documented with timeline
□ Monthly cost breakdown calculated
□ Optimization recommendations listed
□ Personal runbook written for each failure type
Four modules deep. You've now built, broken, and understood a real production system end to end. From the kernel that runs your EC2, to the network that moves your packets, to the IAM that controls who touches what, to the architecture that holds all of it together under load and failure.
This is what senior engineers know. This is what gets you hired, and what keeps you employed when things break.
Now go build it. Break everything. Fix it all.



# Cloud Cost Modeling 💰

## Your Senior DevSecOps Mentor Speaking

Every engineer can deploy infrastructure. The ones who get promoted, who get trusted with production, who become irreplaceable — they're the ones who understand **what it costs and why**, and can cut that bill without cutting reliability.

This module is where you stop being just a builder and start being an engineer who thinks in business terms. CFOs don't care about your elegant Kubernetes setup. They care about the number on the AWS bill.

You're going to learn to read that bill like a doctor reads an X-ray — seeing exactly what's wrong, where the waste is, and how to fix it without killing the patient.

Let's go.

---

# THE MASTER MENTAL MODEL FIRST

```
AWS BILLING TRUTH:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AWS charges you for four things fundamentally:

1. COMPUTE   → How long did a CPU run?
               EC2, Lambda, ECS, Fargate
               "You rented a machine — pay by the hour"

2. STORAGE   → How much data did you store?
               S3, EBS, RDS storage, EFS, Snapshots
               "You rented a hard drive — pay by the GB"

3. DATA TRANSFER → How much data moved?
               Out to internet, between AZs, between regions
               "You used the highway — pay per GB"
               This one SURPRISES everyone. It's sneaky.

4. MANAGED SERVICES → Fixed + variable overhead
               RDS, NAT GW, ALB, CloudFront
               "You rented a team to manage it — pay fixed + usage"

THE COST ENGINEERING MINDSET:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Don't optimize what you can't measure.
Don't cut what matters for reliability.
Don't sacrifice correctness for pennies.

The order of operations:
  1. MEASURE   → What are we actually spending? On what?
  2. UNDERSTAND → Why does each cost exist? Is it justified?
  3. RIGHTSIZE  → Same reliability, less money
  4. COMMIT     → Lock in savings with reservations
  5. AUTOMATE   → Make it impossible to waste money accidentally

A 30% cost reduction on a $400/month stack = $120/month = $1,440/year.
A 30% reduction on a $40,000/month stack = $12,000/month = $144,000/year.
Same skills. Radically different impact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# PART 1: AWS COST EXPLORER — Reading the Bill Like a Pro

## Setting Up Cost Explorer

```bash
# Enable Cost Explorer (one-time setup, takes 24hrs to populate)
aws ce update-cost-allocation-tags-status \
  --cost-allocation-tags-with-status \
    Status=Active,TagKey=Project \
    Status=Active,TagKey=Environment \
    Status=Active,TagKey=Team

# Enable Cost Explorer programmatically
aws ce get-cost-and-usage \
  --time-period Start=2024-01-01,End=2024-01-02 \
  --granularity DAILY \
  --metrics BlendedCost \
  --query 'ResultsByTime[0].Total.BlendedCost'
# If this works, Cost Explorer is enabled.
# If not, enable it in AWS Console → Billing → Cost Explorer first.
```

## The Queries That Actually Matter

```bash
# ============================================
# QUERY 1: TOTAL SPEND BY SERVICE (Last 30 days)
# This tells you WHERE your money is going
# ============================================

START_DATE=$(date -d '30 days ago' +%Y-%m-%d)
END_DATE=$(date +%Y-%m-%d)

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" "UsageQuantity" \
  --group-by Type=DIMENSION,Key=SERVICE \
  --query 'ResultsByTime[0].Groups[*].{
    Service: Keys[0],
    Cost: Metrics.UnblendedCost.Amount
  }' \
  --output table \
  | sort -t'|' -k3 -rn

# ============================================
# QUERY 2: COMPUTE BREAKDOWN — EC2 deep dive
# ============================================

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" "UsageQuantity" \
  --filter '{
    "Dimensions": {
      "Key": "SERVICE",
      "Values": ["Amazon Elastic Compute Cloud - Compute"]
    }
  }' \
  --group-by Type=DIMENSION,Key=INSTANCE_TYPE \
  --query 'ResultsByTime[0].Groups[*].{
    InstanceType: Keys[0],
    Cost: Metrics.UnblendedCost.Amount,
    Usage: Metrics.UsageQuantity.Amount
  }' \
  --output table

# ============================================
# QUERY 3: DATA TRANSFER COSTS — the sneaky one
# ============================================

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" "UsageQuantity" \
  --filter '{
    "Dimensions": {
      "Key": "SERVICE",
      "Values": ["AWS Data Transfer"]
    }
  }' \
  --group-by Type=DIMENSION,Key=USAGE_TYPE \
  --query 'ResultsByTime[0].Groups[*].{
    TransferType: Keys[0],
    Cost: Metrics.UnblendedCost.Amount,
    GB: Metrics.UsageQuantity.Amount
  }' \
  --output table

# ============================================
# QUERY 4: STORAGE BREAKDOWN — every byte
# ============================================

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" "UsageQuantity" \
  --filter '{
    "Or": [
      {"Dimensions": {"Key": "SERVICE", "Values": ["Amazon Simple Storage Service"]}},
      {"Dimensions": {"Key": "SERVICE", "Values": ["Amazon Elastic Block Store"]}},
      {"Dimensions": {"Key": "SERVICE", "Values": ["Amazon Relational Database Service"]}}
    ]
  }' \
  --group-by Type=DIMENSION,Key=SERVICE \
  --group-by Type=DIMENSION,Key=USAGE_TYPE \
  --output table

# ============================================
# QUERY 5: NAT GATEWAY COSTS — always shocking
# ============================================

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" "UsageQuantity" \
  --filter '{
    "Dimensions": {
      "Key": "SERVICE",
      "Values": ["Amazon Virtual Private Cloud"]
    }
  }' \
  --group-by Type=DIMENSION,Key=USAGE_TYPE \
  --query 'ResultsByTime[0].Groups[?contains(Keys[0], `NatGateway`)].{
    UsageType: Keys[0],
    Cost: Metrics.UnblendedCost.Amount,
    Usage: Metrics.UsageQuantity.Amount
  }' \
  --output table

# ============================================
# QUERY 6: DAILY TREND — are costs growing?
# ============================================

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity DAILY \
  --metrics "UnblendedCost" \
  --query 'ResultsByTime[*].{
    Date: TimePeriod.Start,
    Cost: Total.UnblendedCost.Amount
  }' \
  --output table

# COMPARE: This month vs Last month
LAST_MONTH_START=$(date -d '60 days ago' +%Y-%m-01)
LAST_MONTH_END=$(date -d '30 days ago' +%Y-%m-01)
THIS_MONTH_START=$(date +%Y-%m-01)

echo "Last Month:"
aws ce get-cost-and-usage \
  --time-period Start=$LAST_MONTH_START,End=$LAST_MONTH_END \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --query 'ResultsByTime[0].Total.UnblendedCost.Amount' \
  --output text

echo "This Month (so far):"
aws ce get-cost-and-usage \
  --time-period Start=$THIS_MONTH_START,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --query 'ResultsByTime[0].Total.UnblendedCost.Amount' \
  --output text

# ============================================
# QUERY 7: COST BY TAG — is each project paying its way?
# ============================================

aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --group-by Type=TAG,Key=Project \
  --query 'ResultsByTime[0].Groups[*].{
    Project: Keys[0],
    Cost: Metrics.UnblendedCost.Amount
  }' \
  --output table

# UNTAGGED RESOURCES = WASTE YOU CAN'T TRACK
# Find them:
aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --filter '{
    "Tags": {
      "Key": "Project",
      "MatchOptions": ["ABSENT"]
    }
  }' \
  --query 'ResultsByTime[0].Total.UnblendedCost.Amount' \
  --output text
# Whatever number shows up here is money you're blind to
```

---

## Reading Cost Explorer Visually — What to Look For

```
WHAT A HEALTHY COST GRAPH LOOKS LIKE:
──────────────────────────────────────────────
$   ▲
500 │         ████
400 │    ████ ████ ████
300 │    ████ ████ ████
200 │    ████ ████ ████
100 │    ████ ████ ████
    └────────────────────► time
         Jan  Feb  Mar

Flat or slowly growing = predictable = good.

WHAT A PROBLEM LOOKS LIKE:
──────────────────────────────────────────────
$   ▲
900 │              ████
600 │         ████ ████
300 │    ████ ████ ████
    └────────────────────► time
         Jan  Feb  Mar
                    ↑
              "What happened in March?"
              → Someone left a dev cluster running
              → Data transfer spike from a new feature
              → NAT GW processing huge backup job

WHAT THE COST BREAKDOWN SHOULD LOOK LIKE:
──────────────────────────────────────────────
Healthy distribution for a 3-tier web app:

RDS/Database:     35-45%  ← largest, expected
EC2/Compute:      20-30%  ← second largest
NAT Gateway:      10-15%  ← often shocking to people
Load Balancer:     5-10%
Storage (S3/EBS):  5-10%
Data Transfer:     3-8%
Everything else:   2-5%

RED FLAGS:
→ Data Transfer > 20%:  routing inefficiency, inter-AZ waste
→ NAT Gateway  > 20%:  S3/DynamoDB VPC endpoints missing
→ Untagged     > 10%:  tagging discipline broken
→ EC2 Compute  > 50%:  right-sizing opportunity
```

---

# PART 2: THE DETAILED COST BREAKDOWN

## Compute Costs — Every Layer

```bash
# ============================================
# EC2 RIGHTSIZING ANALYSIS
# ============================================

# Find underutilized instances (CPU < 10% average)
aws cloudwatch get-metric-statistics \
  --namespace AWS/EC2 \
  --metric-name CPUUtilization \
  --dimensions Name=InstanceId,Value=i-xxxxxxxxx \
  --start-time $(date -u -d '14 days ago' +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 86400 \
  --statistics Average Maximum \
  --query 'Datapoints[*].{Date:Timestamp,Avg:Average,Max:Maximum}' \
  --output table

# AWS Compute Optimizer — does the math for you
aws compute-optimizer get-ec2-instance-recommendations \
  --query 'instanceRecommendations[*].{
    Instance: instanceArn,
    Finding: finding,
    CurrentType: currentInstanceType,
    Recommended: recommendationOptions[0].instanceType,
    EstimatedSavings: recommendationOptions[0].estimatedMonthlySavings.value
  }' \
  --output table

# Check ALL instances and their types
aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query 'Reservations[*].Instances[*].{
    ID: InstanceId,
    Type: InstanceType,
    AZ: Placement.AvailabilityZone,
    Name: Tags[?Key==`Name`].Value|[0],
    LaunchTime: LaunchTime
  }' \
  --output table

# Find stopped instances (you still pay for EBS!)
aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=stopped" \
  --query 'Reservations[*].Instances[*].{
    ID: InstanceId,
    Type: InstanceType,
    Name: Tags[?Key==`Name`].Value|[0],
    StoppedSince: StateTransitionReason
  }' \
  --output table

# Find instances with no Name tag (orphaned, forgotten)
aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query 'Reservations[*].Instances[*].{
    ID: InstanceId,
    Type: InstanceType,
    Tags: Tags
  }' \
  --output json | \
  python3 -c "
import json,sys
data = json.load(sys.stdin)
for i in data:
    names = [t['Value'] for t in (i.get('Tags') or []) if t['Key']=='Name']
    if not names:
        print(f\"UNTAGGED: {i['ID']} ({i['Type']})\")
"
```

## Storage Costs — Finding Every Wasted Byte

```bash
# ============================================
# EBS VOLUMES — abandoned, oversized, wrong type
# ============================================

# Find unattached EBS volumes (paying for nothing)
aws ec2 describe-volumes \
  --filters "Name=status,Values=available" \
  --query 'Volumes[*].{
    VolumeId: VolumeId,
    Size: Size,
    Type: VolumeType,
    IOPS: Iops,
    Created: CreateTime,
    Cost_est: Size
  }' \
  --output table

# Calculate cost of unattached volumes
aws ec2 describe-volumes \
  --filters "Name=status,Values=available" \
  --query 'Volumes[*].Size' \
  --output text | \
  awk '{sum+=$1} END {
    printf "Unattached EBS: %d GB\n", sum
    printf "gp3 cost: $%.2f/month\n", sum * 0.08
    printf "gp2 cost: $%.2f/month\n", sum * 0.10
  }'

# Find old EBS snapshots (often forgotten)
aws ec2 describe-snapshots \
  --owner-ids self \
  --query 'Snapshots[*].{
    SnapshotId: SnapshotId,
    VolumeSize: VolumeSize,
    StartTime: StartTime,
    Description: Description
  }' \
  --output table | sort -k4

# Snapshots older than 90 days eating money
aws ec2 describe-snapshots \
  --owner-ids self \
  --query 'Snapshots[?StartTime<=`'$(date -d '90 days ago' +%Y-%m-%d)'`].{
    ID: SnapshotId,
    Size: VolumeSize,
    Age: StartTime
  }' \
  --output table

# EBS volume type analysis — gp2 vs gp3
# gp3 is ALWAYS cheaper than gp2 for same size
# gp3: $0.08/GB, gp2: $0.10/GB (20% cheaper automatically)
aws ec2 describe-volumes \
  --filters "Name=status,Values=in-use" \
            "Name=volume-type,Values=gp2" \
  --query 'Volumes[*].{
    ID: VolumeId,
    Size: Size,
    CurrentType: VolumeType,
    MonthlyCost_gp2: Size,
    ShouldBe: `gp3`
  }' \
  --output table

# Convert ALL gp2 to gp3 (zero downtime, no detach needed)
for vol in $(aws ec2 describe-volumes \
  --filters "Name=volume-type,Values=gp2" \
  --query 'Volumes[*].VolumeId' --output text); do
  echo "Converting $vol from gp2 → gp3"
  aws ec2 modify-volume \
    --volume-id $vol \
    --volume-type gp3
done

# ============================================
# S3 STORAGE — classes, lifecycle, orphaned buckets
# ============================================

# List all buckets with sizes and storage classes
aws s3api list-buckets --query 'Buckets[*].Name' --output text | \
  tr '\t' '\n' | while read bucket; do
    SIZE=$(aws s3 ls s3://$bucket --recursive --summarize 2>/dev/null \
      | grep "Total Size" | awk '{print $3}')
    COUNT=$(aws s3 ls s3://$bucket --recursive --summarize 2>/dev/null \
      | grep "Total Objects" | awk '{print $3}')
    echo "Bucket: $bucket | Objects: $COUNT | Size: $SIZE bytes"
  done

# Find buckets with no lifecycle rules (data accumulating forever)
aws s3api list-buckets --query 'Buckets[*].Name' --output text | \
  tr '\t' '\n' | while read bucket; do
    LIFECYCLE=$(aws s3api get-bucket-lifecycle-configuration \
      --bucket $bucket 2>/dev/null)
    if [ -z "$LIFECYCLE" ]; then
      echo "⚠️  NO LIFECYCLE: $bucket"
    fi
  done

# Find S3 objects in wrong storage class
# Standard = $0.023/GB — most expensive
# Standard-IA = $0.0125/GB — for infrequent access
# Glacier = $0.004/GB — for archival
# Glacier Deep Archive = $0.00099/GB — for cold archival

# Check storage class distribution in a bucket
aws s3api list-objects-v2 \
  --bucket your-bucket-name \
  --query 'Contents[*].{Key:Key,Size:Size,Class:StorageClass,LastModified:LastModified}' \
  --output table | head -50

# S3 Intelligent Tiering analysis
# For buckets with unpredictable access patterns
# AWS automatically moves objects to cheapest class
aws s3api put-bucket-intelligent-tiering-configuration \
  --bucket your-bucket-name \
  --id "EntireBucket" \
  --intelligent-tiering-configuration '{
    "Id": "EntireBucket",
    "Status": "Enabled",
    "Tierings": [
      {"Days": 90, "AccessTier": "ARCHIVE_ACCESS"},
      {"Days": 180, "AccessTier": "DEEP_ARCHIVE_ACCESS"}
    ]
  }'

# ============================================
# RDS STORAGE — snapshots, allocated vs used
# ============================================

# Check allocated vs actual storage per RDS instance
aws rds describe-db-instances \
  --query 'DBInstances[*].{
    ID: DBInstanceIdentifier,
    AllocatedGB: AllocatedStorage,
    Class: DBInstanceClass,
    Engine: Engine,
    MultiAZ: MultiAZ,
    StorageType: StorageType,
    AutoScaling: MaxAllocatedStorage
  }' \
  --output table

# Find automated snapshots (do you need 35 days retention?)
aws rds describe-db-snapshots \
  --snapshot-type automated \
  --query 'DBSnapshots[*].{
    ID: DBSnapshotIdentifier,
    Size: AllocatedStorage,
    Created: SnapshotCreateTime
  }' \
  --output table

# Manual snapshots — often forgotten after migrations
aws rds describe-db-snapshots \
  --snapshot-type manual \
  --query 'DBSnapshots[*].{
    ID: DBSnapshotIdentifier,
    Size: AllocatedStorage,
    Created: SnapshotCreateTime
  }' \
  --output table
```

## Data Transfer Costs — The Sneaky One

```bash
# ============================================
# DATA TRANSFER IS THE HIDDEN COST BOMB
#
# Pricing (us-east-1):
# Internet out:        $0.09/GB (first 10TB)
# Inter-AZ:           $0.01/GB each direction = $0.02/GB round trip
# Same AZ:            FREE
# To CloudFront:      FREE
# To S3 (same region): FREE with VPC endpoint
# To DynamoDB:        FREE with VPC endpoint
# Between regions:    $0.02/GB
# ============================================

# Find your data transfer usage from Cost Explorer
aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics "UnblendedCost" "UsageQuantity" \
  --filter '{
    "Dimensions": {
      "Key": "USAGE_TYPE_GROUP",
      "Values": ["EC2: Data Transfer - Internet (Out)"]
    }
  }' \
  --query 'ResultsByTime[0].{
    Cost: Total.UnblendedCost.Amount,
    GB: Total.UsageQuantity.Amount
  }'

# ============================================
# INTER-AZ DATA TRANSFER — biggest hidden cost
# ============================================

# Every time your app in AZ-A talks to your DB in AZ-B:
# → $0.01/GB out of AZ-A
# → $0.01/GB into AZ-B
# = $0.02/GB for EVERY round trip
#
# A busy app doing 1TB/day inter-AZ = $600/month
# JUST for moving data between your own AZs

# How to find inter-AZ traffic:
# 1. VPC Flow Logs → CloudWatch Logs Insights
aws logs start-query \
  --log-group-name "/aws/vpc/flowlogs" \
  --start-time $(date -d '24 hours ago' +%s) \
  --end-time $(date +%s) \
  --query-string '
    fields @timestamp, srcAddr, dstAddr, bytes, protocol
    | filter srcAddr like /^10\.0\.1/ and dstAddr like /^10\.0\.3/
    | stats sum(bytes) as totalBytes by srcAddr, dstAddr
    | sort totalBytes desc
    | limit 20
  '

# Check if VPC endpoints exist (if not, ALL S3/DynamoDB traffic
# goes through NAT gateway — you pay twice)
aws ec2 describe-vpc-endpoints \
  --filters "Name=vpc-id,Values=$VPC_ID" \
  --query 'VpcEndpoints[*].{
    Service: ServiceName,
    Type: VpcEndpointType,
    State: State
  }' \
  --output table

# If you see NO S3 endpoint — you're paying NAT GW for S3 traffic!
# Fix it:
aws ec2 create-vpc-endpoint \
  --vpc-id $VPC_ID \
  --service-name com.amazonaws.us-east-1.s3 \
  --route-table-ids $PRIV_RT \
  --vpc-endpoint-type Gateway
# Cost: FREE. Saves NAT GW processing on every S3 call.

aws ec2 create-vpc-endpoint \
  --vpc-id $VPC_ID \
  --service-name com.amazonaws.us-east-1.dynamodb \
  --route-table-ids $PRIV_RT \
  --vpc-endpoint-type Gateway
# Also FREE. Also saves NAT GW costs.

# Interface endpoints for other services (not free, but often worth it)
# Secrets Manager, SSM, ECR, CloudWatch all support interface endpoints
# Each costs ~$7.20/month but saves NAT GW processing at scale
```

NAT Gateway Cost Deep Dive
# ============================================
# NAT GATEWAY IS THE COST VILLAIN NOBODY WARNS YOU ABOUT
#
# NAT GW pricing:
# Hourly:      $0.045/hr × 730 = $32.85/month just existing
# Processing:  $0.045/GB of all traffic through it
#
# Two NAT GWs (HA setup): $65.70/month just in hours
# Plus whatever data flows through them
#
# A typical app pushing 1TB/month through NAT:
# Hours:      $65.70
# Processing: $45.00  ($0.045 × 1000GB)
# TOTAL:      $110.70/month in NAT alone
# ============================================

# How much data is flowing through your NAT GW?
aws cloudwatch get-metric-statistics \
  --namespace AWS/NATGateway \
  --metric-name BytesOutToDestination \
  --dimensions Name=NatGatewayId,Value=$NAT_GW \
  --start-time $(date -u -d '30 days ago' +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 2592000 \
  --statistics Sum \
  --query 'Datapoints[0].Sum'

# Convert to GB and calculate cost
NAT_BYTES=1073741824000  # example: 1TB
python3 -c "
bytes = $NAT_BYTES
gb = bytes / (1024**3)
processing = gb * 0.045
hourly = 0.045 * 730 * 2  # 2 NAT GWs
print(f'NAT GW data: {gb:.1f} GB')
print(f'Processing cost: \${processing:.2f}/month')
print(f'Hourly cost (2 NAT GWs): \${hourly:.2f}/month')
print(f'Total NAT GW: \${processing + hourly:.2f}/month')
"

# WHAT IS GOING THROUGH YOUR NAT GW?
# Enable VPC Flow Logs if not already done
aws ec2 create-flow-logs \
  --resource-type VPC \
  --resource-ids $VPC_ID \
  --traffic-type ALL \
  --log-destination-type cloud-watch-logs \
  --log-group-name "/aws/vpc/${PROJECT}/flowlogs" \
  --deliver-logs-permission-arn arn:aws:iam::${ACCOUNT_ID}:role/VPCFlowLogsRole

# Query: Top sources of NAT traffic (after logs populate)
aws logs start-query \
  --log-group-name "/aws/vpc/${PROJECT}/flowlogs" \
  --start-time $(date -d '24 hours ago' +%s) \
  --end-time $(date +%s) \
  --query-string '
    fields @timestamp, srcAddr, dstAddr, bytes, action
    | filter action = "ACCEPT"
    | stats sum(bytes) as totalBytes by srcAddr
    | sort totalBytes desc
    | limit 20
  '

# Common NAT GW cost culprits:
# 1. EC2 instances downloading from internet (apt-get, yum, pip)
#    FIX: Use S3-backed AMI baking, not runtime installs
#
# 2. App fetching S3 objects via public endpoint
#    FIX: VPC endpoint for S3 (FREE, saves all NAT processing)
#
# 3. CloudWatch agent sending metrics/logs
#    FIX: Interface VPC endpoint for CloudWatch
#
# 4. SSM agent communication
#    FIX: Interface VPC endpoint for SSM
#
# 5. ECR image pulls
#    FIX: Interface VPC endpoint for ECR
PART 3: THE SPREADSHEET — Your Cost Model
# ============================================
# GENERATE THE RAW DATA FOR YOUR SPREADSHEET
# ============================================

cat > /tmp/generate_cost_report.py << 'EOF'
#!/usr/bin/env python3
"""
Cloud Cost Model Generator
Pulls real data from AWS and formats it for analysis
"""

import boto3
import json
from datetime import datetime, timedelta
from decimal import Decimal

ce = boto3.client('ce', region_name='us-east-1')
ec2 = boto3.client('ec2', region_name='us-east-1')
rds = boto3.client('rds', region_name='us-east-1')
cw = boto3.client('cloudwatch', region_name='us-east-1')

end = datetime.now().strftime('%Y-%m-%d')
start = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')

def get_service_costs():
    """Get costs broken down by AWS service"""
    response = ce.get_cost_and_usage(
        TimePeriod={'Start': start, 'End': end},
        Granularity='MONTHLY',
        Metrics=['UnblendedCost'],
        GroupBy=[{'Type': 'DIMENSION', 'Key': 'SERVICE'}]
    )
    
    costs = {}
    for group in response['ResultsByTime'][0]['Groups']:
        service = group['Keys'][0]
        cost = float(group['Metrics']['UnblendedCost']['Amount'])
        if cost > 0.01:  # filter noise
            costs[service] = round(cost, 2)
    
    return dict(sorted(costs.items(), key=lambda x: x[1], reverse=True))

def get_ec2_instances():
    """Get all running EC2 instances with details"""
    response = ec2.describe_instances(
        Filters=[{'Name': 'instance-state-name', 'Values': ['running']}]
    )
    
    instances = []
    # Pricing map (on-demand, us-east-1, Linux)
    pricing = {
        't3.micro': 0.0104, 't3.small': 0.0208,
        't3.medium': 0.0416, 't3.large': 0.0832,
        'm5.large': 0.096, 'm5.xlarge': 0.192,
        'm5.2xlarge': 0.384, 'r5.large': 0.126,
        'c5.large': 0.085, 'c5.xlarge': 0.170,
    }
    
    for r in response['Reservations']:
        for i in r['Instances']:
            itype = i['InstanceType']
            hourly = pricing.get(itype, 0.10)
            name = next(
                (t['Value'] for t in i.get('Tags', []) if t['Key'] == 'Name'),
                'unnamed'
            )
            instances.append({
                'Name': name,
                'ID': i['InstanceId'],
                'Type': itype,
                'AZ': i['Placement']['AvailabilityZone'],
                'HourlyRate': hourly,
                'MonthlyEstimate': round(hourly * 730, 2)
            })
    
    return instances

def get_unattached_ebs():
    """Find volumes you're paying for but not using"""
    response = ec2.describe_volumes(
        Filters=[{'Name': 'status', 'Values': ['available']}]
    )
    
    volumes = []
    for v in response['Volumes']:
        size = v['Size']
        vtype = v['VolumeType']
        # Pricing per GB/month
        price_per_gb = {
            'gp3': 0.08, 'gp2': 0.10,
            'io1': 0.125, 'io2': 0.125,
            'st1': 0.045, 'sc1': 0.025
        }.get(vtype, 0.10)
        
        volumes.append({
            'VolumeId': v['VolumeId'],
            'Size_GB': size,
            'Type': vtype,
            'Created': v['CreateTime'].strftime('%Y-%m-%d'),
            'WastedCost': round(size * price_per_gb, 2)
        })
    
    return volumes

def get_rds_instances():
    """Get RDS instances with cost estimates"""
    response = rds.describe_db_instances()
    
    # RDS pricing (Multi-AZ, us-east-1)
    rds_pricing = {
        'db.t3.micro': 0.034, 'db.t3.small': 0.068,
        'db.t3.medium': 0.136, 'db.t3.large': 0.272,
        'db.r5.large': 0.48, 'db.r5.xlarge': 0.96,
        'db.m5.large': 0.35, 'db.m5.xlarge': 0.70
    }
    
    instances = []
    for db in response['DBInstances']:
        iclass = db['DBInstanceClass']
        hourly = rds_pricing.get(iclass, 0.20)
        multi_az_mult = 2 if db['MultiAZ'] else 1
        storage_cost = db['AllocatedStorage'] * 0.115  # gp2 Multi-AZ
        
        instances.append({
            'ID': db['DBInstanceIdentifier'],
            'Class': iclass,
            'Engine': f"{db['Engine']} {db['EngineVersion']}",
            'MultiAZ': db['MultiAZ'],
            'StorageGB': db['AllocatedStorage'],
            'ComputeCost': round(hourly * multi_az_mult * 730, 2),
            'StorageCost': round(storage_cost, 2),
            'TotalMonthly': round(hourly * multi_az_mult * 730 + storage_cost, 2)
        })
    
    return instances

# ============================================
# GENERATE REPORT
# ============================================

print("=" * 70)
print("CLOUD COST MODEL REPORT")
print(f"Period: {start} to {end}")
print("=" * 70)

print("\n📊 COST BY SERVICE (Actual from Cost Explorer):")
print("-" * 50)
service_costs = get_service_costs()
total = sum(service_costs.values())
for service, cost in service_costs.items():
    pct = (cost / total * 100) if total > 0 else 0
    bar = "█" * int(pct / 2)
    print(f"  {service[:35]:<35} ${cost:>8.2f}  {pct:>5.1f}% {bar}")
print(f"  {'TOTAL':<35} ${total:>8.2f}")

print("\n💻 EC2 INSTANCES (Running):")
print("-" * 70)
instances = get_ec2_instances()
ec2_total = sum(i['MonthlyEstimate'] for i in instances)
print(f"  {'Name':<25} {'Type':<15} {'AZ':<15} {'$/month':>10}")
print(f"  {'-'*25} {'-'*15} {'-'*15} {'-'*10}")
for i in instances:
    print(f"  {i['Name']:<25} {i['Type']:<15} {i['AZ']:<15} ${i['MonthlyEstimate']:>9.2f}")
print(f"  {'TOTAL':<55} ${ec2_total:>9.2f}")

print("\n🗄️  UNATTACHED EBS VOLUMES (Pure Waste):")
print("-" * 60)
volumes = get_unattached_ebs()
if volumes:
    wasted = sum(v['WastedCost'] for v in volumes)
    for v in volumes:
        print(f"  {v['VolumeId']} | {v['Size_GB']:>5}GB | {v['Type']} | "
              f"Created: {v['Created']} | Wasting: ${v['WastedCost']:.2f}/mo")
    print(f"  TOTAL WASTED: ${wasted:.2f}/month")
else:
    print("  ✅ No unattached volumes found")

print("\n🗃️  RDS INSTANCES:")
print("-" * 70)
rds_list = get_rds_instances()
rds_total = sum(r['TotalMonthly'] for r in rds_list)
for r in rds_list:
    print(f"  {r['ID']}")
    print(f"    Class: {r['Class']} | {r['Engine']} | "
          f"MultiAZ: {r['MultiAZ']} | Storage: {r['StorageGB']}GB")
    print(f"    Compute: ${r['ComputeCost']:.2f} + "
          f"Storage: ${r['StorageCost']:.2f} = "
          f"Total: ${r['TotalMonthly']:.2f}/month")
print(f"  TOTAL RDS: ${rds_total:.2f}/month")

print("\n" + "=" * 70)
print("SUMMARY")
print("=" * 70)
print(f"  Actual AWS spend (Cost Explorer): ${total:.2f}/month")
print(f"  Identified waste (unattached EBS): "
      f"${sum(v['WastedCost'] for v in volumes):.2f}/month")
print(f"  Estimated annual bill: ${total * 12:.2f}/year")

EOF

python3 /tmp/generate_cost_report.py
PART 4: THE SPREADSHEET — Build It Yourself


our cost model spreadsheet is built and ready. Here's what's inside across all 7 tabs:
📊 Dashboard — Executive view with 4 live KPI cards (current spend, optimized spend, monthly savings, annual savings), a full cost breakdown table by category with percentage of total and priority rating, and an annualized impact table showing Q1–Q4, full year, and 3-year TCO. Every number is a live formula pulling from the other sheets.
💻 Compute — Every EC2 instance inventoried with on-demand pricing. A purchase option comparison table shows exactly what you save going from on-demand to Compute Savings Plan (30%), Standard RI (40%), or Spot (70%) — with break-even timelines and risk ratings.
🗄 Storage — EBS volumes broken down with gp2→gp3 conversion savings highlighted. Unattached zombie volumes flagged in red as pure waste. S3 buckets mapped to correct storage classes (Standard → IA → Glacier → Deep Archive). RDS storage with snapshot retention costs.
🌐 Data Transfer — AWS pricing reference table built in. Every transfer type mapped: internet egress, inter-AZ, S3 without VPC endpoint, CloudWatch logs, cross-region. Columns show current cost, cost with VPC endpoint, cost with CloudFront, and best optimized cost.
🔀 NAT Gateway — Line-by-line breakdown of every dollar going through your NAT: hourly fees per AZ, data processing per service type. VPC endpoint ROI analysis showing which endpoints pay back in weeks vs months.
⚙️ Optimization — 12 ranked actions sorted by ROI score (savings ÷ current cost × effort multiplier). Each row has implementation steps, effort level (LOW/MEDIUM/HIGH), monthly savings, annual impact, and a TODO/PLAN/LATER status. The highest ROI items hit the top.
📉 Reduction Plan — 90-day phased roadmap in four columns: Phase 1 zero-risk wins (Week 1–2), Phase 2 commitment savings (Week 3–6), Phase 3 architecture changes (Week 7–12), and Ongoing governance. A savings waterfall table shows cumulative reduction milestone by milestone from Day 1 through Week 12, with running totals and a final achieved reduction percentage.
The blue cells across every sheet are your editable inputs — change instance counts, GB estimates, or pricing and every formula recalculates across all tabs including the Dashboard KPIs.



# Kubernetes — Operator Level 🚢

## Your Senior DevSecOps Mentor Speaking

You've built the foundation. Linux internals, networking, IAM, multi-tier architecture, cost modeling — all of that was building one thing: **the mental muscle to run production systems under pressure.**

Now we go to the tool that runs almost every serious production workload on the planet. Kubernetes. Not the tutorial version. Not `kubectl get pods` and call it a day. **Operator level** — the level where you understand what the control plane is actually doing, why things break, how to debug them without panicking, and how to build automation that runs itself.

This is the module that separates people who "know Kubernetes" from people who **operate Kubernetes.**

Let's wire your brain completely.

---

# THE MASTER MENTAL MODEL FIRST

```
Before one command — get this picture burned in.

Think of Kubernetes like running a CITY HOSPITAL.

CONTROL PLANE = Hospital Administration
  → Makes all decisions
  → Keeps records of every patient (desired state)
  → Assigns doctors to patients
  → Never touches patients directly

WORKER NODES = Hospital Floors/Wards
  → Where actual patients (containers) live
  → Doctors (kubelet) on each floor do the actual work
  → Floor nurse (kube-proxy) handles communication routing

PODS = Patient Rooms
  → One or more patients (containers) share a room
  → Room has its own address (IP)
  → Room is temporary — patient moves, room gets reassigned

DEPLOYMENTS = Doctor's Orders
  → "Keep 3 patients in ICU at all times"
  → If one dies, immediately admit a replacement
  → If building catches fire, move patients to other floors

SERVICES = The Hospital Switchboard
  → You call "I need the ICU" — switchboard finds which room
  → You never need to know the room number directly

etcd = The Hospital's Master Records System
  → SINGLE SOURCE OF TRUTH
  → Every decision, every state, every assignment written here
  → If etcd dies and you have no backup — hospital is gone

THE GOLDEN RULE OF KUBERNETES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You tell Kubernetes WHAT you want (desired state).
Kubernetes figures out HOW to get there.
Controllers constantly compare desired vs actual.
Gap found → controllers act to close the gap.
This loop NEVER stops. It runs every few seconds. Forever.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# PART 1: THE CONTROL PLANE — "The Brain"

## Every Component, What It Does, Why It Matters

```
┌─────────────────────────────────────────────────────────────┐
│                    CONTROL PLANE                            │
│                                                             │
│  ┌──────────────┐   ┌──────────────┐   ┌───────────────┐  │
│  │  API Server  │   │  Scheduler   │   │   Controller  │  │
│  │  (kube-      │   │  (kube-      │   │   Manager     │  │
│  │  apiserver)  │   │  scheduler)  │   │   (kube-cm)   │  │
│  │              │   │              │   │               │  │
│  │  The GATE    │   │  The PLACER  │   │  The WATCHER  │  │
│  │  Everything  │   │  Decides     │   │  Runs all     │  │
│  │  goes        │   │  which node  │   │  control      │  │
│  │  through it  │   │  gets a pod  │   │  loops        │  │
│  └──────┬───────┘   └──────────────┘   └───────────────┘  │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────┐   ┌──────────────────────────────────┐   │
│  │    etcd      │   │         Cloud Controller          │   │
│  │              │   │         Manager (CCM)             │   │
│  │  The MEMORY  │   │                                   │   │
│  │  Distributed │   │  Talks to AWS/GCP/Azure           │   │
│  │  key-value   │   │  Creates LBs, volumes, IPs        │   │
│  │  store       │   │  on your behalf                   │   │
│  │  EVERYTHING  │   └──────────────────────────────────┘   │
│  │  is here     │                                           │
│  └──────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
```

## API Server — The Gate That Never Sleeps

```
EVERY operation in Kubernetes goes through the API server.
kubectl, controllers, kubelets — ALL of them talk to the API server.
Nobody talks to etcd directly except the API server.

What happens when you run: kubectl apply -f deployment.yaml

STEP 1: kubectl sends HTTP request to API server
        PUT /apis/apps/v1/namespaces/default/deployments/myapp

STEP 2: API server runs ADMISSION CONTROLLERS
        (security checks, defaults, mutations)
        → Is this request authenticated? (AuthN)
        → Is this request authorized? (AuthZ / RBAC)
        → Does it pass validation?
        → Does a MutatingWebhook want to modify it?
        → Does a ValidatingWebhook want to reject it?

STEP 3: API server writes to etcd
        "Deployment myapp desired state: 3 replicas of nginx:1.24"

STEP 4: API server responds 200 OK to kubectl

STEP 5: Deployment Controller WATCHING etcd sees new desired state
        "I need to create 3 ReplicaSets"

STEP 6: ReplicaSet Controller sees new RS, creates 3 Pod objects in etcd

STEP 7: Scheduler watches for UNSCHEDULED pods
        Picks a node for each pod
        Writes node assignment to etcd

STEP 8: kubelet on chosen node watches etcd
        Sees a pod assigned to it
        Pulls image, starts container
        Reports status back to API server

STEP 9: Eventually: pod is Running.
        State matches desired. Control loop satisfied.

ALL OF THIS from one kubectl apply.
ALL of it driven by watch loops and etcd.
```

## etcd — The Single Source of Truth

```
etcd is a distributed key-value store.
Consistent. Highly available. Strongly consistent.

Everything in Kubernetes is stored as keys in etcd:

/registry/pods/default/myapp-7d9f8b-xyz
/registry/deployments/default/myapp
/registry/services/default/myapp-svc
/registry/secrets/default/db-password
/registry/configmaps/default/app-config

WHAT THIS MEANS IN PRODUCTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
If etcd loses quorum → cluster is READ-ONLY or DEAD
If etcd data is corrupted → cluster state is corrupted
If etcd is not backed up → a failure = total loss

ETCD QUORUM:
3 nodes → can lose 1 (quorum = 2)
5 nodes → can lose 2 (quorum = 3)
Always run ODD numbers. Never 2, never 4.

BACKUP ETCD. ALWAYS. AUTOMATE IT. TEST THE RESTORE.
# Take a snapshot
ETCDCTL_API=3 etcdctl snapshot save /backup/etcd-$(date +%Y%m%d).db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/etcd/ca.crt \
  --cert=/etc/etcd/server.crt \
  --key=/etc/etcd/server.key

# Verify snapshot
ETCDCTL_API=3 etcdctl snapshot status /backup/etcd-20240101.db
```

---

# PART 2: WORKER NODES — "The Floors"

## Every Agent on Every Node

```
┌─────────────────────────────────────────────────────────────┐
│                      WORKER NODE                            │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  kubelet  (The Node's Brain)                         │  │
│  │  → Watches API server for pods assigned to this node │  │
│  │  → Starts/stops containers via CRI                   │  │
│  │  → Reports node & pod health back to API server      │  │
│  │  → Runs liveness/readiness probes                    │  │
│  │  → Manages volumes, secrets, configmaps for pods     │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  kube-proxy  (The Network Plumber)                   │  │
│  │  → Maintains iptables/ipvs rules on the node         │  │
│  │  → Makes Service IPs work (ClusterIP → pod IPs)      │  │
│  │  → Watches Services and Endpoints in API server      │  │
│  │  → Every time a pod changes → rules update           │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Container Runtime  (containerd / CRI-O)             │  │
│  │  → Actually pulls images and runs containers         │  │
│  │  → kubelet talks to it via CRI (Container Runtime    │  │
│  │    Interface)                                        │  │
│  │  → Docker is NOT used anymore (deprecated in k8s)    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌────────────────────────────────────────────────────┐    │
│  │  CNI Plugin (Calico / Cilium / Flannel / Weave)    │    │
│  │  → Gives every pod a unique IP address             │    │
│  │  → Handles pod-to-pod networking across nodes      │    │
│  │  → Enforces NetworkPolicies                        │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

# PART 3: THE CORE OBJECTS — Know Every One Cold

## Pods — The Smallest Unit

```yaml
# THE ANATOMY OF A POD
# Never deploy a naked pod in production — always use a controller
# But you need to understand what a pod IS

apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  namespace: production
  labels:
    app: myapp          # Services use these to find pods
    version: "1.24"     # Used by selectors everywhere
  annotations:
    prometheus.io/scrape: "true"   # Prometheus finds this pod
    prometheus.io/port: "9090"
spec:
  # Which node this pod can run on
  nodeSelector:
    node-type: application

  # Stronger node constraints
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: topology.kubernetes.io/zone
            operator: In
            values: ["us-east-1a", "us-east-1b"]

    # Spread across nodes — don't put all replicas on one node
    podAntiAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        podAffinityTerm:
          labelSelector:
            matchLabels:
              app: myapp
          topologyKey: kubernetes.io/hostname

  # Security at the pod level
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
    seccompProfile:
      type: RuntimeDefault

  # Graceful shutdown window
  terminationGracePeriodSeconds: 30

  containers:
  - name: app
    image: myapp:1.24.0    # NEVER use :latest in production
    imagePullPolicy: IfNotPresent

    ports:
    - name: http
      containerPort: 8080
      protocol: TCP
    - name: metrics
      containerPort: 9090

    # Resource requests = what scheduler uses to place pod
    # Resource limits  = hard ceiling enforced by cgroups
    resources:
      requests:
        memory: "128Mi"    # Scheduler: node must have 128Mi free
        cpu: "100m"        # 100 millicores = 0.1 CPU core
      limits:
        memory: "256Mi"    # OOM killed if exceeded
        cpu: "500m"        # Throttled if exceeded (NOT killed)

    # LIVENESS: Is the container still alive?
    # If this fails → container is RESTARTED
    livenessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 10   # Wait 10s before first check
      periodSeconds: 10         # Check every 10s
      failureThreshold: 3       # Restart after 3 failures
      timeoutSeconds: 5

    # READINESS: Is the container ready to receive traffic?
    # If this fails → pod REMOVED from Service endpoints
    # Container NOT restarted — just taken out of rotation
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
      failureThreshold: 3

    # STARTUP: Is the container still starting up?
    # Protects slow-starting apps during initial boot
    # Disables liveness until this passes
    startupProbe:
      httpGet:
        path: /healthz
        port: 8080
      failureThreshold: 30    # 30 × 10s = 5 minutes to start
      periodSeconds: 10

    # Security at the container level (more specific than pod)
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true   # Container can't write to /
      capabilities:
        drop: ["ALL"]                # Drop ALL Linux capabilities
        add: ["NET_BIND_SERVICE"]    # Add back only what's needed

    # Environment variables
    env:
    - name: APP_ENV
      value: "production"
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:          # Pull from Secret, not hardcoded
          name: db-credentials
          key: password
    - name: MY_POD_NAME
      valueFrom:
        fieldRef:              # Downward API — pod's own metadata
          fieldPath: metadata.name
    - name: MY_NODE_NAME
      valueFrom:
        fieldRef:
          fieldPath: spec.nodeName

    envFrom:
    - configMapRef:
        name: app-config       # Load all keys from ConfigMap as env

    # Volume mounts
    volumeMounts:
    - name: tmp-dir
      mountPath: /tmp          # Writable temp dir (readOnlyRootFilesystem)
    - name: config
      mountPath: /etc/app/config.yaml
      subPath: config.yaml     # Mount single file, not whole volume
    - name: secrets
      mountPath: /etc/app/secrets
      readOnly: true

  volumes:
  - name: tmp-dir
    emptyDir: {}               # Lives and dies with the pod
  - name: config
    configMap:
      name: app-config
  - name: secrets
    secret:
      secretName: db-credentials
      defaultMode: 0400        # Read-only by owner only
```

---

## Deployments — The Self-Healing Controller

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: production
  labels:
    app: myapp
spec:
  replicas: 3

  # Which pods this Deployment manages
  selector:
    matchLabels:
      app: myapp     # MUST match template.metadata.labels

  # Rolling update strategy — zero downtime deployments
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1          # Create 1 extra pod during update
      maxUnavailable: 0    # Never take a pod down before new one is up
      # With replicas:3, maxSurge:1, maxUnavailable:0:
      # → Creates pod 4 (new version)
      # → Waits for pod 4 to be Ready
      # → Terminates pod 1 (old version)
      # → Creates pod 5 (new version)
      # → Waits for pod 5 to be Ready
      # → Terminates pod 2 (old version)
      # → ...and so on. Always 3 running. Zero downtime.

  # How long to wait for pod to be ready before marking rollout failed
  progressDeadlineSeconds: 600

  # Keep last 10 ReplicaSets for rollback
  revisionHistoryLimit: 10

  template:
    metadata:
      labels:
        app: myapp        # MUST match spec.selector.matchLabels
    spec:
      # ... (pod spec from above)
```

```bash
# ── DEPLOYMENT COMMANDS YOU USE DAILY ──

# Deploy or update
kubectl apply -f deployment.yaml

# Watch rollout progress
kubectl rollout status deployment/myapp -n production

# See rollout history
kubectl rollout history deployment/myapp -n production

# See what changed in revision 3
kubectl rollout history deployment/myapp -n production --revision=3

# ROLLBACK — most important command in production
kubectl rollout undo deployment/myapp -n production

# Rollback to specific revision
kubectl rollout undo deployment/myapp -n production --to-revision=2

# Scale manually
kubectl scale deployment myapp --replicas=5 -n production

# Pause a rollout (freeze mid-rollout to investigate)
kubectl rollout pause deployment/myapp -n production

# Resume it
kubectl rollout resume deployment/myapp -n production

# Force restart all pods (new image same tag, config change)
kubectl rollout restart deployment/myapp -n production
```

---

## Services — The Switchboard

```yaml
# ── SERVICE TYPES — know all four ──

# TYPE 1: ClusterIP (default)
# Internal only — pods talk to each other
# Never reachable from outside the cluster
apiVersion: v1
kind: Service
metadata:
  name: myapp-svc
  namespace: production
spec:
  type: ClusterIP
  selector:
    app: myapp          # Routes to pods with this label
  ports:
  - name: http
    port: 80            # What clients connect to
    targetPort: 8080    # What the pod is actually listening on
    protocol: TCP

---
# TYPE 2: NodePort
# Exposes on every node's IP at a static port
# Not for production — use ALB/Ingress instead
spec:
  type: NodePort
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30080     # Range: 30000-32767

---
# TYPE 3: LoadBalancer
# Creates an AWS NLB/ALB (or cloud equivalent)
# Each service gets its own load balancer — gets expensive fast
spec:
  type: LoadBalancer
  ports:
  - port: 443
    targetPort: 8080

---
# TYPE 4: ExternalName
# DNS alias — maps service name to external DNS
# Useful for pointing to external databases
spec:
  type: ExternalName
  externalName: my-rds.xxxx.us-east-1.rds.amazonaws.com

---
# HEADLESS SERVICE — no ClusterIP, direct DNS to pod IPs
# Used for StatefulSets (databases, Kafka, etc.)
spec:
  clusterIP: None       # This makes it headless
  selector:
    app: postgres
```

## Ingress — The Front Door

```yaml
# Ingress = Layer 7 routing rules
# Works WITH an Ingress Controller (nginx, ALB, Traefik)
# The Ingress object is just RULES — the controller reads them

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  namespace: production
  annotations:
    # ALB Ingress Controller annotations
    kubernetes.io/ingress.class: "alb"
    alb.ingress.kubernetes.io/scheme: "internet-facing"
    alb.ingress.kubernetes.io/target-type: "ip"
    alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:..."
    alb.ingress.kubernetes.io/ssl-redirect: "443"
    alb.ingress.kubernetes.io/healthcheck-path: "/health"

    # nginx Ingress Controller annotations
    # nginx.ingress.kubernetes.io/rewrite-target: /
    # nginx.ingress.kubernetes.io/ssl-redirect: "true"
    # nginx.ingress.kubernetes.io/proxy-body-size: "10m"

spec:
  ingressClassName: alb
  rules:
  - host: api.myapp.com
    http:
      paths:
      - path: /users
        pathType: Prefix
        backend:
          service:
            name: users-svc
            port:
              number: 80
      - path: /payments
        pathType: Prefix
        backend:
          service:
            name: payments-svc
            port:
              number: 80
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-svc
            port:
              number: 80
  tls:
  - hosts:
    - api.myapp.com
    secretName: myapp-tls-cert
```

---

# PART 4: CONFIGURATION & SECRETS

## ConfigMaps — Non-Sensitive Config

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: production
data:
  # Key-value pairs
  APP_ENV: "production"
  LOG_LEVEL: "info"
  MAX_CONNECTIONS: "100"

  # Whole files as values
  config.yaml: |
    server:
      port: 8080
      timeout: 30s
    database:
      host: postgres-svc
      port: 5432
      name: appdb
    cache:
      host: redis-svc
      port: 6379

  nginx.conf: |
    server {
      listen 80;
      location /health {
        return 200 'ok';
      }
    }
```

Secrets — Sensitive Config
# Kubernetes Secrets are base64 encoded — NOT encrypted by default
# base64 is NOT security. Anyone who can read the Secret can decode it.
# Enable etcd encryption at rest for real security.
# Better yet: use External Secrets Operator + AWS Secrets Manager

apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
  namespace: production
type: Opaque
data:
  # echo -n 'mypassword' | base64
  username: ZGJhZG1pbg==
  password: bXlwYXNzd29yZA==

---
# THE RIGHT WAY: External Secrets Operator
# Syncs secrets from AWS Secrets Manager INTO Kubernetes Secrets
# Your app still uses k8s Secrets — but source of truth is AWS

apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: db-credentials
  namespace: production
spec:
  refreshInterval: 1h          # Re-sync every hour
  secretStoreRef:
    name: aws-secrets-manager  # Points to your SecretStore
    kind: SecretStore
  target:
    name: db-credentials       # Creates this k8s Secret
    creationPolicy: Owner
  data:
  - secretKey: password        # Key in k8s Secret
    remoteRef:
      key: prod/myapp/database # Path in AWS Secrets Manager
      property: password       # JSON key within the secret
PART 5: RBAC — Security Inside the Cluster
RBAC MODEL:
Who (Subject) can do What (Verbs) on Which resources?

Subject = ServiceAccount / User / Group
Role    = List of permissions (namespace-scoped)
ClusterRole = List of permissions (cluster-wide)
RoleBinding = Binds Subject to Role
ClusterRoleBinding = Binds Subject to ClusterRole
# Step 1: Create a ServiceAccount for your app
apiVersion: v1
kind: ServiceAccount
metadata:
  name: myapp-sa
  namespace: production
  annotations:
    # IRSA — link to AWS IAM Role (EKS-specific)
    eks.amazonaws.com/role-arn: arn:aws:iam::111111:role/myapp-role

---
# Step 2: Define what it can do (Role = namespace-scoped)
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: myapp-role
  namespace: production
rules:
- apiGroups: [""]              # "" = core API group
  resources: ["configmaps"]
  verbs: ["get", "list", "watch"]
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get"]               # Read-only on secrets
  resourceNames: ["db-credentials"]  # Only THIS secret
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "watch", "update", "patch"]

---
# Step 3: Bind ServiceAccount to Role
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: myapp-rolebinding
  namespace: production
subjects:
- kind: ServiceAccount
  name: myapp-sa
  namespace: production
roleRef:
  kind: Role
  name: myapp-role
  apiGroup: rbac.authorization.k8s.io
# Test what a ServiceAccount can do
kubectl auth can-i get secrets \
  --namespace production \
  --as system:serviceaccount:production:myapp-sa

kubectl auth can-i delete pods \
  --namespace production \
  --as system:serviceaccount:production:myapp-sa

# List all permissions for a ServiceAccount
kubectl auth can-i --list \
  --namespace production \
  --as system:serviceaccount:production:myapp-sa

# Who can do what on secrets?
kubectl get rolebindings,clusterrolebindings -A \
  -o json | kubectl-who-can get secrets
PART 6: RESOURCE MANAGEMENT — The Stuff That Kills Production
Requests vs Limits — The Most Misunderstood Thing in K8s
REQUESTS = What the SCHEDULER uses
"This pod needs at least 100m CPU and 128Mi RAM"
Node must have this much FREE to schedule the pod.
If no node has enough → pod stays Pending.

LIMITS = What the KERNEL enforces
"This pod can NEVER exceed 500m CPU and 256Mi RAM"
CPU limit → THROTTLED (slowed down, not killed)
Memory limit → OOM KILLED (container dies, pod restarts)

THE GOLDEN RATIO: limits = 2× requests (general rule)
For memory: limits = requests (memory can't be throttled)

QUALITY OF SERVICE CLASSES:
──────────────────────────────────────────────────────────
Guaranteed:  requests == limits for ALL containers
             → Highest priority. Last to be evicted.
             → Set this for databases, critical services.

Burstable:   requests < limits (or only requests set)
             → Middle priority.
             → For most web services.

BestEffort:  NO requests AND NO limits set
             → Lowest priority. FIRST to be evicted.
             → NEVER use this in production. Ever.
──────────────────────────────────────────────────────────

CPU THROTTLING REALITY:
When a pod hits its CPU limit, it doesn't die.
But it gets PAUSED for microseconds every millisecond.
This creates LATENCY SPIKES.
p99 latency goes up. Users feel it. Alarms fire.
You investigate and see CPU isn't "high" but it IS throttled.
Check: kubectl top pods (shows usage, not throttling)
Real check: container_cpu_throttled_seconds_total in Prometheus
LimitRange — Default Limits for Namespaces
# Prevents BestEffort pods in a namespace
# Sets defaults so nobody forgets to set requests/limits
apiVersion: v1
kind: LimitRange
metadata:
  name: production-limits
  namespace: production
spec:
  limits:
  - type: Container
    default:              # Applied if container sets no limits
      cpu: "500m"
      memory: "256Mi"
    defaultRequest:       # Applied if container sets no requests
      cpu: "100m"
      memory: "128Mi"
    max:                  # Nobody can exceed this
      cpu: "4"
      memory: "8Gi"
    min:                  # Nobody can go below this
      cpu: "50m"
      memory: "64Mi"
  - type: Pod
    max:
      cpu: "8"
      memory: "16Gi"
ResourceQuota — Namespace Budget
# Total budget for the entire namespace
# Team A gets this much. Team B gets that much.
apiVersion: v1
kind: ResourceQuota
metadata:
  name: production-quota
  namespace: production
spec:
  hard:
    requests.cpu: "20"         # Total CPU requests in namespace
    requests.memory: "40Gi"    # Total memory requests
    limits.cpu: "40"
    limits.memory: "80Gi"
    pods: "50"                 # Max pods in namespace
    services: "20"
    secrets: "50"
    configmaps: "50"
    persistentvolumeclaims: "20"
    services.loadbalancers: "2"  # Max LB services (expensive!)
PART 7: STATEFULSETS — For Databases and Stateful Apps
Deployments = Cattle (any pod is interchangeable)
StatefulSets = Pets (each pod has identity and matters)

StatefulSet gives each pod:
→ Stable, predictable name: postgres-0, postgres-1, postgres-2
→ Stable network identity: postgres-0.postgres-svc.prod.svc.cluster.local
→ Stable storage: each pod gets its OWN PersistentVolume

Starts in order: 0 → 1 → 2
Stops in reverse: 2 → 1 → 0
Never starts next until previous is Ready.
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: production
spec:
  serviceName: postgres-svc    # Must match headless service name
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15.4
        ports:
        - containerPort: 5432
          name: postgres
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: password
        - name: PGDATA
          value: /data/pgdata
        volumeMounts:
        - name: postgres-data
          mountPath: /data
        resources:
          requests:
            memory: "1Gi"
            cpu: "500m"
          limits:
            memory: "1Gi"   # Memory limit = request for Guaranteed QoS
            cpu: "2"
  # Each pod gets its own PVC — NOT shared
  volumeClaimTemplates:
  - metadata:
      name: postgres-data
    spec:
      accessModes: ["ReadWriteOnce"]
      storageClassName: gp3
      resources:
        requests:
          storage: 50Gi

---
# Headless service for StatefulSet
# DNS: postgres-0.postgres-svc.production.svc.cluster.local
apiVersion: v1
kind: Service
metadata:
  name: postgres-svc
  namespace: production
spec:
  clusterIP: None       # Headless — required for StatefulSet
  selector:
    app: postgres
  ports:
  - port: 5432
    name: postgres
PART 8: HORIZONTAL POD AUTOSCALER
# HPA watches metrics and scales replicas automatically
# Requires metrics-server installed in cluster

apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 20
  metrics:
  # Scale on CPU (most common)
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60    # Scale when avg CPU > 60%

  # Scale on memory
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80

  # Scale on custom metric from Prometheus
  # (requires Prometheus Adapter)
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "1000"      # 1000 RPS per pod

  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60    # Wait 60s before scaling up again
      policies:
      - type: Pods
        value: 2                        # Add max 2 pods at a time
        periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300   # Wait 5 min before scaling down
      policies:
      - type: Percent
        value: 10                       # Remove max 10% at a time
        periodSeconds: 60
PART 9: NETWORK POLICIES — Zero Trust Inside the Cluster
By default: every pod can talk to every other pod.
In production: NEVER acceptable.
NetworkPolicy = firewall rules inside the cluster.

Default deny all → then explicitly allow what's needed.
# STEP 1: Default deny all ingress and egress in namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: production
spec:
  podSelector: {}      # Applies to ALL pods in namespace
  policyTypes:
  - Ingress
  - Egress

---
# STEP 2: Allow specific traffic
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-app-ingress
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Ingress
  - Egress
  ingress:
  # Allow from ingress controller only
  - from:
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
      podSelector:
        matchLabels:
          app: ingress-nginx
    ports:
    - protocol: TCP
      port: 8080
  # Allow from monitoring namespace (Prometheus scraping)
  - from:
    - namespaceSelector:
        matchLabels:
          name: monitoring
    ports:
    - protocol: TCP
      port: 9090

  egress:
  # Allow to database
  - to:
    - podSelector:
        matchLabels:
          app: postgres
    ports:
    - protocol: TCP
      port: 5432
  # Allow DNS (always needed)
  - to:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - protocol: UDP
      port: 53
    - protocol: TCP
      port: 53
  # Allow to AWS services (Secrets Manager, etc.)
  - to:
    - ipBlock:
        cidr: 0.0.0.0/0
        except:
        - 10.0.0.0/8      # Except internal cluster CIDR
    ports:
    - protocol: TCP
      port: 443
PART 10: THE KUBECTL TOOLKIT — Commands That Pay Your Salary
# ════════════════════════════════════════════════
# CONTEXT & CLUSTER NAVIGATION
# ════════════════════════════════════════════════

# See all clusters you're configured for
kubectl config get-contexts

# Switch cluster
kubectl config use-context prod-cluster

# Set default namespace (stop typing -n production every time)
kubectl config set-context --current --namespace=production

# ════════════════════════════════════════════════
# GET — See what exists
# ════════════════════════════════════════════════

# The -o wide shows extra columns (node, IP)
kubectl get pods -n production -o wide

# Watch in real-time
kubectl get pods -n production -w

# Get with labels shown
kubectl get pods -n production --show-labels

# Filter by label
kubectl get pods -n production -l app=myapp,version=1.24

# Get ALL resource types in a namespace
kubectl get all -n production

# Get events sorted by time (your first stop in any incident)
kubectl get events -n production --sort-by='.lastTimestamp'

# Get events for a specific pod
kubectl get events -n production \
  --field-selector involvedObject.name=myapp-7d9f8b-xyz

# ════════════════════════════════════════════════
# DESCRIBE — The full story
# ════════════════════════════════════════════════

# Most useful command when a pod won't start
kubectl describe pod myapp-7d9f8b-xyz -n production
# Look for:
# → Events section at the bottom (what happened)
# → Conditions (Ready, Initialized, ContainersReady)
# → Last State (why did it die before?)
# → Limits/Requests (are resources set?)

kubectl describe node ip-10-0-1-100.ec2.internal
# Look for:
# → Conditions (MemoryPressure, DiskPressure, PIDPressure)
# → Allocatable vs Capacity (how much is available)
# → Non-terminated Pods (what's running on this node)
# → Events (has kubelet had problems?)

# ════════════════════════════════════════════════
# LOGS — What the app is saying
# ════════════════════════════════════════════════

# Basic logs
kubectl logs myapp-7d9f8b-xyz -n production

# Follow (like tail -f)
kubectl logs myapp-7d9f8b-xyz -n production -f

# Previous container (the one that crashed)
kubectl logs myapp-7d9f8b-xyz -n production -p

# Specific container in a multi-container pod
kubectl logs myapp-7d9f8b-xyz -n production -c sidecar

# All pods in a deployment at once
kubectl logs -n production -l app=myapp --all-containers=true

# Last 100 lines
kubectl logs myapp-7d9f8b-xyz -n production --tail=100

# Logs since X time ago
kubectl logs myapp-7d9f8b-xyz -n production --since=1h

# ════════════════════════════════════════════════
# EXEC — Get inside
# ════════════════════════════════════════════════

# Shell into a running pod
kubectl exec -it myapp-7d9f8b-xyz -n production -- /bin/bash
kubectl exec -it myapp-7d9f8b-xyz -n production -- /bin/sh

# Run a single command
kubectl exec myapp-7d9f8b-xyz -n production -- curl localhost:8080/health

# Copy files to/from pod
kubectl cp myapp-7d9f8b-xyz:/app/logs/app.log /tmp/app.log
kubectl cp /tmp/config.yaml myapp-7d9f8b-xyz:/etc/app/

# ════════════════════════════════════════════════
# DEBUG — When exec doesn't work (distroless images)
# ════════════════════════════════════════════════

# Attach an ephemeral debug container (k8s 1.23+)
kubectl debug -it myapp-7d9f8b-xyz \
  --image=busybox \
  --target=app \
  -n production

# Debug a node directly
kubectl debug node/ip-10-0-1-100.ec2.internal \
  -it --image=ubuntu

# ════════════════════════════════════════════════
# RESOURCE USAGE — Who is eating what
# ════════════════════════════════════════════════

# Pod resource usage (requires metrics-server)
kubectl top pods -n production
kubectl top pods -n production --sort-by=memory
kubectl top pods -n production --sort-by=cpu

# Node resource usage
kubectl top nodes

# ════════════════════════════════════════════════
# PATCH — Quick fixes without editing YAML
# ════════════════════════════════════════════════

# Scale without editing YAML
kubectl patch deployment myapp -n production \
  -p '{"spec":{"replicas":5}}'

# Update image
kubectl patch deployment myapp -n production \
  --type=json \
  -p='[{"op":"replace","path":"/spec/template/spec/containers/0/image","value":"myapp:1.25.0"}]'

# Remove a taint from a node
kubectl taint nodes ip-10-0-1-100.ec2.internal \
  node.kubernetes.io/unreachable:NoSchedule-

# ════════════════════════════════════════════════
# ADVANCED — Power user moves
# ════════════════════════════════════════════════

# Get all pods NOT in Running state across ALL namespaces
kubectl get pods -A \
  --field-selector 'status.phase!=Running' \
  | grep -v Completed

# Find pods with high restart counts
kubectl get pods -A \
  -o custom-columns='NAME:.metadata.name,RESTARTS:.status.containerStatuses[0].restartCount,NAMESPACE:.metadata.namespace' \
  | awk '$2 > 5'

# Find all images running in cluster
kubectl get pods -A -o jsonpath='{range .items[*]}{.spec.containers[*].image}{"\n"}{end}' \
  | sort -u

# Delete all Evicted pods
kubectl get pods -A | grep Evicted | \
  awk '{print "kubectl delete pod " $2 " -n " $1}' | bash

# Force delete a stuck pod (use as last resort)
kubectl delete pod myapp-7d9f8b-xyz -n production \
  --grace-period=0 --force
PART 11: THE PRODUCTION DEBUGGING FLOWCHART
POD WON'T START OR KEEPS CRASHING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

kubectl get pod myapp-xxx -n production
        │
        ├── STATUS: Pending
        │     │
        │     ├── kubectl describe pod → Events section
        │     │
        │     ├── "0/3 nodes available: Insufficient cpu"
        │     │     → Nodes are full. Check: kubectl top nodes
        │     │     → Fix: Scale node group, reduce requests,
        │     │             or delete unused pods
        │     │
        │     ├── "0/3 nodes available: node(s) had taint"
        │     │     → Pod needs toleration for node taint
        │     │     → Fix: Add toleration to pod spec
        │     │
        │     └── "0/3 nodes available: pod has unbound PVC"
        │           → PersistentVolume not provisioned
        │           → kubectl get pvc -n production
        │           → Check StorageClass exists
        │
        ├── STATUS: ImagePullBackOff / ErrImagePull
        │     → Image name wrong, tag doesn't exist,
        │       or registry auth failed
        │     → kubectl describe pod → "Failed to pull image"
        │     → Fix: Check image name/tag, create imagePullSecret
        │
        ├── STATUS: CrashLoopBackOff
        │     → Container starts, crashes, repeats
        │     → kubectl logs myapp-xxx -n production -p  ← previous logs
        │     → Look for: app errors, missing env vars,
        │                 failed DB connection, OOM
        │     → kubectl describe pod → "Last State: Terminated"
        │       Check "Exit Code":
        │         1   = App crashed (check logs)
        │         137 = OOM killed (increase memory limit)
        │         139 = Segfault
        │         143 = SIGTERM (graceful shutdown)
        │
        ├── STATUS: OOMKilled
        │     → Memory limit too low OR memory leak
        │     → kubectl describe pod → "OOMKilled: true"
        │     → Fix: Increase memory limit, find the leak
        │
        ├── STATUS: Running but not Ready
        │     → Readiness probe failing
        │     → App is up but /ready returns non-200
        │     → kubectl describe pod → "Readiness probe failed"
        │     → kubectl exec -it pod -- curl localhost:8080/ready
        │     → Check DB connectivity, dependencies
        │
        └── STATUS: Terminating (stuck forever)
              → Pod can't finish graceful shutdown
              → kubectl describe pod → check finalizers
              → Fix: kubectl patch pod myapp-xxx \
                       -p '{"metadata":{"finalizers":[]}}' \
                       --type=merge
              → Last resort: --grace-period=0 --force
PART 12: THE PROJECT — Build a Production Kubernetes Setup
PROJECT ARCHITECTURE
What we're building:

INTERNET
    │
    ▼
AWS ALB (created by ALB Ingress Controller)
    │
    ├── /api/*  → api-service (3 replicas, HPA)
    ├── /       → frontend-service (2 replicas)
    │
KUBERNETES CLUSTER (EKS)
    │
    ├── NAMESPACE: production
    │     ├── Deployment: api (Flask app, 3 replicas)
    │     ├── Deployment: frontend (nginx, 2 replicas)
    │     ├── StatefulSet: redis (cache, 1 replica)
    │     ├── HPA: api (2-10 replicas, CPU 60%)
    │     ├── ConfigMap: app-config
    │     ├── Secret: db-credentials (via External Secrets)
    │     ├── NetworkPolicy: default-deny + explicit allows
    │     └── ResourceQuota: namespace budget
    │
    ├── NAMESPACE: monitoring
    │     ├── Prometheus
        │     └── Grafana
    │
    └── NAMESPACE: ingress-nginx (or aws-load-balancer-controller)
LAB 1: Cluster Setup (EKS)
# ── Install tools first ──

# eksctl — EKS cluster manager
curl --silent --location \
  "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_Linux_amd64.tar.gz" \
  | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin

# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl && sudo mv kubectl /usr/local/bin

# helm — Kubernetes package manager
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# k9s — Terminal UI for Kubernetes (install this everywhere)
curl -sS https://webinstall.dev/k9s | bash

# ── Create EKS Cluster ──

# [File needed: .yaml] cluster config
cat << 'EOF'
# eks-cluster.yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: prod-cluster
  region: us-east-1
  version: "1.29"
  tags:
    Project: prodapp
    Environment: production

iam:
  withOIDC: true          # Required for IRSA (IAM Roles for Service Accounts)

managedNodeGroups:
- name: app-nodes
  instanceType: t3.medium
  minSize: 2
  maxSize: 6
  desiredCapacity: 3
  availabilityZones: ["us-east-1a", "us-east-1b"]
  privateNetworking: true   # Nodes in private subnets
  labels:
    node-type: application
  tags:
    Project: prodapp
  iam:
    attachPolicyARNs:
    - arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy
    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy
    - arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
    withAddonPolicies:
      albIngress: true
      cloudWatch: true
      autoScaler: true

addons:
- name: vpc-cni
- name: coredns
- name: kube-proxy
- name: aws-ebs-csi-driver   # For PersistentVolumes

cloudWatch:
  clusterLogging:
    enable: ["api","audit","authenticator","controllerManager","scheduler"]
EOF

# Apply it
eksctl create cluster -f eks-cluster.yaml

# Configure kubectl
aws eks update-kubeconfig \
  --region us-east-1 \
  --name prod-cluster

# Verify
kubectl get nodes -o wide
kubectl get pods -A   # Should show kube-system pods running
LAB 2: Install Core Infrastructure
# ════════════════════════════════════════════════
# AWS LOAD BALANCER CONTROLLER
# Creates ALBs from Ingress objects automatically
# ════════════════════════════════════════════════

# Create IAM policy for controller
curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/main/docs/install/iam_policy.json

aws iam create-policy \
  --policy-name AWSLoadBalancerControllerIAMPolicy \
  --policy-document file://iam_policy.json

# Create service account with IRSA
eksctl create iamserviceaccount \
  --cluster=prod-cluster \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --attach-policy-arn=arn:aws:iam::${ACCOUNT_ID}:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve

# Install with Helm
helm repo add eks https://aws.github.io/eks-charts
helm repo update

helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=prod-cluster \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set region=us-east-1 \
  --set vpcId=$VPC_ID

# Verify
kubectl get deployment -n kube-system aws-load-balancer-controller

# ════════════════════════════════════════════════
# METRICS SERVER (required for HPA and kubectl top)
# ════════════════════════════════════════════════

kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Verify after 1 minute
kubectl top nodes
kubectl top pods -A

# ════════════════════════════════════════════════
# CLUSTER AUTOSCALER
# Adds/removes EC2 nodes based on pending pods
# ════════════════════════════════════════════════

helm repo add autoscaler https://kubernetes.github.io/autoscaler
helm install cluster-autoscaler autoscaler/cluster-autoscaler \
  --namespace kube-system \
  --set autoDiscovery.clusterName=prod-cluster \
  --set awsRegion=us-east-1 \
  --set extraArgs.balance-similar-node-groups=true \
  --set extraArgs.skip-nodes-with-system-pods=false \
  --set rbac.serviceAccount.annotations."eks\.amazonaws\.com/role-arn"=arn:aws:iam::${ACCOUNT_ID}:role/ClusterAutoscalerRole
LAB 3: Deploy the Application Stack
# ════════════════════════════════════════════════
# CREATE NAMESPACE WITH LABELS
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    name: production
    environment: production
EOF

# ════════════════════════════════════════════════
# RESOURCE QUOTA AND LIMITRANGE
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: v1
kind: ResourceQuota
metadata:
  name: production-quota
  namespace: production
spec:
  hard:
    requests.cpu: "10"
    requests.memory: "20Gi"
    limits.cpu: "20"
    limits.memory: "40Gi"
    pods: "50"
    services.loadbalancers: "2"
---
apiVersion: v1
kind: LimitRange
metadata:
  name: production-limits
  namespace: production
spec:
  limits:
  - type: Container
    default:
      cpu: "500m"
      memory: "256Mi"
    defaultRequest:
      cpu: "100m"
      memory: "128Mi"
    max:
      cpu: "4"
      memory: "8Gi"
EOF

# ════════════════════════════════════════════════
# CONFIGMAP
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: production
data:
  APP_ENV: "production"
  LOG_LEVEL: "info"
  REDIS_HOST: "redis-svc"
  REDIS_PORT: "6379"
  config.yaml: |
    server:
      port: 8080
      timeout: 30s
    cache:
      enabled: true
      ttl: 300
EOF

# ════════════════════════════════════════════════
# SECRET (in real prod: use External Secrets Operator)
# ════════════════════════════════════════════════

kubectl create secret generic db-credentials \
  --namespace production \
  --from-literal=username=dbadmin \
  --from-literal=password=supersecretpassword123 \
  --from-literal=host=your-rds-endpoint.us-east-1.rds.amazonaws.com

# ════════════════════════════════════════════════
# API DEPLOYMENT + SERVICE + HPA
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
  labels:
    app: api
    version: "1.0.0"
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: api
        version: "1.0.0"
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9090"
    spec:
      serviceAccountName: api-sa
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
      terminationGracePeriodSeconds: 30
      containers:
      - name: api
        image: nginx:1.24    # Replace with your app image
        ports:
        - containerPort: 80
          name: http
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 10
          periodSeconds: 10
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5
        env:
        - name: APP_ENV
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: APP_ENV
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: password
        - name: MY_POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: MY_NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchLabels:
                  app: api
              topologyKey: kubernetes.io/hostname
---
apiVersion: v1
kind: Service
metadata:
  name: api-svc
  namespace: production
spec:
  selector:
    app: api
  ports:
  - port: 80
    targetPort: 80
    name: http
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
EOF

# ════════════════════════════════════════════════
# REDIS STATEFULSET
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: v1
kind: Service
metadata:
  name: redis-svc
  namespace: production
spec:
  clusterIP: None   # Headless for StatefulSet
  selector:
    app: redis
  ports:
  - port: 6379
    name: redis
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis
  namespace: production
spec:
  serviceName: redis-svc
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7.2-alpine
        ports:
        - containerPort: 6379
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"
        volumeMounts:
        - name: redis-data
          mountPath: /data
        livenessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 10
          periodSeconds: 10
  volumeClaimTemplates:
  - metadata:
      name: redis-data
    spec:
      accessModes: ["ReadWriteOnce"]
      storageClassName: gp2
      resources:
        requests:
          storage: 5Gi
EOF

# ════════════════════════════════════════════════
# NETWORK POLICIES
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-api-traffic
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - port: 80
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: redis
    ports:
    - port: 6379
  - to:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - protocol: UDP
      port: 53
  - to:
    - ipBlock:
        cidr: 0.0.0.0/0
        except:
        - 10.0.0.0/8
    ports:
    - port: 443
EOF

# ════════════════════════════════════════════════
# INGRESS
# ════════════════════════════════════════════════

kubectl apply -f - << 'EOF'
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: production-ingress
  namespace: production
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/healthcheck-path: /
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":80},{"HTTPS":443}]'
    alb.ingress.kubernetes.io/ssl-redirect: "443"
spec:
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-svc
            port:
              number: 80
EOF

# Watch ALB being created
kubectl get ingress -n production -w
# Wait for ADDRESS to appear — that's your ALB DNS name
LAB 4: Simulate Failures — The Real Education
# ════════════════════════════════════════════════
# FAILURE 1: Pod crash simulation
# ════════════════════════════════════════════════

# Kill one pod — watch HPA and deployment react
POD=$(kubectl get pods -n production -l app=api \
  -o jsonpath='{.items[0].metadata.name}')

echo "Killing pod: $POD"
kubectl delete pod $POD -n production

# Watch in real time (open second terminal)
watch -n2 'kubectl get pods -n production'
# You'll see:
# → Old pod: Terminating
# → New pod: Pending → ContainerCreating → Running
# → Takes ~30-60 seconds total

# Check deployment ensured correct replica count
kubectl get deployment api -n production
kubectl rollout status deployment/api -n production

# ════════════════════════════════════════════════
# FAILURE 2: OOM Kill simulation
# ════════════════════════════════════════════════

# Deploy a memory hog with tight limits
kubectl apply -f - << 'EOF'
apiVersion: v1
kind: Pod
metadata:
  name: memory-hog
  namespace: production
spec:
  containers:
  - name: hog
    image: python:3.11-slim
    resources:
      requests:
        memory: "64Mi"
      limits:
        memory: "100Mi"   # Very tight limit
    command: ["python3", "-c"]
    args:
    - |
      import time
      data = []
      print("Starting memory allocation...")
      while True:
          data.append(' ' * 10 * 1024 * 1024)  # 10MB chunks
          print(f"Allocated {len(data)*10}MB", flush=True)
          time.sleep(0.5)
EOF

# Watch it get OOM killed
kubectl get pod memory-hog -n production -w
kubectl describe pod memory-hog -n production
# Look for: "OOMKilled" in Last State

kubectl logs memory-hog -n production -p  # Previous container logs

# Clean up
kubectl delete pod memory-hog -n production

# ════════════════════════════════════════════════
# FAILURE 3: Node pressure / unschedulable
# ════════════════════════════════════════════════

# Cordon a node — marks it unschedulable for new pods
NODE=$(kubectl get nodes -o jsonpath='{.items[0].metadata.name}')
kubectl cordon $NODE

echo "Node $NODE cordoned. New pods won't schedule here."

# Try to create more pods — watch them land on other nodes
kubectl scale deployment api --replicas=6 -n production
kubectl get pods -n production -o wide  # All new pods on uncordoned nodes

# Drain a node — evict all pods, then cordon
# This is what you do before node maintenance
kubectl drain $NODE \
  --ignore-daemonsets \
  --delete-emptydir-data \
  --force

# Pods reschedule to other nodes
kubectl get pods -n production -o wide

# Uncordon after maintenance
kubectl uncordon $NODE
kubectl scale deployment api --replicas=3 -n production

# ════════════════════════════════════════════════
# FAILURE 4: Resource starvation
# ════════════════════════════════════════════════

# Create a pod requesting more resources than available
kubectl apply -f - << 'EOF'
apiVersion: v1
kind: Pod
metadata:
  name: resource-hog
  namespace: production
spec:
  containers:
  - name: hog
    image: nginx
    resources:
      requests:
        cpu: "100"      # 100 cores — impossible on any single node
        memory: "500Gi"
EOF

# Watch it stay Pending
kubectl get pod resource-hog -n production
kubectl describe pod resource-hog -n production
# Events: "0/3 nodes are available: Insufficient cpu"

kubectl delete pod resource-hog -n production

# ════════════════════════════════════════════════
# FAILURE 5: Rolling update gone wrong
# ════════════════════════════════════════════════

# Deploy a bad image
kubectl set image deployment/api api=nginx:badtagthatdoesntexist \
  -n production

# Watch rollout fail
kubectl rollout status deployment/api -n production
# Will show: "error: deployment api exceeded its progress deadline"

# Meanwhile — old pods are STILL running (maxUnavailable: 0)
# Zero downtime even during a failed rollout!
kubectl get pods -n production
# You'll see old pods running + new pods in ImagePullBackOff

# ROLLBACK
kubectl rollout undo deployment/api -n production
kubectl rollout status deployment/api -n production
# System restored

# ════════════════════════════════════════════════
# FAILURE 6: HPA stress test
# ════════════════════════════════════════════════

# Generate load — watch HPA scale up
kubectl run load-generator \
  --image=busybox \
  --restart=Never \
  -n production \
  -- /bin/sh -c "while true; do wget -q -O- http://api-svc/; done"

# Watch HPA react
watch -n10 'kubectl get hpa api-hpa -n production'
# TARGETS column: shows current CPU% vs target 60%
# REPLICAS: will climb as load increases

# Watch pods scale up
watch -n5 'kubectl get pods -n production -l app=api'

# Stop load
kubectl delete pod load-generator -n production

# Watch HPA scale back down (takes 5 min due to stabilizationWindow)
watch -n30 'kubectl get hpa api-hpa -n production'
PART 13: PRODUCTION OBSERVABILITY
# ════════════════════════════════════════════════
# INSTALL PROMETHEUS + GRAFANA (kube-prometheus-stack)
# ════════════════════════════════════════════════

kubectl create namespace monitoring

helm repo add prometheus-community \
  https://prometheus-community.github.io/helm-charts
helm repo update

helm install kube-prometheus-stack \
  prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --set prometheus.prometheusSpec.retention=15d \
  --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.storageClassName=gp2 \
  --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.resources.requests.storage=50Gi \
  --set grafana.persistence.enabled=true \
  --set grafana.persistence.size=10Gi \
  --set alertmanager.alertmanagerSpec.storage.volumeClaimTemplate.spec.resources.requests.storage=10Gi

# Access Grafana locally
kubectl port-forward -n monitoring \
  svc/kube-prometheus-stack-grafana 3000:80

# Default login: admin / prom-operator

# ════════════════════════════════════════════════
# KEY METRICS TO WATCH IN PRODUCTION
# ════════════════════════════════════════════════

# These are the Prometheus queries you'll use most:

# 1. Pod CPU throttling (the silent killer)
# container_cpu_cfs_throttled_seconds_total

# 2. Pod memory usage vs limits
# container_memory_working_set_bytes
#   / on (pod) kube_pod_container_resource_limits{resource="memory"}

# 3. Pods not running
# kube_pod_status_phase{phase!="Running",phase!="Succeeded"}

# 4. Node CPU pressure
# 1 - avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) by (node)

# 5. PVC usage
# kubelet_volume_stats_used_bytes / kubelet_volume_stats_capacity_bytes

# 6. API server latency
# histogram_quantile(0.99,
#   rate(apiserver_request_duration_seconds_bucket[5m]))

# 7. Deployment replica mismatch
# kube_deployment_spec_replicas != kube_deployment_status_replicas_available
YOUR COMPLETE CHECKLIST
CONCEPTS — explain without notes:
□ Draw the control plane components and what each does
□ Explain the control loop — desired state vs actual state
□ Explain why etcd is the most critical component
□ Explain Requests vs Limits and QoS classes
□ Explain the difference between liveness and readiness probes
□ Explain why you use StatefulSet for databases not Deployment
□ Explain what happens step by step when kubectl apply runs
□ Explain RBAC: ServiceAccount → Role → RoleBinding
□ Explain why NetworkPolicy default-deny is required in prod

LABS — done with your own hands:
□ EKS cluster created with eksctl
□ ALB Ingress Controller installed and serving traffic
□ API Deployment with HPA running at 3 replicas minimum
□ Redis StatefulSet with PVC running and data persistent
□ NetworkPolicy: default-deny applied, explicit allows working
□ ResourceQuota and LimitRange applied to namespace
□ Pod crash simulated → ASG replaced it automatically
□ OOM kill triggered → observed in describe output
□ Node cordoned + drained → pods rescheduled
□ Bad image rollout → zero downtime → rollback executed
□ Load generator run → HPA scaled up → stopped → scaled down
□ Prometheus + Grafana installed → dashboards visible

PRODUCTION HABITS:
□ Never use :latest image tag — always pin versions
□ Always set requests AND limits on every container
□ Always have liveness AND readiness probes
□ Always use podAntiAffinity to spread replicas
□ Always apply NetworkPolicy default-deny first
□ Never deploy naked pods — always use Deployment/StatefulSet
□ Always use RollingUpdate with maxUnavailable: 0
□ Always set terminationGracePeriodSeconds ≥ 30
□ Never store secrets as env vars hardcoded — use Secret objects
□ Always backup etcd on self-managed clusters
Five modules deep. You now have the full production stack in your head — from Linux kernel internals at the bottom all the way up to Kubernetes orchestrating containers at the top. Every layer connects. The cgroups you learned in Module 1 are the same cgroups enforcing your container resource limits right now. The networking from Module 2 is the same model inside the cluster. The IAM from Module 3 is IRSA for your pods. The multi-tier architecture from Module 4 is exactly what you just deployed into Kubernetes.
This is how senior engineers think. Everything connects. Nothing is isolated.
Go run every lab. Break every simulation. Come back when it's done.








# Control Plane Internals 🧠

## Your Senior DevSecOps Mentor Speaking

Last module you learned how to USE Kubernetes. You deployed things, scaled things, broke things, fixed things. That was the operator level.

This module is different.

This is where you open the hood and stare directly at the engine while it's running. You're going to understand every component so deeply that when something breaks in production — and it WILL break — you don't guess. You KNOW. You trace the exact path a request takes through the control plane, you know which component failed, and you know how to fix it before your manager even finishes typing the incident message.

This is the difference between someone who runs Kubernetes and someone who **understands** Kubernetes.

Let's go all the way in.

---

# THE MASTER MENTAL MODEL FIRST

```
Most people think of Kubernetes like this:
"I apply a YAML, pods appear. Magic."

Operators think like this:

EVERYTHING IN KUBERNETES IS A RECONCILIATION LOOP.

The entire system is built on one single idea:

    WATCH → COMPARE → ACT → REPEAT

Every controller in Kubernetes does this:
1. WATCH the API server for objects it cares about
2. COMPARE desired state (what you asked for) 
         vs actual state (what reality is)
3. ACT to close the gap
4. REPEAT forever — every few seconds — never stops

This is called the CONTROL LOOP.
It never sleeps. It never stops. 
It runs even when nothing is changing.
The moment reality drifts from desired — it acts.

This is why Kubernetes is self-healing.
Not because of magic.
Because of LOOPS.

Now let's understand every component that runs those loops.
```

---

# PART 1: etcd — The Memory of the Cluster

## The Mental Model

```
Think of etcd like this:

The entire Kubernetes cluster is a BRAIN.
etcd is the LONG-TERM MEMORY of that brain.

Every thought the cluster has ever had is stored in etcd.
Every pod spec. Every deployment. Every secret.
Every node status. Every service endpoint. Everything.

If etcd dies with no backup:
The brain loses ALL memory.
Cluster becomes an amnesiac — it doesn't know what it wants,
what it has, or what it was trying to do.

Not even the API server knows what's happening without etcd.
It holds NOTHING in memory between restarts.
etcd is the ONLY persistent storage in the entire control plane.
```

## What etcd Actually Is

```
etcd = a distributed key-value store
Built on the RAFT consensus algorithm

RAFT in plain English:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine 5 people (etcd nodes) voting on what the truth is.
Before anything is written, a MAJORITY must agree.

With 5 nodes → majority = 3
With 3 nodes → majority = 2

LEADER   = The one node that accepts all writes
FOLLOWER = Copies what the leader says
CANDIDATE = Trying to become leader (happens during elections)

Write comes in → Leader proposes it → 
Majority say yes → Leader commits → 
Followers update → Write confirmed

If leader dies:
→ Followers notice (heartbeat timeout ~150-300ms)
→ They start an election
→ First to get majority votes becomes new leader
→ Cluster continues — this takes < 1 second

QUORUM TABLE:
Nodes   Failures tolerated   Quorum needed
  1          0                    1
  3          1                    2
  5          2                    3
  7          3                    4

Always odd numbers.
Never 2 or 4. 
Even numbers give you SPLIT BRAIN risk.
```

## etcd Data Structure

```bash
# etcd stores everything under /registry/

# Here's what's actually inside etcd in a real cluster:

/registry/pods/default/myapp-7d9f8b-xyz
/registry/pods/production/api-abc123-xyz
/registry/deployments/production/api
/registry/replicasets/production/api-7d9f8b
/registry/services/production/api-svc
/registry/endpoints/production/api-svc
/registry/secrets/production/db-credentials
/registry/configmaps/production/app-config
/registry/nodes/ip-10-0-1-100.ec2.internal
/registry/namespaces/production
/registry/clusterroles/admin
/registry/rolebindings/production/api-rolebinding

# The VALUE at each key is a PROTOBUF-encoded object
# (binary format — not JSON, for efficiency)

# HOW TO ACTUALLY READ etcd (on a real cluster):

# Set up auth
export ETCDCTL_API=3
export ETCDCTL_ENDPOINTS=https://127.0.0.1:2379
export ETCDCTL_CACERT=/etc/kubernetes/pki/etcd/ca.crt
export ETCDCTL_CERT=/etc/kubernetes/pki/etcd/server.crt
export ETCDCTL_KEY=/etc/kubernetes/pki/etcd/server.key

# List all keys (see everything)
etcdctl get / --prefix --keys-only

# Get a specific deployment
etcdctl get /registry/deployments/production/api

# Watch LIVE changes to a key (see the watch mechanism in action)
etcdctl watch /registry/deployments/production/api

# Now in another terminal: kubectl scale deployment api --replicas=5 -n production
# Watch terminal shows the exact moment etcd is updated

# Cluster health
etcdctl endpoint health --cluster

# Member list
etcdctl member list

# Performance check (important in production)
etcdctl check perf
# etcd needs fast disk. SSDs only. 
# p99 write latency should be < 10ms.
# If it's high → scheduler slows down → pods stay pending longer
```

## etcd Backup and Restore — The Most Important Skill

```bash
# ════════════════════════════════════════════════
# BACKUP — Run this on a cron job. Every hour.
# ════════════════════════════════════════════════

BACKUP_DIR="/backup/etcd"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SNAPSHOT_FILE="${BACKUP_DIR}/etcd-snapshot-${TIMESTAMP}.db"

mkdir -p $BACKUP_DIR

ETCDCTL_API=3 etcdctl snapshot save $SNAPSHOT_FILE \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Verify the snapshot is valid
ETCDCTL_API=3 etcdctl snapshot status $SNAPSHOT_FILE \
  --write-out=table

# Output shows:
# HASH         REVISION   TOTAL KEYS   TOTAL SIZE
# abc123def    847392     1847         4.5 MB

# Upload to S3 immediately (local backup is not enough)
aws s3 cp $SNAPSHOT_FILE \
  s3://my-cluster-backups/etcd/${SNAPSHOT_FILE##*/}

# Keep only last 48 backups locally
ls -t ${BACKUP_DIR}/etcd-snapshot-*.db | tail -n +49 | xargs rm -f

# ════════════════════════════════════════════════
# RESTORE — The moment you dread but must know cold
# ════════════════════════════════════════════════

# SCENARIO: etcd data directory corrupted. Cluster is dead.
# You have a snapshot from 1 hour ago. Let's restore.

# STEP 1: Stop the API server so nothing writes during restore
# (On kubeadm clusters: move static pod manifests out of /etc/kubernetes/manifests/)
sudo mv /etc/kubernetes/manifests/kube-apiserver.yaml /tmp/
sudo mv /etc/kubernetes/manifests/etcd.yaml /tmp/

# STEP 2: Restore snapshot to a new data directory
ETCDCTL_API=3 etcdctl snapshot restore $SNAPSHOT_FILE \
  --name=master-1 \
  --initial-cluster=master-1=https://127.0.0.1:2380 \
  --initial-cluster-token=etcd-cluster-1 \
  --initial-advertise-peer-urls=https://127.0.0.1:2380 \
  --data-dir=/var/lib/etcd-restored

# STEP 3: Update etcd config to use new data directory
# Edit /tmp/etcd.yaml: change --data-dir to /var/lib/etcd-restored

# STEP 4: Move static pods back — etcd and API server restart
sudo mv /tmp/etcd.yaml /etc/kubernetes/manifests/
sudo mv /tmp/kube-apiserver.yaml /etc/kubernetes/manifests/

# STEP 5: Verify cluster restored
sleep 30
kubectl get nodes
kubectl get pods -A
# State from 1 hour ago is back. Cluster breathes again.

# WHY THIS IS TERRIFYING:
# Everything created in the last hour is GONE from etcd.
# Pods that existed: still running on nodes (kubelet doesn't die)
# but etcd doesn't know about them → API server doesn't know
# → they become "orphaned" → kubelet will eventually kill them
# This is why frequent backups matter.
```

## etcd Performance Tuning

```bash
# etcd is EXTREMELY sensitive to disk latency.
# A slow disk → high write latency → API server slow
# → kubectl slow → pods take longer to schedule
# → THE ENTIRE CLUSTER DEGRADES

# Check etcd disk latency right now
etcdctl check perf --load="s"   # small load
etcdctl check perf --load="m"   # medium load
etcdctl check perf --load="l"   # large load

# Watch etcd metrics (if Prometheus is installed)
# etcd_disk_wal_fsync_duration_seconds — should be < 10ms p99
# etcd_disk_backend_commit_duration_seconds — should be < 25ms p99
# etcd_server_leader_changes_seen_total — should be near 0

# Defragment etcd (recovers space after deletions)
# Run during low-traffic periods — it briefly blocks writes
etcdctl defrag --endpoints=https://127.0.0.1:2379

# Check etcd database size
etcdctl endpoint status --cluster \
  -w table \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Recommended: set quota at 8GB and alert at 6GB
# Default quota is only 2GB — easily hit in large clusters
# --quota-backend-bytes=8589934592   (in etcd config)

# ENCRYPTION AT REST — turn it on
# By default etcd stores secrets in PLAIN TEXT (just base64)
# Create encryption config:
cat << 'EOF'
# /etc/kubernetes/encryption-config.yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
- resources:
  - secrets
  providers:
  - aescbc:
      keys:
      - name: key1
        secret: <base64-encoded-32-byte-key>
  - identity: {}   # Fallback for unencrypted existing secrets
EOF

# Add to API server: --encryption-provider-config=/etc/kubernetes/encryption-config.yaml
# Then encrypt all existing secrets:
kubectl get secrets -A -o json | kubectl replace -f -
# Now ALL secrets in etcd are AES-256 encrypted at rest
```

---

# PART 2: THE API SERVER — The Gate of All Gates

## What It Actually Does

```
kube-apiserver is the ONLY component that talks to etcd.
Everything else talks to the API server.

It is:
→ An HTTP REST API server (OpenAPI spec)
→ An authentication gateway
→ An authorization engine (RBAC)
→ An admission control pipeline
→ A watch/notification system
→ A schema validator
→ A conversion webhook host

EVERY operation flows through it.
Read. Write. Watch. All of it.

NO component has a direct line to etcd.
NO component has direct lines to each other.
The API server is the nervous system.
Everything routes through it.
```

## The Full Request Pipeline

```
REQUEST: kubectl apply -f deployment.yaml
         POST /apis/apps/v1/namespaces/production/deployments

STAGE 1: TRANSPORT SECURITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ TLS connection established
→ Client certificate verified (or bearer token)
→ If TLS fails here → connection rejected before anything else

STAGE 2: AUTHENTICATION (AuthN)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ "WHO are you?"
→ Tries each authenticator in order:

   Client Certificate → parse CN and O fields
   Bearer Token       → check token against known tokens
   Service Account    → validate JWT token signature
   OIDC Token         → validate against OIDC provider
   Webhook            → call external auth service
   Anonymous          → if nothing else matches (usually disabled)

→ Result: username + group list
→ Example: username=system:serviceaccount:production:api-sa
           groups=[system:serviceaccounts, system:serviceaccounts:production]

→ If ALL authenticators fail → 401 Unauthorized

STAGE 3: AUTHORIZATION (AuthZ)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ "WHAT are you allowed to do?"
→ RBAC checks: does username/group have permission for:
  verb=create, resource=deployments, namespace=production?
→ Checks all Roles + ClusterRoles bound to this identity
→ First allow wins (no explicit deny in RBAC — unlike IAM)
→ If no allow found → 403 Forbidden

STAGE 4: ADMISSION CONTROLLERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ "Does this request meet our standards?"
→ Pipeline of plugins that can MUTATE or VALIDATE

MUTATING ADMISSION (runs first — can CHANGE the object):
→ DefaultStorageClass: adds storage class if not set
→ LimitRanger: adds default resource limits from LimitRange
→ ServiceAccount: injects default SA token if not specified
→ MutatingWebhookConfiguration: your custom webhooks
   (Istio injects sidecar here, OPA Gatekeeper enforces policy)

SCHEMA VALIDATION:
→ Is the object valid according to the OpenAPI schema?
→ Required fields present? Types correct?

VALIDATING ADMISSION (runs second — can REJECT but not change):
→ ResourceQuota: will this exceed namespace quota?
→ PodSecurity: does pod meet the security standard?
→ ValidatingWebhookConfiguration: your custom webhooks
   (policy engines like Kyverno, OPA Gatekeeper)
→ If ANY validating controller rejects → 422 Unprocessable Entity

STAGE 5: PERSIST TO etcd
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Object serialized to protobuf
→ Written to etcd: /registry/deployments/production/api
→ etcd confirms write (Raft quorum achieved)
→ API server returns 201 Created to kubectl

STAGE 6: WATCH NOTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ API server notifies ALL watchers of this resource type
→ Deployment Controller: "I see a new Deployment!"
→ Control loops begin...
```

## API Server Internals — The Watch Mechanism

```bash
# WATCH is the beating heart of Kubernetes.
# Every controller watches the API server for changes.
# Not polling. Not querying every second.
# A PERSISTENT HTTP connection with chunked transfer encoding.
# The API server PUSHES events to watchers the moment they happen.

# See watch in action — open a raw watch connection:
kubectl get pods -n production --watch -v=9
# -v=9 shows the actual HTTP requests
# You'll see:
# GET /api/v1/namespaces/production/pods?watch=true&resourceVersion=847392
# 200 OK
# (connection stays open)
# Then when a pod changes:
# {"type":"MODIFIED","object":{"kind":"Pod",...}}

# The API server maintains a WATCH CACHE
# It caches the last N events for each resource type
# Watchers that reconnect get events they missed
# This is the resourceVersion you see everywhere

# Check API server resources
kubectl api-resources           # All resource types
kubectl api-versions            # All API versions
kubectl explain deployment      # Schema for a resource
kubectl explain deployment.spec.strategy.rollingUpdate

# API server health checks
kubectl get --raw /healthz
kubectl get --raw /readyz
kubectl get --raw /livez

# Detailed component status
kubectl get --raw /livez?verbose
kubectl get --raw /readyz?verbose

# API server metrics (Prometheus format)
kubectl get --raw /metrics | grep apiserver_request

# Important metrics to watch:
# apiserver_request_total{code="200"} — successful requests
# apiserver_request_total{code="500"} — server errors (BAD)
# apiserver_request_duration_seconds  — latency
# apiserver_current_inflight_requests — load right now
```

## Admission Controllers — Your Security Enforcement Layer

```bash
# See which admission controllers are enabled
kube-apiserver --help | grep admission

# On EKS/kubeadm check the API server manifest:
cat /etc/kubernetes/manifests/kube-apiserver.yaml | grep admission

# Default enabled controllers (you need to know these):
# NamespaceLifecycle  — prevents resources in non-existent namespaces
# LimitRanger         — enforces LimitRange policies
# ServiceAccount      — auto-mounts service account tokens
# DefaultStorageClass — sets default storage class on PVCs
# DefaultTolerationSeconds — adds default tolerations
# ResourceQuota       — enforces ResourceQuota limits
# MutatingAdmissionWebhook  — your custom mutation webhooks
# ValidatingAdmissionWebhook — your custom validation webhooks
# NodeRestriction     — limits what kubelets can modify

# BUILD YOUR OWN ADMISSION WEBHOOK:
# This is what tools like OPA Gatekeeper and Kyverno do.
# They register webhooks that the API server calls on every request.

# Example: a webhook that REJECTS pods without resource limits
# The API server sends a POST request to your webhook with the pod spec
# Your webhook responds: allow=true or allow=false with a reason

# Webhook registration
cat << 'EOF'
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingWebhookConfiguration
metadata:
  name: require-resource-limits
webhooks:
- name: require-limits.mycompany.com
  rules:
  - apiGroups: [""]
    apiVersions: ["v1"]
    operations: ["CREATE", "UPDATE"]
    resources: ["pods"]
  clientConfig:
    service:
      namespace: admission-system
      name: resource-limit-webhook
      path: /validate
    caBundle: <base64-encoded-CA-cert>
  admissionReviewVersions: ["v1"]
  sideEffects: None
  failurePolicy: Fail   # FAIL if webhook is unreachable
                        # Use Ignore for non-critical webhooks
EOF

# CRITICAL: failurePolicy: Fail means if your webhook crashes
# → ALL pod creates fail cluster-wide
# → Test webhooks in a non-prod namespace FIRST
# → Always have a circuit breaker (namespaceSelector to exclude kube-system)
```

---

# PART 3: THE SCHEDULER — The Intelligent Placer

## Mental Model

```
The Scheduler has ONE job:
Watch for pods with NO node assigned.
Find the BEST node for each one.
Write the node assignment to etcd.
That's it. That's the entire job.

But "finding the best node" is deep.
It's a two-phase algorithm: FILTERING then SCORING.

Think of it like hiring a contractor:

FILTERING = "Can they even do this job?"
  → Eliminate candidates who definitely can't work
  → Pass/fail. Binary. No partial credit.

SCORING = "Which qualified candidate is BEST?"
  → Rank remaining candidates
  → Pick the highest score
  → Ties broken by random selection
```

## The Scheduling Algorithm — Deep Dive

```
PHASE 1: FILTERING PREDICATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All nodes start as candidates.
Each filter ELIMINATES nodes that fail.
Remaining nodes move to scoring.

FILTERS THAT RUN:

PodFitsResources
→ Does node have enough CPU + Memory for this pod?
→ Available = Allocatable - sum(requests of running pods)
→ Does NOT check actual usage — checks REQUESTED amounts
→ A node at 90% CPU usage but low requests → still schedulable

NodeAffinity
→ Does the node match the pod's nodeAffinity rules?
→ Required rules → filter (must match)
→ Preferred rules → scoring (nice to have)

TaintToleration
→ Does the pod tolerate ALL taints on this node?
→ NoSchedule taint + no matching toleration → eliminated
→ Common taints: node.kubernetes.io/not-ready
                 node.kubernetes.io/unreachable
                 node.kubernetes.io/memory-pressure

PodAntiAffinity
→ Are there existing pods on this node that conflict?
→ Required anti-affinity → eliminate node

NodeUnschedulable
→ Is the node cordoned (kubectl cordon)?
→ If yes → eliminated immediately

VolumeBinding
→ If pod needs a specific PV, is it available in this node's AZ?
→ EBS volumes are AZ-specific — pod must go to same AZ as volume

PodTopologySpread
→ Would placing pod here violate spread constraints?
→ maxSkew: 1 means no AZ can have more than 1 extra pod vs others

HostPort
→ If pod needs a specific host port, is it free on this node?

AFTER ALL FILTERS:
→ 0 nodes left → pod stays PENDING (describe shows why)
→ 1 node left → only choice
→ N nodes left → move to SCORING

PHASE 2: SCORING (PRIORITY FUNCTIONS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Each remaining node gets a score 0-100.
Scores from multiple functions are WEIGHTED and SUMMED.

LeastAllocated (default weight: high)
→ Score based on how LITTLE resource is allocated
→ Prefers less-loaded nodes
→ Spreads pods across nodes naturally
→ Node at 20% allocation scores higher than node at 80%

NodeAffinity (weight: configurable)
→ Preferred nodeAffinity rules add to score
→ More matching labels = higher score

InterPodAffinity (weight: configurable)
→ Prefer nodes where matching pods already exist
→ (Opposite of anti-affinity)

ImageLocality (weight: moderate)
→ Prefer nodes that already have the container image
→ Avoids image pull time
→ Image present = higher score


NodeResourcesFit
→ How well do pod requests fit the node's remaining capacity?
→ Balance between bin-packing and spreading

TaintToleration
→ Nodes with fewer taints score higher
→ Even if pod tolerates the taint, fewer taints is preferred

FINAL STEP:
→ Node with highest total weighted score WINS
→ Pod's spec.nodeName is set to winner
→ Written to etcd
→ kubelet on that node picks it up
Scheduler Configuration — Customizing the Algorithm
# KubeSchedulerConfiguration — tune the scheduler
# Applied via --config flag on kube-scheduler

apiVersion: kubescheduler.config.k8s.io/v1
kind: KubeSchedulerConfiguration
profiles:
- schedulerName: default-scheduler
  plugins:
    score:
      enabled:
      - name: NodeResourcesFit
        weight: 1
      - name: InterPodAffinity
        weight: 2
      - name: NodeAffinity
        weight: 2
      disabled:
      - name: ImageLocality  # Disable if you have fast image pulls

  pluginConfig:
  - name: NodeResourcesFit
    args:
      scoringStrategy:
        type: LeastAllocated    # Spread pods (default)
        # type: MostAllocated   # Bin-pack pods (save money)
        # type: RequestedToCapacityRatio  # Custom curve
        resources:
        - name: cpu
          weight: 1
        - name: memory
          weight: 1
Watching the Scheduler Make Decisions
# Watch scheduler logs in real time
kubectl logs -n kube-system \
  -l component=kube-scheduler \
  -f --tail=50

# Or on a kubeadm cluster:
kubectl logs -n kube-system kube-scheduler-master-node -f

# Increase verbosity to see scoring decisions:
# Add --v=10 to scheduler flags (WARNING: very verbose)
# --v=4 shows filtering decisions
# --v=10 shows individual scores per node

# See scheduler events
kubectl get events -n kube-system \
  --field-selector reason=Scheduled \
  --sort-by='.lastTimestamp'

# Watch a pod get scheduled in slow motion
kubectl apply -f - << 'EOF'
apiVersion: v1
kind: Pod
metadata:
  name: scheduling-demo
  namespace: default
spec:
  containers:
  - name: demo
    image: nginx
    resources:
      requests:
        cpu: "100m"
        memory: "64Mi"
EOF

# In another terminal, watch events as scheduler works
kubectl get events --watch \
  --field-selector involvedObject.name=scheduling-demo

# You'll see:
# Reason: Scheduled  Message: Successfully assigned default/scheduling-demo to ip-10-0-1-100

# See WHICH node was chosen and WHY (scheduler extender logs)
kubectl describe pod scheduling-demo | grep -A5 Events

# Simulate scheduling WITHOUT actually scheduling
# (Dry run to see where pod WOULD go)
kubectl get pod scheduling-demo -o yaml | \
  kubectl alpha debug -it scheduling-demo \
  --copy-to=debug-pod -- sh
Taints and Tolerations — The Scheduler's VIP System
# TAINT = "This node repels pods"
# TOLERATION = "This pod can handle that repellent"

# Taint effects:
# NoSchedule    → new pods won't be scheduled here (existing stay)
# PreferNoSchedule → avoid scheduling here if possible
# NoExecute     → new pods won't schedule AND existing pods evicted

# Common production use cases:

# 1. Dedicated GPU nodes — only GPU workloads
kubectl taint nodes gpu-node-1 \
  workload=gpu:NoSchedule

# Only pods with this toleration get scheduled on gpu-node-1:
cat << 'EOF'
tolerations:
- key: "workload"
  operator: "Equal"
  value: "gpu"
  effect: "NoSchedule"
EOF

# 2. Master/control plane nodes — no user workloads
# EKS does this automatically:
# Taint: node-role.kubernetes.io/master:NoSchedule

# 3. Dedicated namespace nodes
kubectl taint nodes app-node-1 \
  dedicated=production:NoSchedule \
  dedicated=production:NoExecute

# 4. Node is not ready — automatic taint by controller manager
# node.kubernetes.io/not-ready:NoExecute
# node.kubernetes.io/unreachable:NoExecute
# These are added automatically when node fails health check
# Pods without tolerations are evicted after tolerationSeconds (300s default)

# Check existing taints on nodes
kubectl get nodes -o \
  custom-columns=NAME:.metadata.name,TAINTS:.spec.taints

# Remove a taint (add - at the end)
kubectl taint nodes gpu-node-1 workload=gpu:NoSchedule-
PART 4: kubelet — The Node's Soul
What kubelet Actually Does
kubelet is the agent that runs on EVERY worker node.
It is the ONLY component that actually runs containers.

The API server and scheduler just write to etcd.
kubelet is the one that ACTS on those writes.

kubelet's responsibilities:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WATCH API SERVER
→ Long-polling watch for pods assigned to THIS node
→ Only gets pods where spec.nodeName = this node's name

MANAGE POD LIFECYCLE
→ Calls container runtime (containerd) to start/stop containers
→ Creates pod sandbox (network namespace, cgroups)
→ Mounts volumes (PVCs, Secrets, ConfigMaps)
→ Sets up environment variables
→ Manages graceful shutdown (SIGTERM → wait → SIGKILL)

RUN PROBES
→ Executes liveness probes every periodSeconds
→ Executes readiness probes every periodSeconds
→ Executes startup probes until they pass
→ Takes action based on results (restart container, mark not-ready)

REPORT STATUS
→ Reports node status to API server every --node-status-update-frequency
   (default: 10 seconds)
→ Reports pod status changes immediately when they happen

NODE HEALTH
→ Reports: CPU, memory, disk, PID pressure conditions
→ If memory pressure: stops accepting new pods
→ If disk pressure: evicts pods (starting with BestEffort QoS)

STATIC PODS
→ Reads /etc/kubernetes/manifests/ directory
→ Any YAML file here → pod is created, managed by kubelet directly
→ No Deployment, no API server needed
→ This is how control plane components run on master nodes!
→ The API server itself is a static pod managed by kubelet
kubelet Internals — The Sync Loop
kubelet runs a SYNC LOOP every --sync-frequency (default: 1 second)

Each iteration:
1. Get desired pod list (from API server watch cache + static pods)
2. Get actual pod list (from container runtime)
3. Compare: what needs to be started? stopped? restarted?
4. Execute the delta
5. Report status back to API server

PROBE WORKERS run in parallel goroutines:
→ One goroutine per liveness probe
→ One goroutine per readiness probe
→ Results fed into the sync loop

EVICTION MANAGER checks resource pressure:
→ Every --eviction-hard-memory.available check interval
→ If node memory available < threshold → evict BestEffort pods
→ If still not enough → evict Burstable pods
→ Guaranteed pods never evicted by kubelet (only OOM killer can kill them)

GARBAGE COLLECTION:
→ Cleans up dead containers (keeps last --maximum-dead-containers)
→ Cleans up unused images (when disk > image-gc-high-threshold)
→ Runs every --image-gc-period
kubelet Configuration and Debugging
# ════════════════════════════════════════════════
# kubelet config location
# ════════════════════════════════════════════════

# On kubeadm clusters:
cat /var/lib/kubelet/config.yaml

# Key kubelet configuration parameters:
cat << 'EOF'
# /var/lib/kubelet/config.yaml
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration

# How often to sync pod state
syncFrequency: 1m

# Node status update frequency
nodeStatusUpdateFrequency: 10s

# Image garbage collection thresholds
imageGCHighThresholdPercent: 85   # Start GC when disk > 85%
imageGCLowThresholdPercent: 80    # Stop GC when disk < 80%

# Container log rotation
containerLogMaxSize: "100Mi"
containerLogMaxFiles: 5

# Pod eviction thresholds
evictionHard:
  memory.available: "100Mi"      # Evict if available < 100Mi
  nodefs.available: "10%"        # Evict if disk < 10%
  nodefs.inodesFree: "5%"        # Evict if inodes < 5%
  imagefs.available: "15%"       # Evict if image disk < 15%

evictionSoft:
  memory.available: "200Mi"      # Soft evict threshold
evictionSoftGracePeriod:
  memory.available: "1m30s"      # Give pods 90s to clean up

# Maximum pods per node
maxPods: 110

# Feature gates
featureGates:
  RotateKubeletServerCertificate: true
EOF

# ════════════════════════════════════════════════
# kubelet logs — THE most important node-level log
# ════════════════════════════════════════════════

# On systemd nodes:
journalctl -u kubelet -f                    # Follow live
journalctl -u kubelet --since "1 hour ago" # Last hour
journalctl -u kubelet -p err               # Only errors

# What to look for in kubelet logs:
# "Failed to pull image"              → image problem
# "OOMKilling"                        → memory limit hit
# "Evicting pod"                      → node pressure
# "Unable to mount volumes"           → PVC problem  
# "Failed to create pod sandbox"      → CNI problem
# "PLEG is not healthy"               → node is overwhelmed
#   (PLEG = Pod Lifecycle Event Generator — if unhealthy, node goes NotReady)

# ════════════════════════════════════════════════
# Interact with kubelet directly (bypassing API server)
# ════════════════════════════════════════════════

# kubelet exposes its own HTTP API on port 10250

# Health check
curl -k https://localhost:10250/healthz

# Running pods on this node (direct from kubelet)
curl -k https://localhost:10250/pods | jq '.items[].metadata.name'

# Container metrics (cadvisor endpoint)
curl -k https://localhost:10250/metrics/cadvisor | head -50

# Stats for a specific pod
curl -k https://localhost:10250/stats/summary | \
  jq '.pods[] | select(.podRef.name | contains("myapp"))'

# ════════════════════════════════════════════════
# Static Pods — understanding the bootstrap
# ════════════════════════════════════════════════

# On master node, list static pod manifests:
ls /etc/kubernetes/manifests/
# kube-apiserver.yaml
# kube-controller-manager.yaml
# kube-scheduler.yaml
# etcd.yaml

# These are managed by kubelet DIRECTLY.
# If API server is down, kubelet still runs these.
# If you edit these files, kubelet restarts the component immediately.
# This is how control plane upgrades work.

# Watch kubelet restart API server after manifest change:
sudo touch /etc/kubernetes/manifests/kube-apiserver.yaml
# kubelet detects file changed → kills old pod → starts new one
# API server restarts in ~30 seconds

# This is DANGEROUS — don't touch these on production unless you know what you're doing
PART 5: kube-proxy — The Network Plumber
Mental Model
kube-proxy is the component that makes SERVICES work.

Without kube-proxy:
You create a Service with ClusterIP 10.96.0.100
Nothing happens. Pods can't reach it.
The IP exists in etcd but nowhere in the actual network.

With kube-proxy:
kube-proxy watches API server for Services and Endpoints
When a Service is created → kube-proxy programs iptables/IPVS rules
Now packets to 10.96.0.100 are intercepted and forwarded to pod IPs

kube-proxy runs as a DaemonSet — one pod on EVERY node.
Each node has its OWN copy of all the iptables rules.
There is no central network component.
Every node can route to every Service independently.
iptables Mode — The Default
# kube-proxy in iptables mode creates chains like:

# When a pod sends traffic to Service IP 10.96.0.100:80

# STEP 1: Packet hits iptables PREROUTING chain
# STEP 2: Jumps to KUBE-SERVICES chain
# STEP 3: Matches rule for 10.96.0.100:80 → jumps to KUBE-SVC-XXXXX
# STEP 4: KUBE-SVC-XXXXX does probabilistic selection:
#          33% chance → KUBE-SEP-POD1 (10.0.1.5:8080)
#          33% chance → KUBE-SEP-POD2 (10.0.2.5:8080)
#          33% chance → KUBE-SEP-POD3 (10.0.3.5:8080)
# STEP 5: DNAT replaces destination IP+port with chosen pod IP+port
# STEP 6: Packet goes to correct pod

# See the actual iptables rules kube-proxy creates:
sudo iptables -t nat -L KUBE-SERVICES -n | head -30

# Find rules for a specific service
sudo iptables -t nat -L -n | grep 10.96.0.100

# Count total kube-proxy rules (can be huge in large clusters)
sudo iptables -t nat -L | grep -c KUBE

# In a cluster with 10,000 services: >100,000 iptables rules
# Every packet must traverse them ALL
# This is why IPVS mode is better at scale

# ════════════════════════════════════════════════
# IPVS MODE — Better at scale
# ════════════════════════════════════════════════

# IPVS uses kernel hash tables instead of linear iptables chains
# O(1) lookup time vs O(n) for iptables
# Supports more load balancing algorithms
# Dramatically faster with many services

# Check if IPVS is enabled
kubectl get configmap kube-proxy -n kube-system -o yaml | grep mode

# See IPVS virtual services
sudo ipvsadm -L -n

# Each Service gets a virtual server entry:
# TCP  10.96.0.100:80 rr      (rr = round-robin)
#   -> 10.0.1.5:8080   Masq  1  0  0
#   -> 10.0.2.5:8080   Masq  1  0  0
#   -> 10.0.3.5:8080   Masq  1  0  0

# Switch kube-proxy to IPVS mode:
kubectl edit configmap kube-proxy -n kube-system
# Change: mode: "" to mode: "ipvs"
# Then restart: kubectl rollout restart daemonset kube-proxy -n kube-system
Endpoint Slices — How kube-proxy Knows Pod IPs
# When a pod becomes Ready:
# 1. kubelet reports pod is Ready to API server
# 2. Endpoints controller creates/updates EndpointSlice
# 3. EndpointSlice contains ready pod IPs
# 4. kube-proxy watches EndpointSlices
# 5. kube-proxy updates iptables/IPVS rules
# 6. Traffic flows to new pod

# See endpoint slices for a service
kubectl get endpointslices -n production \
  -l kubernetes.io/service-name=api-svc

kubectl describe endpointslice \
  -n production \
  -l kubernetes.io/service-name=api-svc

# You'll see:
# Endpoints:
#   - Addresses: 10.0.1.15
#     Conditions: ready=true
#     NodeName: ip-10-0-1-100.ec2.internal
#   - Addresses: 10.0.2.22
#     Conditions: ready=true serving=true terminating=false

# WHAT HAPPENS DURING ROLLING UPDATE:
# 1. New pod starts → readinessProbe starts
# 2. readinessProbe fails → pod NOT in EndpointSlice
# 3. No traffic sent to new pod yet
# 4. readinessProbe passes → pod added to EndpointSlice
# 5. kube-proxy updates iptables → traffic starts flowing
# 6. OLD pod gets SIGTERM → removed from EndpointSlice
# 7. kube-proxy updates iptables → no more traffic to old pod
# 8. Old pod finishes graceful shutdown → terminates

# This is why readiness probes are critical for zero-downtime deployments
# Without readiness probe → traffic sent to pod before it's ready → errors

# kube-proxy logs
kubectl logs -n kube-system -l k8s-app=kube-proxy -f --tail=50

# kube-proxy health
kubectl exec -n kube-system \
  $(kubectl get pods -n kube-system -l k8s-app=kube-proxy -o name | head -1) \
  -- curl -s http://localhost:10249/healthz
PART 6: CONTROLLER MANAGER — The Reconciliation Engine
What It Is
kube-controller-manager is ONE binary that runs MANY controllers.
Each controller is a goroutine (lightweight thread) inside it.
All running simultaneously, all watching their own resources.

The controllers inside kube-controller-manager:

WORKLOAD CONTROLLERS:
  DeploymentController    → manages Deployments → creates ReplicaSets
  ReplicaSetController    → manages ReplicaSets → creates/deletes Pods
  StatefulSetController   → manages StatefulSets
  DaemonSetController     → manages DaemonSets
  JobController           → manages Jobs
  CronJobController       → manages CronJobs

NODE CONTROLLERS:
  NodeLifecycleController → watches node health, adds taints when unhealthy
  NodeIPAMController      → assigns pod CIDR ranges to nodes

RESOURCE CONTROLLERS:
  NamespaceController     → cleans up namespace resources on deletion
  ServiceAccountController→ creates default ServiceAccounts in namespaces
  EndpointSliceController → keeps EndpointSlices in sync with pod IPs
  PersistentVolumeController → binds PVCs to PVs

GARBAGE COLLECTION:
  GarbageCollectorController → deletes objects when owner is deleted
                                (Delete Deployment → GC deletes ReplicaSet
                                 → GC deletes Pods)
The Deployment Controller — Step by Step
You run: kubectl apply -f deployment.yaml (3 replicas)

Deployment Controller watches:
→ Sees new Deployment "api" with replicas=3
→ Checks: does a ReplicaSet exist for this template hash?
→ NO → creates ReplicaSet api-7d9f8b with replicas=3

ReplicaSet Controller watches:
→ Sees ReplicaSet api-7d9f8b wants 3 pods
→ Counts existing pods with label pod-template-hash=7d9f8b: 0
→ Gap: 3. Create 3 pods.
→ Creates Pod objects in etcd (no nodeName yet — just a spec)

Scheduler watches:
→ Sees 3 pods with no nodeName
→ Filters + scores nodes
→ Assigns nodeName to each pod
→ Writes assignments to etcd

kubelet on assigned nodes watch:
→ Sees pods assigned to their node
→ Pulls images, creates containers
→ Reports status: Running

ReplicaSet Controller watches again:
→ Now sees 3 pods in Running state with correct labels
→ Desired: 3, Actual: 3 → gap = 0 → nothing to do
→ But keeps watching forever. Any pod dies → gap appears → act.

NOW: You update the deployment (new image)

Deployment Controller:
→ Sees spec changed (template hash is different)
→ Creates NEW ReplicaSet api-8e9f0c with replicas=0
→ Scales new RS UP by 1 (respecting maxSurge)
→ Waits for new pod to be Ready
→ Scales old RS DOWN by 1 (respecting maxUnavailable)
→ Repeats until new RS = 3, old RS = 0
→ Old RS kept at replicas=0 (not deleted) for rollback

THIS IS THE ROLLING UPDATE. Built entirely from reconciliation loops.
Node Lifecycle Controller — What Happens When a Node Dies
NODE DIES (EC2 instance terminated, network partition, etc.)

T+0:    Node stops sending heartbeats to API server
        kubelet was sending node status every 10s

T+40s:  API server marks node condition Unknown
        (node-monitor-grace-period default: 40s)
        NodeLifecycleController adds taint:
        node.kubernetes.io/unreachable:NoSchedule
        node.kubernetes.io/unreachable:NoExecute
        (with tolerationSeconds: 300)

T+40-340s: Pods on dead node still "Running" in API server
           (API server only knows what kubelet reports)
           But node is unreachable — real state unknown

T+340s: tolerationSeconds expires (300s = 5 minutes)
        NodeLifecycleController evicts pods from dead node
        Pod objects get deletionTimestamp set

T+340s: Pods are now "Terminating" — but kubelet is dead
        Can't actually terminate them
        They stay Terminating until node comes back OR
        kubectl delete pod --force --grace-period=0

T+340s: ReplicaSet Controller sees pods are terminating
        Counts available pods: less than desired
        Creates NEW pods on healthy nodes
        New pods start running on other nodes

T+node_recovery: Node comes back online
                 kubelet reports: these pods should be running
                 API server: "These pods were deleted"
                 kubelet: kills orphaned containers
                 Cleanup complete.

TOTAL RECOVERY TIME: ~5-6 minutes by default
You can tune this:
  node-monitor-period: 5s (how often to check)
  node-monitor-grace-period: 40s (how long to wait before Unknown)
  pod-eviction-timeout: 300s (how long before evicting from dead node)
PART 7: THE PROJECT — Kill a Node, Watch the Cluster Think
Lab Setup — Local Cluster with kind
# ════════════════════════════════════════════════
# kind = Kubernetes in Docker
# Perfect for learning control plane internals
# Runs multi-node cluster on your laptop
# ════════════════════════════════════════════════

# Install kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.22.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Install kubectl (if not already)
curl -LO "https://dl.k8s.io/release/$(curl -L -s \
  https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl && sudo mv kubectl /usr/local/bin/

# ════════════════════════════════════════════════
# CREATE A MULTI-NODE KIND CLUSTER
# 1 control plane + 3 workers
# ════════════════════════════════════════════════

cat << 'EOF' | kind create cluster --name=cp-lab --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: ClusterConfiguration
    scheduler:
      extraArgs:
        v: "4"
    controllerManager:
      extraArgs:
        v: "4"
- role: worker
  labels:
    node-role: worker
    zone: a
- role: worker
  labels:
    node-role: worker
    zone: b
- role: worker
  labels:
    node-role: worker
    zone: c
EOF

# Verify cluster
kubectl get nodes -o wide
# NAME                     STATUS   ROLES           AGE   VERSION
# cp-lab-control-plane     Ready    control-plane   1m    v1.29.x
# cp-lab-worker            Ready    <none>          1m    v1.29.x
# cp-lab-worker2           Ready    <none>          1m    v1.29.x
# cp-lab-worker3           Ready    <none>          1m    v1.29.x

# See control plane components running as static pods
kubectl get pods -n kube-system
# kube-apiserver-cp-lab-control-plane
# kube-controller-manager-cp-lab-control-plane
# kube-scheduler-cp-lab-control-plane
# etcd-cp-lab-control-plane
Lab 1: etcd Deep Dive — Read the Raw Memory
# ════════════════════════════════════════════════
# Get inside etcd and read raw cluster state
# ════════════════════════════════════════════════

# Exec into the etcd container
docker exec -it cp-lab-control-plane bash

# Inside the container, set up etcdctl
export ETCDCTL_API=3
alias etcdctl='etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/peer.crt \
  --key=/etc/kubernetes/pki/etcd/peer.key'

# List ALL keys in etcd — see everything the cluster knows
etcdctl get / --prefix --keys-only

# Count total keys
etcdctl get / --prefix --keys-only | wc -l

# Read a specific namespace
etcdctl get /registry/namespaces/kube-system

# ════════════════════════════════════════════════
# OBSERVE etcd in real time
# ════════════════════════════════════════════════

# In terminal 1: watch etcd for changes to pods
etcdctl watch /registry/pods --prefix

# In terminal 2: create a pod
kubectl run test-pod --image=nginx --restart=Never

# Terminal 1 IMMEDIATELY shows:
# PUT /registry/pods/default/test-pod
# <binary protobuf data>
# This is the exact moment etcd is written.

# Now watch endpoint changes
etcdctl watch /registry/endpointslices --prefix &

# Scale a deployment
kubectl create deployment demo --image=nginx --replicas=3
kubectl scale deployment demo --replicas=5
# Watch etcdctl output — you'll see endpoint slice updates
# happening one by one as pods become ready

# Take a snapshot and inspect it
etcdctl snapshot save /tmp/snapshot.db
etcdctl snapshot status /tmp/snapshot.db --write-out=table

exit   # Exit the container
Lab 2: Scheduler — Watch It Place Pods
# ════════════════════════════════════════════════
# Watch the scheduler make decisions in real time
# ════════════════════════════════════════════════

# Stream scheduler logs (we set v=4 which shows decisions)
kubectl logs -n kube-system \
  kube-scheduler-cp-lab-control-plane -f &
SCHEDULER_LOGS_PID=$!

# Watch events in parallel
kubectl get events -w --field-selector reason=Scheduled &

# Now create pods and watch placement
kubectl apply - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: scheduling-demo
spec:
  replicas: 6
  selector:
    matchLabels:
      app: scheduling-demo
  template:
    metadata:
      labels:
        app: scheduling-demo
    spec:
      # Anti-affinity: spread across nodes
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchLabels:
                  app: scheduling-demo
              topologyKey: kubernetes.io/hostname
      containers:
      - name: demo
        image: nginx
        resources:
          requests:
            cpu: "50m"
            memory: "32Mi"
EOF

# Watch how scheduler distributes pods across 3 workers
kubectl get pods -o wide -w

# EXPECTED: 2 pods per worker node (6 pods / 3 nodes)
# Anti-affinity spreads them evenly

# ════════════════════════════════════════════════
# FORCE a scheduling decision — taint one node
# ════════════════════════════════════════════════

# Taint worker3 — no scheduling
kubectl taint nodes cp-lab-worker3 dedicated=special:NoSchedule

# Scale up — new pods should NOT go to worker3
kubectl scale deployment scheduling-demo --replicas=9

kubectl get pods -o wide
# All new pods go to worker and worker2 only
# worker3 has its original 2 pods but gets NO new ones

# Add toleration to one pod and scale further
kubectl patch deployment scheduling-demo --type=json \
  -p='[{"op":"add","path":"/spec/template/spec/tolerations","value":[{"key":"dedicated","operator":"Equal","value":"special","effect":"NoSchedule"}]}]'

kubectl scale deployment scheduling-demo --replicas=12
kubectl get pods -o wide
# Now new pods CAN go to worker3

# Remove taint
kubectl taint nodes cp-lab-worker3 dedicated=special:NoSchedule-

# ════════════════════════════════════════════════
# MAKE A POD UNSCHEDULABLE — watch it stay Pending
# ════════════════════════════════════════════════

kubectl apply - << 'EOF'
apiVersion: v1
kind: Pod
metadata:
  name: impossible-pod
spec:
  containers:
  - name: demo
    image: nginx
    resources:
      requests:
        cpu: "9999"    # More than entire cluster has
        memory: "9999Gi"
EOF

kubectl describe pod impossible-pod
# Events:
# Warning  FailedScheduling  default-scheduler
# 0/3 nodes are available:
# 3 Insufficient cpu.
# preemption: 0/3 nodes are available...

# Check scheduler logs — you'll see the filter decision
# "node cp-lab-worker: Insufficient cpu"
# "node cp-lab-worker2: Insufficient cpu"
# "node cp-lab-worker3: Insufficient cpu"

kubectl delete pod impossible-pod
kill $SCHEDULER_LOGS_PID
Lab 3: Kill a Node — Watch Full Reconciliation
# ════════════════════════════════════════════════
# THE MAIN EVENT — simulate a node failure
# Watch every control plane component react
# ════════════════════════════════════════════════

# SETUP: Deploy a workload across all nodes
kubectl apply - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: resilience-test
spec:
  replicas: 6
  selector:
    matchLabels:
      app: resilience-test
  template:
    metadata:
      labels:
        app: resilience-test
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchLabels:
                  app: resilience-test
              topologyKey: kubernetes.io/hostname
      containers:
      - name: demo
        image: nginx
        resources:
          requests:
            cpu: "10m"
            memory: "16Mi"
EOF

# Wait for all pods to be running and spread across nodes
kubectl get pods -o wide
# NAME                              NODE
# resilience-test-xxx-aaa   cp-lab-worker
# resilience-test-xxx-bbb   cp-lab-worker
# resilience-test-xxx-ccc   cp-lab-worker2
# resilience-test-xxx-ddd   cp-lab-worker2
# resilience-test-xxx-eee   cp-lab-worker3
# resilience-test-xxx-fff   cp-lab-worker3

# Record which pods are on worker3 (we'll kill this node)
WORKER3_PODS=$(kubectl get pods -o wide | grep worker3 | awk '{print $1}')
echo "Pods on worker3 (about to die): $WORKER3_PODS"

# ════════════════════════════════════════════════
# OPEN MONITORING TERMINALS BEFORE KILLING
# ════════════════════════════════════════════════

# Terminal 1: Watch node status
watch -n2 'kubectl get nodes'

# Terminal 2: Watch pod status across cluster
watch -n2 'kubectl get pods -o wide'

# Terminal 3: Watch events (the control plane's thought process)
kubectl get events -w --sort-by='.lastTimestamp'

# Terminal 4: Watch ReplicaSet status
watch -n2 'kubectl get replicasets'

# ════════════════════════════════════════════════
# KILL THE NODE — simulate failure
# ════════════════════════════════════════════════

echo "KILLING worker3 now..."
docker stop cp-lab-worker3

# ════════════════════════════════════════════════
# OBSERVE THE TIMELINE
# ════════════════════════════════════════════════

# T+0-10s: Node still shows Ready (last heartbeat not expired)
# Terminal 1: cp-lab-worker3   Ready   ← still showing Ready

# T+10-40s: Node stops reporting
# API server marks conditions Unknown
# Terminal 1: cp-lab-worker3   NotReady  ← here it is!

# T+40s: NodeLifecycleController adds taints:
# node.kubernetes.io/unreachable:NoSchedule
# node.kubernetes.io/unreachable:NoExecute (tolerationSeconds: 300)

# T+40-300s: Pods on dead node show: Status=Unknown
# Terminal 2: resilience-test-xxx-eee  Unknown  cp-lab-worker3
#             resilience-test-xxx-fff  Unknown  cp-lab-worker3

# T+300s: tolerationSeconds expires → pods get deleted from dead node
# ReplicaSet controller: desired=6, available=4, gap=2
# Creates 2 NEW pods on surviving nodes

# Terminal 2: You'll see 2 new pods appear on worker and worker2
# resilience-test-xxx-ggg   Running  cp-lab-worker
# resilience-test-xxx-hhh   Running  cp-lab-worker2

# TOTAL TIME: ~5-6 minutes from death to recovery

# ════════════════════════════════════════════════
# INVESTIGATE: What did the control plane think?
# ════════════════════════════════════════════════

# Check node conditions
kubectl describe node cp-lab-worker3

# Look for:
# Conditions:
#   Type                 Status    Reason
#   NetworkUnavailable   Unknown   NodeNotReady
#   MemoryPressure       Unknown   NodeStatusUnknownError
#   DiskPressure         Unknown   NodeStatusUnknownError
#   Ready                False     KubeletNotReady

# Check controller manager logs for eviction decisions
kubectl logs -n kube-system \
  kube-controller-manager-cp-lab-control-plane \
  | grep -E "evict|taint|node" | tail -30

# Check what events the control plane generated
kubectl get events --sort-by='.lastTimestamp' | grep -E "worker3|evict|taint"

# ════════════════════════════════════════════════
# BRING THE NODE BACK — watch re-registration
# ════════════════════════════════════════════════

docker start cp-lab-worker3

# Watch node come back
watch -n2 'kubectl get nodes'

# T+0: Node starts
# T+5s: kubelet starts, registers with API server
# T+5-30s: Node in NotReady (kubelet running, containers not yet ready)
# T+30s: Node becomes Ready

# Taints automatically removed by NodeLifecycleController
# New pods will be scheduled here again on next deployment

# The pods that were replaced are NOT moved back
# Kubernetes doesn't rebalance by default after recovery
# (You'd need Descheduler for that)

kubectl get pods -o wide
# Worker3 has NO pods — they're on other nodes
# This is expected behavior

# ════════════════════════════════════════════════
# SPEED UP RECOVERY — tune the timeouts
# ════════════════════════════════════════════════

# Default: 5 minutes to evict from dead node — TOO SLOW for most apps
# Tune node-monitor-grace-period and pod-eviction-timeout

# On kubeadm: edit controller manager manifest
# --node-monitor-period=2s
# --node-monitor-grace-period=20s   (down from 40s)
# Add to pod spec:
# tolerationSeconds: 60             (down from 300s — 1 minute)

# With tuned settings: recovery in ~80 seconds vs 5+ minutes

# Test with tuned settings:
# Add tolerance to deployment spec:
kubectl patch deployment resilience-test --type=json -p='[
  {"op":"add",
   "path":"/spec/template/spec/tolerations",
   "value":[
     {"key":"node.kubernetes.io/unreachable",
      "operator":"Exists",
      "effect":"NoExecute",
      "tolerationSeconds": 60},
     {"key":"node.kubernetes.io/not-ready",
      "operator":"Exists",
      "effect":"NoExecute",
      "tolerationSeconds": 60}
   ]}
]'

# Now kill worker3 again
docker stop cp-lab-worker3

# Watch: pods evicted in 60 seconds instead of 300
watch -n2 'kubectl get pods -o wide'

# Bring it back
docker start cp-lab-worker3
Lab 4: Observe the API Server Request Pipeline
# ════════════════════════════════════════════════
# See EVERY step a request takes through the pipeline
# ════════════════════════════════════════════════

# Run kubectl with maximum verbosity
kubectl get pods -v=9 2>&1 | head -50

# You'll see:
# I0101 12:00:00 loader.go] Config loaded from file: /root/.kube/config
# I0101 12:00:00 round_trippers.go] GET https://127.0.0.1:PORT/api/v1/namespaces/default/pods
# I0101 12:00:00 round_trippers.go] Request Headers:
#     Accept: application/json;as=Table...
#     Authorization: Bearer <token>
# I0101 12:00:00 round_trippers.go] Response Status: 200 OK

# Watch admission controller decisions
# Create a pod that violates LimitRange
kubectl apply - << 'EOF'
apiVersion: v1
kind: LimitRange
metadata:
  name: demo-limits
  namespace: default
spec:
  limits:
  - type: Container
    max:
      cpu: "200m"
      memory: "256Mi"
    defaultRequest:
      cpu: "50m"
      memory: "64Mi"
EOF

# Try to create pod exceeding limits
kubectl run limit-test --image=nginx \
  --requests=cpu=1000m --limits=cpu=1000m

# Error from server: pods "limit-test" is forbidden:
# maximum cpu usage per Container is 200m, but limit is 1

# LimitRange admission controller REJECTED the request
# This happened in Stage 4 of our pipeline

# ════════════════════════════════════════════════
# Watch the watch mechanism directly
# ════════════════════════════════════════════════

# Open a raw watch connection to API server
# This is EXACTLY what controllers do internally

kubectl get pods --watch -v=8 2>&1 | grep -E "GET|watch|event"

# You'll see:
# GET .../pods?watch=true&resourceVersion=12345
# (connection stays open)
# When any pod changes → API server sends the event
# Watcher receives: {"type":"MODIFIED","object":{...}}

# ════════════════════════════════════════════════
# Audit the API server — see everything happening
# ════════════════════════════════════════════════

# API server audit log shows every request:
# Who made it, what they did, what the response was
# On kind cluster — enable audit logging:

docker exec cp-lab-control-plane cat \
  /etc/kubernetes/manifests/kube-apiserver.yaml | grep audit

# In production, configure audit policy:
cat << 'EOF'
# audit-policy.yaml
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
# Log secret access at Metadata level (who accessed, not content)
- level: Metadata
  resources:
  - group: ""
    resources: ["secrets"]

# Log pod execution (kubectl exec)
- level: RequestResponse
  verbs: ["create"]
  resources:
  - group: ""
    resources: ["pods/exec", "pods/portforward", "pods/attach"]

# Log all writes in detail
- level: RequestResponse
  verbs: ["create", "update", "patch", "delete"]

# Don't log read-only requests to avoid log flood
- level: None
  verbs: ["get", "list", "watch"]
EOF

# Analyze audit logs for security events
# "who deleted that deployment?"
cat /var/log/kubernetes/audit.log | \
  jq 'select(.verb=="delete" and .objectRef.resource=="deployments") |
      {user: .user.username, time: .requestReceivedTimestamp,
       name: .objectRef.name, namespace: .objectRef.namespace}'
Lab 5: kubelet — Watch It Manage Containers
# ════════════════════════════════════════════════
# Get inside a node and watch kubelet work
# ════════════════════════════════════════════════

# Exec into a worker node
docker exec -it cp-lab-worker bash

# kubelet manages containers via containerd
# See all running containers (not just k8s)
ctr --namespace k8s.io containers list

# See running tasks (actual container processes)
ctr --namespace k8s.io tasks list

# kubelet's view of pods on this node
curl -sk https://localhost:10250/pods \
  --cert /var/lib/kubelet/pki/kubelet-client-current.pem \
  --key /var/lib/kubelet/pki/kubelet-client-current.pem \
  | jq '.items[].metadata.name'

# Container metrics from kubelet (cadvisor)
curl -sk https://localhost:10250/metrics/cadvisor \
  | grep container_memory_working_set_bytes | head -5

# cgroups that kubelet created for pods
ls /sys/fs/cgroup/kubepods/
# burstable/
# besteffort/
# guaranteed/

ls /sys/fs/cgroup/kubepods/burstable/
# pod<uid>/   ← one directory per pod
#   <container-id>/  ← one per container

# See CPU limit for a container (cgroup)
cat /sys/fs/cgroup/kubepods/burstable/pod<uid>/<container-id>/cpu.max
# 50000 100000
# = 50ms CPU per 100ms period = 50% CPU cap

# THIS IS THE CGROUP FROM MODULE 1!
# The same cgroups you learned about are what kubelet creates
# for every container's resource limits.
# Everything connects.

exit

# ════════════════════════════════════════════════
# Watch kubelet restart a container
# ════════════════════════════════════════════════

# Create a pod with a liveness probe that will fail
kubectl apply - << 'EOF'
apiVersion: v1
kind: Pod
metadata:
  name: liveness-demo
spec:
  containers:
  - name: demo
    image: busybox
    command: ["/bin/sh", "-c"]
    args:
    - |
      touch /tmp/healthy
      sleep 30
      rm /tmp/healthy
      sleep 600
    livenessProbe:
      exec:
        command: ["cat", "/tmp/healthy"]
      initialDelaySeconds: 5
      periodSeconds: 5
      failureThreshold: 3
EOF

# Watch kubelet run the probe and restart the container
kubectl get pod liveness-demo -w

# After 30s file is deleted → probe fails
# After 3 failures (15s) → container restarted
# RESTARTS column increments

kubectl describe pod liveness-demo
# Events:
# Warning  Unhealthy  Liveness probe failed: cat: /tmp/healthy: No such file or directory
# Normal   Killing    Container demo failed liveness probe, will be restarted
# Normal   Started    Started container demo

kubectl delete pod liveness-demo
Lab 6: kube-proxy — Watch Network Rules Update
# ════════════════════════════════════════════════
# Watch iptables rules change as pods come and go
# ════════════════════════════════════════════════

# Exec into a worker node
docker exec -it cp-lab-worker bash

# Count current KUBE rules
iptables -t nat -L | grep -c KUBE
echo "Current KUBE iptables rules: $(iptables -t nat -L | grep -c KUBE)"

# In another terminal: create a service
kubectl create deployment iptables-demo \
  --image=nginx --replicas=3
kubectl expose deployment iptables-demo --port=80

# Back in the node: watch rules appear
watch -n1 'iptables -t nat -L | grep -c KUBE'
# Number increases as kube-proxy adds rules for the new service

# Find the specific rules for our service
SVC_IP=$(kubectl get svc iptables-demo \
  -o jsonpath='{.spec.clusterIP}')
echo "Service ClusterIP: $SVC_IP"

iptables -t nat -L -n | grep $SVC_IP
# KUBE-SVC-XXXXX  tcp  --  0.0.0.0/0  10.96.x.x  tcp dpt:80

# See the actual pod IPs in the endpoint chains
iptables -t nat -L KUBE-SVC-XXXXX -n
# KUBE-SEP-AAA  all  --  0.0.0.0/0  0.0.0.0/0  statistic mode random probability 0.33
# KUBE-SEP-BBB  all  --  0.0.0.0/0  0.0.0.0/0  statistic mode random probability 0.50
# KUBE-SEP-CCC  all  --  0.0.0.0/0  0.0.0.0/0

# Scale down — watch rules disappear
kubectl scale deployment iptables-demo --replicas=1

# Rules for removed pods are deleted by kube-proxy
iptables -t nat -L KUBE-SVC-XXXXX -n
# Only 1 endpoint chain now

# Clean up
kubectl delete deployment iptables-demo
kubectl delete svc iptables-demo
exit
PART 8: THE DELIVERABLE — Control Plane Explanation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTROL PLANE DEEP DIVE — PRODUCTION REFERENCE DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CORE PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Kubernetes is a distributed state machine built entirely on
reconciliation loops. Every controller runs the same pattern:
Watch → Compare → Act → Repeat.
The desired state lives in etcd.
Reality lives on nodes.
Controllers exist solely to close the gap between the two.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

etcd
  Role: Distributed key-value store. Single source of truth.
  Protocol: Raft consensus (leader election, quorum writes)
  Data: /registry/* (protobuf encoded)
  Critical: Backup every hour. Test restore quarterly.
            Fast SSD required (< 10ms p99 write latency)
            Encrypt at rest. Never expose publicly.
  Failure mode: Lose quorum → cluster read-only or dead.

kube-apiserver
  Role: The gate. ALL traffic flows through it.
  Pipeline: TLS → AuthN → AuthZ → Admission → etcd → Watch
  Watch: Persistent HTTP connections pushed to controllers
  Critical: Run behind a load balancer. Multi-replica.
            Enable audit logging in production.
            Monitor: request latency, error rate, inflight requests.
  Failure mode: All kubectl commands fail.
                Controllers lose their watch stream.
                kubelet can't report status.
                Cluster blind and deaf.

kube-scheduler
  Role: Assigns pods to nodes via filter + score algorithm.
  Phase 1 Filter: eliminates nodes that CANNOT host the pod
  Phase 2 Score: ranks remaining nodes, picks the best
  Watch: Only unscheduled pods (spec.nodeName = "")
  Critical: Tune for your workload (LeastAllocated vs MostAllocated)
            Use PodTopologySpread for even distribution
            Use PodAntiAffinity for HA across AZs
  Failure mode: New pods stay Pending indefinitely.
                Existing pods keep running (scheduler not in data path).

kube-controller-manager
  Role: Runs all reconciliation controllers as goroutines
  Key controllers: Deployment, ReplicaSet, StatefulSet,
                   NodeLifecycle, EndpointSlice, GarbageCollector
  Node failure handling:
    T+40s: marks node Unknown, adds unreachable taints
    T+5min: evicts pods from dead node (triggers rescheduling)
  Critical: Tune pod-eviction-timeout for your SLA
            Watch leader election metrics (only 1 active at a time)
  Failure mode: No self-healing. Pods die and stay dead.
                Deployments stuck. Node failures not handled.

kubelet
  Role: Node agent. Only component that runs containers.
  Manages: Pod lifecycle, probes, volumes, cgroups, status reporting
  Static pods: /etc/kubernetes/manifests/ — runs control plane itself
  Heartbeat: Every 10s to API server (node-status-update-frequency)
  Critical: Watch PLEG health — if unhealthy, node goes NotReady
            Monitor kubelet logs for image pull errors, OOM events
            Tune eviction thresholds for your node size
  Failure mode: Containers keep running (kernel keeps them alive)
                API server loses node health visibility after 40s
                New pods cannot be scheduled here
                Existing pods eventually evicted

kube-proxy
  Role: Programs network rules (iptables/IPVS) for Service routing
  Mode: iptables (default, O(n)) or IPVS (preferred at scale, O(1))
  Watch: Services and EndpointSlices
  Updates: Instant when endpoints change (pod ready/not-ready)
  Critical: Use IPVS mode for clusters with > 1000 services
            Monitor: kube_proxy_sync_proxy_rules_duration_seconds
  Failure mode: Service IPs stop working — new connections fail.
                Existing TCP connections continue (kernel state preserved).
                Pod-to-pod direct communication still works (CNI not kube-proxy).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NODE FAILURE TIMELINE (default settings)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
T+0s:    Node stops sending heartbeats
T+40s:   API server marks node NotReady/Unknown
         Taints added: unreachable:NoSchedule, unreachable:NoExecute
T+5min:  tolerationSeconds expires
         Pods deleted from dead node
         ReplicaSet controller creates replacements on healthy nodes
T+5m30s: New pods Running on healthy nodes
         Service traffic fully restored

TUNED (production recommendation):
T+0s:    Node fails
T+20s:   Marked Unknown (node-monitor-grace-period: 20s)
T+80s:   Pods evicted (tolerationSeconds: 60s)
T+90s:   Replacement pods Running
Total recovery: ~90 seconds vs 5+ minutes default

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT TO MONITOR IN PRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
etcd:
  etcd_disk_wal_fsync_duration_seconds (p99 < 10ms)
  etcd_server_leader_changes_seen_total (should be near 0)
  etcd_mvcc_db_total_size_in_bytes (alert at 6GB, hard limit 8GB)

API server:
  apiserver_request_duration_seconds (p99 < 1s)
  apiserver_request_total{code="500"} (should be 0)
  apiserver_current_inflight_requests (alert if near max)

Scheduler:
  scheduler_scheduling_duration_seconds (p99 < 100ms)
  scheduler_pending_pods (alert if > 0 for > 5 minutes)

Controller manager:
  workqueue_queue_duration_seconds (should be low)
  node_controller_unhealthy_nodes (alert if > 0)

kubelet (per node):
  kubelet_pleg_relist_duration_seconds (alert if > 10s)
  kubelet_running_containers (total per node)
  container_oom_events_total (alert if > 0)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR COMPLETE CHECKLIST
CONCEPTS — explain to someone without notes:
□ Explain the Raft consensus algorithm in plain English
□ Explain why all communication goes through API server
□ Walk through every stage of the API server request pipeline
□ Explain the two phases of scheduler decision making
□ Explain what controllers do and the reconciliation pattern
□ Explain kubelet's role and why it's the only one that
  actually runs containers
□ Explain how kube-proxy makes Service IPs work
□ Draw the exact timeline of what happens when a node dies
□ Explain why etcd backup is the most critical operational task

LABS — done with your own hands:
□ kind cluster created: 1 control plane + 3 workers
□ etcd keys listed and raw values read
□ etcdctl watch open — observed live changes during kubectl apply
□ etcd snapshot taken and verified
□ Scheduler logs tailed at v=4 during pod creation
□ Pod made unschedulable — diagnosed why via describe
□ Node tainted — observed scheduler avoiding it
□ Worker node killed (docker stop) — full timeline observed
□ Replacement pods appeared on healthy nodes — confirmed
□ Node brought back — re-registration observed
□ kubelet liveness probe failure observed — container restarted
□ iptables rules watched changing during service scale up/down

DELIVERABLE:
□ Control plane component reference written in your own words
□ Node failure timeline documented with actual timestamps
□ Production monitoring metrics list compiled
□ Personal runbook: "what to check when X breaks"
Six modules deep. You now know Kubernetes from the outside in AND from the inside out. You understand the exact byte-level flow from kubectl apply through the API server's admission pipeline into etcd and out through watch notifications to the controllers that schedule pods onto nodes where kubelet creates cgroups and containerd runs your containers.
This is the knowledge that gets you trusted with the cluster.
Go run every lab. Kill that node. Watch the cluster think. Come back when you've seen every event fire in real time.





# Production EKS 🚀

## Your Senior DevSecOps Mentor Speaking

Every module so far has been building to this moment. Linux internals, networking, IAM, multi-tier architecture, cost modeling, Kubernetes fundamentals, control plane internals — all of it was the foundation.

Now we build the real thing. Production EKS. The way companies actually run it. Private cluster, zero public exposure, workload identity via IRSA, automatic TLS, full observability stack.

This is what you put on your resume. This is what you demo in interviews. This is what you run at 3am when the pager goes off.

Let's build it right, from scratch, the production way.

---

# THE MASTER MENTAL MODEL FIRST

```
WHAT WE'RE BUILDING AND WHY EACH PIECE EXISTS

                         INTERNET
                             │
                             │ HTTPS only (443)
                             ▼
                    ┌─────────────────┐
                    │   Route 53      │
                    │  DNS → ALB      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  AWS ALB        │ ← Created by AWS Load Balancer
                    │  (public)       │   Controller from Ingress objects
                    └────────┬────────┘
                             │ HTTP (inside VPC only)
                             ▼
┌────────────────────────────────────────────────────────┐
│                    PRIVATE VPC                          │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              EKS CONTROL PLANE                  │   │
│  │         (Managed by AWS — you never             │   │
│  │          touch these nodes directly)            │   │
│  │  API Server │ etcd │ Scheduler │ Controllers    │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │ Private API endpoint only     │
│                         ▼                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │           PRIVATE NODE GROUPS                    │  │
│  │                                                  │  │
│  │  ┌─────────────┐  ┌─────────────┐               │  │
│  │  │  app-nodes  │  │ system-nodes│               │  │
│  │  │ t3.medium×3 │  │t3.small×2  │               │  │
│  │  │ (your apps) │  │(monitoring) │               │  │
│  │  └─────────────┘  └─────────────┘               │  │
│  └──────────────────────────────────────────────────┘  │
│                         │                               │
│                    NAT Gateway                          │
│                    (outbound only)                      │
└────────────────────────────────────────────────────────┘

WHY PRIVATE CLUSTER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ No public IP on any node — attackers can't find them
→ API server not on internet — no chance of kubectl from outside
  without VPN/bastion
→ Only the ALB is public — everything else is private
→ This is the standard for any serious production cluster

WHY IRSA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Pods get AWS IAM permissions WITHOUT access keys
→ No secrets to rotate, no secrets to leak
→ Fine-grained: each pod gets only what IT needs
→ Audit trail: CloudTrail shows which pod did what

WHY CERT-MANAGER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Automatic TLS certificates from Let's Encrypt
→ Automatic renewal before expiry
→ Zero manual certificate management
→ Every Ingress gets HTTPS automatically

WHY PROMETHEUS + GRAFANA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ You can't fix what you can't see
→ Prometheus scrapes every component every 15s
→ Grafana visualizes — you see problems before users do
→ AlertManager pages you before the CEO does
```

---

# PART 1: PREREQUISITES AND TOOLCHAIN

## Install Every Tool You Need

```bash
# ════════════════════════════════════════════════
# TOOLS — install all of these before starting
# Each one has a specific job
# ════════════════════════════════════════════════

# 1. AWS CLI v2 — talk to AWS APIs
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" \
  -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version

# Configure with your credentials
aws configure
# AWS Access Key ID: <your-key>
# AWS Secret Access Key: <your-secret>
# Default region name: us-east-1
# Default output format: json

# Verify identity
aws sts get-caller-identity

# 2. eksctl — THE EKS cluster manager
# Does in one command what would take 500 lines of CloudFormation
curl --silent --location \
  "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_Linux_amd64.tar.gz" \
  | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version

# 3. kubectl — Kubernetes CLI
curl -LO "https://dl.k8s.io/release/$(curl -L -s \
  https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin
kubectl version --client

# 4. helm — Kubernetes package manager
# Think: apt/yum but for Kubernetes apps
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
helm version

# 5. k9s — Terminal UI for Kubernetes (install this everywhere)
# Makes navigating a cluster 10x faster than raw kubectl
curl -sS https://webinstall.dev/k9s | bash
# Or:
wget https://github.com/derailed/k9s/releases/latest/download/k9s_Linux_amd64.tar.gz
tar xz -C /tmp -f k9s_Linux_amd64.tar.gz
sudo mv /tmp/k9s /usr/local/bin

# 6. kubectx + kubens — switch contexts and namespaces fast
sudo git clone https://github.com/ahmetb/kubectx /opt/kubectx
sudo ln -s /opt/kubectx/kubectx /usr/local/bin/kubectx
sudo ln -s /opt/kubectx/kubens /usr/local/bin/kubens

# 7. stern — multi-pod log tailing (essential in production)
curl -Lo stern https://github.com/stern/stern/releases/latest/download/stern_linux_amd64
chmod +x stern && sudo mv stern /usr/local/bin

# 8. jq — JSON processor (you'll use this constantly)
sudo apt-get install -y jq   # Ubuntu/Debian
# sudo yum install -y jq     # RHEL/Amazon Linux

# Verify all tools
echo "=== Tool Versions ==="
aws --version
eksctl version
kubectl version --client --short
helm version --short
k9s version
jq --version
```

---

# PART 2: VPC FOUNDATION — Network Before Cluster

```bash
# ════════════════════════════════════════════════
# Environment variables — set these first
# Reference them throughout the entire build
# ════════════════════════════════════════════════

export AWS_REGION="us-east-1"
export CLUSTER_NAME="prod-eks"
export ACCOUNT_ID=$(aws sts get-caller-identity \
  --query Account --output text)
export VPC_CIDR="10.0.0.0/16"

echo "Account: $ACCOUNT_ID"
echo "Region: $AWS_REGION"
echo "Cluster: $CLUSTER_NAME"

# ════════════════════════════════════════════════
# CREATE VPC
# ════════════════════════════════════════════════

VPC_ID=$(aws ec2 create-vpc \
  --cidr-block $VPC_CIDR \
  --tag-specifications \
    "ResourceType=vpc,Tags=[
      {Key=Name,Value=${CLUSTER_NAME}-vpc},
      {Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=shared}
    ]" \
  --query 'Vpc.VpcId' --output text)

aws ec2 modify-vpc-attribute \
  --vpc-id $VPC_ID --enable-dns-hostnames
aws ec2 modify-vpc-attribute \
  --vpc-id $VPC_ID --enable-dns-support

echo "VPC: $VPC_ID"

# ════════════════════════════════════════════════
# SUBNETS — 2 public (ALB) + 2 private (nodes)
# Tags are CRITICAL for EKS and ALB controller
# ════════════════════════════════════════════════

# PUBLIC subnets — ALB and NAT GW live here
# Tag: kubernetes.io/role/elb=1 tells ALB controller to use these
PUB_1A=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block "10.0.1.0/24" \
  --availability-zone "${AWS_REGION}a" \
  --tag-specifications "ResourceType=subnet,Tags=[
    {Key=Name,Value=${CLUSTER_NAME}-public-1a},
    {Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=shared},
    {Key=kubernetes.io/role/elb,Value=1}
  ]" \
  --query 'Subnet.SubnetId' --output text)

PUB_1B=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block "10.0.2.0/24" \
  --availability-zone "${AWS_REGION}b" \
  --tag-specifications "ResourceType=subnet,Tags=[
    {Key=Name,Value=${CLUSTER_NAME}-public-1b},
    {Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=shared},
    {Key=kubernetes.io/role/elb,Value=1}
  ]" \
  --query 'Subnet.SubnetId' --output text)

# PRIVATE subnets — EKS nodes live here
# Tag: kubernetes.io/role/internal-elb=1 for internal LBs
PRIV_1A=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block "10.0.3.0/24" \
  --availability-zone "${AWS_REGION}a" \
  --tag-specifications "ResourceType=subnet,Tags=[
    {Key=Name,Value=${CLUSTER_NAME}-private-1a},
    {Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=owned},
    {Key=kubernetes.io/role/internal-elb,Value=1}
  ]" \
  --query 'Subnet.SubnetId' --output text)

PRIV_1B=$(aws ec2 create-subnet \
  --vpc-id $VPC_ID \
  --cidr-block "10.0.4.0/24" \
  --availability-zone "${AWS_REGION}b" \
  --tag-specifications "ResourceType=subnet,Tags=[
    {Key=Name,Value=${CLUSTER_NAME}-private-1b},
    {Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=owned},
    {Key=kubernetes.io/role/internal-elb,Value=1}
  ]" \
  --query 'Subnet.SubnetId' --output text)

# Auto-assign public IPs in public subnets
aws ec2 modify-subnet-attribute \
  --subnet-id $PUB_1A --map-public-ip-on-launch
aws ec2 modify-subnet-attribute \
  --subnet-id $PUB_1B --map-public-ip-on-launch

echo "Public 1a: $PUB_1A | Public 1b: $PUB_1B"
echo "Private 1a: $PRIV_1A | Private 1b: $PRIV_1B"

# ════════════════════════════════════════════════
# INTERNET GATEWAY
# ════════════════════════════════════════════════

IGW_ID=$(aws ec2 create-internet-gateway \
  --tag-specifications \
    "ResourceType=internet-gateway,Tags=[{Key=Name,Value=${CLUSTER_NAME}-igw}]" \
  --query 'InternetGateway.InternetGatewayId' --output text)

aws ec2 attach-internet-gateway \
  --internet-gateway-id $IGW_ID --vpc-id $VPC_ID

echo "IGW: $IGW_ID"

# ════════════════════════════════════════════════
# NAT GATEWAYS — one per AZ for true HA
# Private nodes need outbound internet (AWS APIs, image pulls)
# But no inbound — security
# ════════════════════════════════════════════════

EIP_1A=$(aws ec2 allocate-address --domain vpc \
  --tag-specifications \
    "ResourceType=elastic-ip,Tags=[{Key=Name,Value=${CLUSTER_NAME}-nat-1a}]" \
  --query 'AllocationId' --output text)

EIP_1B=$(aws ec2 allocate-address --domain vpc \
  --tag-specifications \
    "ResourceType=elastic-ip,Tags=[{Key=Name,Value=${CLUSTER_NAME}-nat-1b}]" \
  --query 'AllocationId' --output text)

NAT_1A=$(aws ec2 create-nat-gateway \
  --subnet-id $PUB_1A \
  --allocation-id $EIP_1A \
  --tag-specifications \
    "ResourceType=natgateway,Tags=[{Key=Name,Value=${CLUSTER_NAME}-nat-1a}]" \
  --query 'NatGateway.NatGatewayId' --output text)

NAT_1B=$(aws ec2 create-nat-gateway \
  --subnet-id $PUB_1B \
  --allocation-id $EIP_1B \
  --tag-specifications \
    "ResourceType=natgateway,Tags=[{Key=Name,Value=${CLUSTER_NAME}-nat-1b}]" \
  --query 'NatGateway.NatGatewayId' --output text)

echo "Waiting for NAT Gateways..."
aws ec2 wait nat-gateway-available --nat-gateway-ids $NAT_1A $NAT_1B
echo "NAT GW 1a: $NAT_1A | NAT GW 1b: $NAT_1B"

# ════════════════════════════════════════════════
# ROUTE TABLES
# Public → IGW
# Private 1a → NAT 1a (AZ-local routing)
# Private 1b → NAT 1b (AZ-local routing)
# ════════════════════════════════════════════════

# Public route table
PUB_RT=$(aws ec2 create-route-table --vpc-id $VPC_ID \
  --tag-specifications \
    "ResourceType=route-table,Tags=[{Key=Name,Value=${CLUSTER_NAME}-public-rt}]" \
  --query 'RouteTable.RouteTableId' --output text)

aws ec2 create-route --route-table-id $PUB_RT \
  --destination-cidr-block 0.0.0.0/0 --gateway-id $IGW_ID

aws ec2 associate-route-table \
  --route-table-id $PUB_RT --subnet-id $PUB_1A
aws ec2 associate-route-table \
  --route-table-id $PUB_RT --subnet-id $PUB_1B

# Private route table 1a — routes to its own AZ's NAT GW
PRIV_RT_1A=$(aws ec2 create-route-table --vpc-id $VPC_ID \
  --tag-specifications \
    "ResourceType=route-table,Tags=[{Key=Name,Value=${CLUSTER_NAME}-private-rt-1a}]" \
  --query 'RouteTable.RouteTableId' --output text)

aws ec2 create-route --route-table-id $PRIV_RT_1A \
  --destination-cidr-block 0.0.0.0/0 --nat-gateway-id $NAT_1A

aws ec2 associate-route-table \
  --route-table-id $PRIV_RT_1A --subnet-id $PRIV_1A

# Private route table 1b — routes to its own AZ's NAT GW
PRIV_RT_1B=$(aws ec2 create-route-table --vpc-id $VPC_ID \
  --tag-specifications \
    "ResourceType=route-table,Tags=[{Key=Name,Value=${CLUSTER_NAME}-private-rt-1b}]" \
  --query 'RouteTable.RouteTableId' --output text)

aws ec2 create-route --route-table-id $PRIV_RT_1B \
  --destination-cidr-block 0.0.0.0/0 --nat-gateway-id $NAT_1B

aws ec2 associate-route-table \
  --route-table-id $PRIV_RT_1B --subnet-id $PRIV_1B

# ════════════════════════════════════════════════
# VPC ENDPOINTS — critical for private cluster
# Without these: ALL API calls go through NAT GW
# = expensive + slow + unnecessary
# With these: API calls stay inside AWS backbone = free + fast
# ════════════════════════════════════════════════

# S3 Gateway Endpoint (free — always add this)
aws ec2 create-vpc-endpoint \
  --vpc-id $VPC_ID \
  --service-name com.amazonaws.${AWS_REGION}.s3 \
  --route-table-ids $PRIV_RT_1A $PRIV_RT_1B \
  --vpc-endpoint-type Gateway \
  --tag-specifications \
    "ResourceType=vpc-endpoint,Tags=[{Key=Name,Value=${CLUSTER_NAME}-s3-endpoint}]"

# Interface endpoints for private cluster
# These allow nodes to reach AWS services WITHOUT NAT GW
# Each costs ~$7/month but saves NAT GW costs + latency

# Security group for interface endpoints
EP_SG=$(aws ec2 create-security-group \
  --group-name "${CLUSTER_NAME}-vpc-endpoints-sg" \
  --description "VPC Endpoints security group" \
  --vpc-id $VPC_ID \
  --query 'GroupId' --output text)

aws ec2 authorize-security-group-ingress \
  --group-id $EP_SG \
  --protocol tcp --port 443 --cidr $VPC_CIDR

# Create interface endpoints for critical services
for SERVICE in \
  "ec2" \
  "ecr.api" \
  "ecr.dkr" \
  "sts" \
  "logs" \
  "ssm" \
  "ssmmessages" \
  "ec2messages" \
  "autoscaling"
do
  echo "Creating endpoint for: $SERVICE"
  aws ec2 create-vpc-endpoint \
    --vpc-id $VPC_ID \
    --service-name com.amazonaws.${AWS_REGION}.${SERVICE} \
    --vpc-endpoint-type Interface \
    --subnet-ids $PRIV_1A $PRIV_1B \
    --security-group-ids $EP_SG \
    --private-dns-enabled \
    --tag-specifications \
      "ResourceType=vpc-endpoint,Tags=[{Key=Name,Value=${CLUSTER_NAME}-${SERVICE}-endpoint}]"
done

echo "✅ VPC and networking complete"
echo "VPC: $VPC_ID"
echo "Public: $PUB_1A, $PUB_1B"
echo "Private: $PRIV_1A, $PRIV_1B"
```

---

# PART 3: EKS CLUSTER — The Heart

```bash
# ════════════════════════════════════════════════
# CREATE EKS CLUSTER
# eksctl handles: IAM roles, security groups,
# CloudFormation stacks, kubeconfig update
# ════════════════════════════════════════════════

cat << EOF | eksctl create cluster -f -
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: ${CLUSTER_NAME}
  region: ${AWS_REGION}
  version: "1.29"
  tags:
    Project: production
    ManagedBy: eksctl
    Environment: production

# PRIVATE CLUSTER CONFIG
# API server only accessible from inside the VPC
privateCluster:
  enabled: true
  additionalEndpointServices:
  - "autoscaling"
  - "cloudformation"

# Use existing VPC we created
vpc:
  id: "${VPC_ID}"
  subnets:
    public:
      ${AWS_REGION}a:
        id: "${PUB_1A}"
      ${AWS_REGION}b:
        id: "${PUB_1B}"
    private:
      ${AWS_REGION}a:
        id: "${PRIV_1A}"
      ${AWS_REGION}b:
        id: "${PRIV_1B}"
  clusterEndpoints:
    privateAccess: true
    publicAccess: false   # NO public API server endpoint

# OIDC provider — required for IRSA
iam:
  withOIDC: true
  serviceAccounts: []   # We create these separately

# CloudWatch logging for control plane
cloudWatch:
  clusterLogging:
    enable:
    - api
    - audit
    - authenticator
    - controllerManager
    - scheduler
    logRetentionInDays: 30

# EKS add-ons — managed by AWS
addons:
- name: vpc-cni
  version: latest
  attachPolicyARNs:
  - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy
- name: coredns
  version: latest
- name: kube-proxy
  version: latest
- name: aws-ebs-csi-driver
  version: latest
  wellKnownPolicies:
    ebsCSIController: true

# NODE GROUPS — two groups for separation of concerns
managedNodeGroups:

# System node group — runs cluster infrastructure
# (ingress controller, cert-manager, prometheus, grafana)
- name: system-nodes
  instanceType: t3.medium
  minSize: 2
  maxSize: 4
  desiredCapacity: 2
  privateNetworking: true
  availabilityZones:
  - ${AWS_REGION}a
  - ${AWS_REGION}b
  labels:
    node-role: system
    workload-type: infrastructure
  taints:
  - key: workload-type
    value: infrastructure
    effect: NoSchedule
  tags:
    NodeGroup: system
    Project: production
  iam:
    attachPolicyARNs:
    - arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy
    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy
    - arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
    withAddonPolicies:
      cloudWatch: true
      albIngress: true
      autoScaler: true
      ebs: true

# Application node group — runs your workloads
- name: app-nodes
  instanceType: t3.medium
  minSize: 2
  maxSize: 10
  desiredCapacity: 3
  privateNetworking: true
  availabilityZones:
  - ${AWS_REGION}a
  - ${AWS_REGION}b
  labels:
    node-role: application
    workload-type: application
  tags:
    NodeGroup: application
    Project: production
  iam:
    attachPolicyARNs:
    - arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy
    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy
    - arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
    withAddonPolicies:
      cloudWatch: true
      autoScaler: true
      ebs: true
EOF

# This takes 15-20 minutes — it's creating:
# → EKS control plane (managed by AWS)
# → 2 node groups (EC2 Auto Scaling Groups)
# → IAM roles for nodes
# → Security groups
# → kubeconfig on your machine

# When done, verify:
kubectl get nodes -o wide
kubectl get nodes -L node-role,workload-type

# Should see:
# cp-lab-system-xxx    Ready   node-role=system
# cp-lab-system-yyy    Ready   node-role=system
# cp-lab-app-aaa       Ready   node-role=application
# cp-lab-app-bbb       Ready   node-role=application
# cp-lab-app-ccc       Ready   node-role=application

# Check OIDC provider was created
aws eks describe-cluster \
  --name $CLUSTER_NAME \
  --query 'cluster.identity.oidc.issuer' \
  --output text

OIDC_ID=$(aws eks describe-cluster \
  --name $CLUSTER_NAME \
  --query 'cluster.identity.oidc.issuer' \
  --output text | cut -d/ -f5)

echo "OIDC Provider ID: $OIDC_ID"
```

---
PART 4: IRSA — Identity Without Secrets
How IRSA Works — The Deep Understanding
WITHOUT IRSA (the old wrong way):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pod needs to call S3.
Developer creates IAM User.
Creates access key for that user.
Stores access key as Kubernetes Secret.
Pod loads secret as environment variable.
PROBLEM: Access key is a static credential.
         It lives forever until rotated.
         If leaked → attacker has permanent S3 access.
         Rotation is manual and error-prone.

WITH IRSA (the right production way):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pod needs to call S3.
You create an IAM Role (not a user).
You create a Kubernetes ServiceAccount.
You link them via annotation.
No access keys. No secrets. Zero.

HOW IT WORKS:
1. EKS has an OIDC provider (Identity Provider)
2. When pod starts, kubelet injects a JWT token
   into the pod at /var/run/secrets/eks.amazonaws.com/serviceaccount/token
3. AWS SDK in pod finds this token automatically
4. SDK sends token to AWS STS:
   "I am ServiceAccount api-sa in namespace production
    from cluster prod-eks. Here's my signed JWT."
5. STS verifies JWT signature against OIDC provider public key
6. STS checks: does the IAM Role's trust policy allow
   this ServiceAccount to assume it?
7. YES → STS returns temporary credentials (15min-12hr)
8. SDK uses credentials to call S3
9. Credentials expire → SDK automatically refreshes

RESULT:
→ No static access keys anywhere
→ Credentials are short-lived (STS tokens)
→ If credentials leak: they expire on their own
→ Least privilege: each pod gets only its own role
→ Audit: CloudTrail shows exact pod identity per API call
Set Up IRSA — Step by Step
# ════════════════════════════════════════════════
# STEP 1: Create the OIDC provider in IAM
# (eksctl may have done this — check first)
# ════════════════════════════════════════════════

# Check if OIDC provider exists
aws iam list-open-id-connect-providers | grep $OIDC_ID

# If not: create it
eksctl utils associate-iam-oidc-provider \
  --cluster $CLUSTER_NAME \
  --approve

# Confirm it exists now
aws iam list-open-id-connect-providers

# ════════════════════════════════════════════════
# STEP 2: Create namespaces for your workloads
# ════════════════════════════════════════════════

kubectl create namespace production
kubectl create namespace monitoring
kubectl create namespace ingress-nginx

# Label namespaces (NetworkPolicy and pod security use these)
kubectl label namespace production \
  environment=production \
  team=backend

kubectl label namespace monitoring \
  environment=production \
  team=platform

kubectl label namespace ingress-nginx \
  environment=production \
  team=platform

# ════════════════════════════════════════════════
# STEP 3: Create IAM Role for your application
# This role defines WHAT the pod can do in AWS
# ════════════════════════════════════════════════

OIDC_PROVIDER="oidc.eks.${AWS_REGION}.amazonaws.com/id/${OIDC_ID}"

# Trust policy — WHO can assume this role
# Only pods using the api-sa ServiceAccount
# in the production namespace
# from THIS specific cluster's OIDC provider
cat > /tmp/app-trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::${ACCOUNT_ID}:oidc-provider/${OIDC_PROVIDER}"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "${OIDC_PROVIDER}:aud": "sts.amazonaws.com",
          "${OIDC_PROVIDER}:sub": "system:serviceaccount:production:api-sa"
        }
      }
    }
  ]
}
EOF

# Create the role
APP_ROLE_ARN=$(aws iam create-role \
  --role-name "${CLUSTER_NAME}-api-role" \
  --assume-role-policy-document file:///tmp/app-trust-policy.json \
  --description "IRSA role for api ServiceAccount in production" \
  --query 'Role.Arn' --output text)

echo "App Role ARN: $APP_ROLE_ARN"

# Permission policy — WHAT this role can do
cat > /tmp/app-permission-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadAppBucket",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::${CLUSTER_NAME}-app-assets",
        "arn:aws:s3:::${CLUSTER_NAME}-app-assets/*"
      ]
    },
    {
      "Sid": "ReadSecrets",
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue"
      ],
      "Resource": [
        "arn:aws:secretsmanager:${AWS_REGION}:${ACCOUNT_ID}:secret:${CLUSTER_NAME}/app/*"
      ]
    },
    {
      "Sid": "WriteCloudWatch",
      "Effect": "Allow",
      "Action": [
        "cloudwatch:PutMetricData",
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
EOF

aws iam put-role-policy \
  --role-name "${CLUSTER_NAME}-api-role" \
  --policy-name "${CLUSTER_NAME}-api-permissions" \
  --policy-document file:///tmp/app-permission-policy.json

# ════════════════════════════════════════════════
# STEP 4: Create Kubernetes ServiceAccount
# Annotate it with the IAM Role ARN
# This is the LINK between Kubernetes and AWS IAM
# ════════════════════════════════════════════════

kubectl apply -n production - << EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: api-sa
  namespace: production
  annotations:
    eks.amazonaws.com/role-arn: "${APP_ROLE_ARN}"
    eks.amazonaws.com/token-expiration: "86400"
EOF

# Verify the annotation
kubectl get sa api-sa -n production -o yaml

# ════════════════════════════════════════════════
# STEP 5: TEST IRSA — verify pod gets credentials
# ════════════════════════════════════════════════

kubectl run irsa-test \
  --image=amazon/aws-cli:latest \
  --restart=Never \
  --overrides='{
    "spec": {
      "serviceAccountName": "api-sa",
      "containers": [{
        "name": "irsa-test",
        "image": "amazon/aws-cli:latest",
        "command": ["aws", "sts", "get-caller-identity"],
        "resources": {"requests": {"cpu": "10m", "memory": "32Mi"}}
      }]
    }
  }' \
  -n production

# Wait for it to complete
kubectl wait pod irsa-test -n production \
  --for=condition=Succeeded --timeout=60s

# Check the output
kubectl logs irsa-test -n production

# You should see:
# {
#   "UserId": "AROA...:botocore-session-...",
#   "Account": "111111111111",
#   "Arn": "arn:aws:sts::111111111111:assumed-role/prod-eks-api-role/..."
# }
# The pod is authenticated as the IAM Role — no access keys anywhere!

kubectl delete pod irsa-test -n production

# ════════════════════════════════════════════════
# Create IRSA for AWS Load Balancer Controller
# ════════════════════════════════════════════════

eksctl create iamserviceaccount \
  --cluster=$CLUSTER_NAME \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --attach-policy-arn=arn:aws:iam::aws:policy/AWSLoadBalancerControllerIAMPolicy \
  --override-existing-serviceaccounts \
  --approve

# eksctl automatically:
# 1. Creates IAM role with OIDC trust policy
# 2. Attaches the policy
# 3. Creates ServiceAccount with role annotation
# This is the shortcut — eksctl wraps everything above into one command

echo "✅ IRSA configured"
PART 5: AWS LOAD BALANCER CONTROLLER + INGRESS
Mental Model — Why You Need This
Without ALB Controller:
  You create a Service type=LoadBalancer
  → AWS creates one NLB per service
  → 10 services = 10 NLBs = $160/month minimum
  → No path-based routing, no TLS termination per service
  → Very expensive and inflexible

With ALB Controller + Ingress:
  You create ONE Ingress object with rules
  → ALB controller creates ONE ALB
  → Routes traffic based on host/path to correct services
  → TLS termination at the ALB
  → Handles hundreds of services on ONE load balancer
  → Production standard
# ════════════════════════════════════════════════
# INSTALL ALB CONTROLLER
# ════════════════════════════════════════════════

# Add the EKS Helm chart repository
helm repo add eks https://aws.github.io/eks-charts
helm repo update eks

# Install the controller
helm install aws-load-balancer-controller \
  eks/aws-load-balancer-controller \
  --namespace kube-system \
  --set clusterName=$CLUSTER_NAME \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set region=$AWS_REGION \
  --set vpcId=$VPC_ID \
  --set image.repository=602401143452.dkr.ecr.${AWS_REGION}.amazonaws.com/amazon/aws-load-balancer-controller \
  --set tolerations[0].key=workload-type \
  --set tolerations[0].value=infrastructure \
  --set tolerations[0].effect=NoSchedule \
  --set nodeSelector.workload-type=infrastructure

# Verify it's running
kubectl get deployment -n kube-system aws-load-balancer-controller
kubectl logs -n kube-system \
  -l app.kubernetes.io/name=aws-load-balancer-controller \
  --tail=20

# Check it can see our VPC subnets
kubectl logs -n kube-system \
  -l app.kubernetes.io/name=aws-load-balancer-controller \
  | grep -i "subnet\|vpc"

# ════════════════════════════════════════════════
# TEST THE INGRESS CONTROLLER
# Deploy a test app and expose via Ingress
# ════════════════════════════════════════════════

# Deploy a test application
kubectl apply -n production - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-server
  namespace: production
spec:
  replicas: 2
  selector:
    matchLabels:
      app: echo-server
  template:
    metadata:
      labels:
        app: echo-server
    spec:
      containers:
      - name: echo
        image: ealen/echo-server:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "50m"
            memory: "32Mi"
          limits:
            cpu: "200m"
            memory: "64Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: echo-server-svc
  namespace: production
spec:
  selector:
    app: echo-server
  ports:
  - port: 80
    targetPort: 80
EOF

# Create an Ingress — this triggers ALB creation
kubectl apply -n production - << EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: test-ingress
  namespace: production
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/healthcheck-path: /
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    alb.ingress.kubernetes.io/tags: |
      Project=production,Environment=production
spec:
  ingressClassName: alb
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: echo-server-svc
            port:
              number: 80
EOF

# Watch ALB being created (takes 2-3 minutes)
kubectl get ingress -n production -w

# When ADDRESS appears — that's your ALB DNS name
ALB_DNS=$(kubectl get ingress test-ingress -n production \
  -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')

echo "ALB DNS: $ALB_DNS"

# Test it works
curl http://$ALB_DNS
# Should return JSON with request details

# Clean up test resources
kubectl delete deployment echo-server -n production
kubectl delete service echo-server-svc -n production
kubectl delete ingress test-ingress -n production
PART 6: CERT-MANAGER — Automatic TLS
Mental Model
Before cert-manager:
  1. Go to Let's Encrypt website
  2. Prove you own the domain
  3. Download certificate files
  4. Upload to ACM or create TLS Secret
  5. Update Ingress
  6. Set calendar reminder to repeat in 90 days
  7. Forget the reminder → certificate expires → site is down
  8. Get paged at 3am

With cert-manager:
  1. Install cert-manager
  2. Create ClusterIssuer (points to Let's Encrypt)
  3. Add one annotation to Ingress
  4. cert-manager does EVERYTHING:
     → Requests certificate from Let's Encrypt
     → Proves domain ownership (DNS-01 or HTTP-01 challenge)
     → Stores cert as TLS Secret
     → Renews automatically 30 days before expiry
     → Updates Ingress TLS
  5. Never think about certificates again

HOW CERT-MANAGER PROVES DOMAIN OWNERSHIP:
HTTP-01 challenge:
  Let's Encrypt: "Put this token at /.well-known/acme-challenge/XYZ"
  cert-manager: creates temporary Ingress rule for that path
  Let's Encrypt verifies: hits your domain, finds the token
  Certificate issued.
  Requires: domain DNS pointing to your ALB already

DNS-01 challenge:
  Let's Encrypt: "Put this TXT record in your DNS: _acme-challenge.yourdomain.com"
  cert-manager: calls Route53 API to create the record
  Let's Encrypt verifies: queries DNS for the TXT record
  Certificate issued.
  Requires: Route53 IRSA permissions
  Better for: wildcard certs, private clusters
# ════════════════════════════════════════════════
# INSTALL CERT-MANAGER
# ════════════════════════════════════════════════

helm repo add jetstack https://charts.jetstack.io
helm repo update jetstack

helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.14.0 \
  --set installCRDs=true \
  --set tolerations[0].key=workload-type \
  --set tolerations[0].value=infrastructure \
  --set tolerations[0].effect=NoSchedule \
  --set nodeSelector.workload-type=infrastructure \
  --set webhook.tolerations[0].key=workload-type \
  --set webhook.tolerations[0].value=infrastructure \
  --set webhook.tolerations[0].effect=NoSchedule \
  --set cainjector.tolerations[0].key=workload-type \
  --set cainjector.tolerations[0].value=infrastructure \
  --set cainjector.tolerations[0].effect=NoSchedule

# Verify all cert-manager pods are running
kubectl get pods -n cert-manager
# cert-manager-xxx         1/1 Running
# cert-manager-webhook-xxx 1/1 Running
# cert-manager-cainjector  1/1 Running

# ════════════════════════════════════════════════
# CREATE IRSA FOR CERT-MANAGER (DNS-01 challenge)
# cert-manager needs Route53 access to create TXT records
# ════════════════════════════════════════════════

# Route53 policy for DNS-01 challenges
cat > /tmp/cert-manager-route53-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "route53:GetChange",
      "Resource": "arn:aws:route53:::change/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "route53:ChangeResourceRecordSets",
        "route53:ListResourceRecordSets"
      ],
      "Resource": "arn:aws:route53:::hostedzone/*"
    },
    {
      "Effect": "Allow",
      "Action": "route53:ListHostedZonesByName",
      "Resource": "*"
    }
  ]
}
EOF

CERT_MANAGER_POLICY=$(aws iam create-policy \
  --policy-name "${CLUSTER_NAME}-cert-manager-route53" \
  --policy-document file:///tmp/cert-manager-route53-policy.json \
  --query 'Policy.Arn' --output text)

# Create IRSA for cert-manager
eksctl create iamserviceaccount \
  --cluster=$CLUSTER_NAME \
  --namespace=cert-manager \
  --name=cert-manager \
  --attach-policy-arn=$CERT_MANAGER_POLICY \
  --override-existing-serviceaccounts \
  --approve

# ════════════════════════════════════════════════
# CLUSTER ISSUERS
# Tells cert-manager HOW to get certificates
# We create two: staging (for testing) and production
# ALWAYS TEST WITH STAGING FIRST
# Let's Encrypt production has RATE LIMITS
# ════════════════════════════════════════════════

# Get your Route53 hosted zone ID
HOSTED_ZONE_ID=$(aws route53 list-hosted-zones \
  --query "HostedZones[?Name=='yourdomain.com.'].Id" \
  --output text | sed 's|/hostedzone/||')

echo "Hosted Zone ID: $HOSTED_ZONE_ID"

# STAGING issuer — no rate limits, fake certificate
kubectl apply - << EOF
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    email: your-email@company.com
    privateKeySecretRef:
      name: letsencrypt-staging-key
    solvers:
    - dns01:
        route53:
          region: ${AWS_REGION}
          hostedZoneID: ${HOSTED_ZONE_ID}
      selector:
        dnsZones:
        - "yourdomain.com"
EOF

# PRODUCTION issuer — real certificates, has rate limits
kubectl apply - << EOF
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-production
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@company.com
    privateKeySecretRef:
      name: letsencrypt-production-key
    solvers:
    - dns01:
        route53:
          region: ${AWS_REGION}
          hostedZoneID: ${HOSTED_ZONE_ID}
      selector:
        dnsZones:
        - "yourdomain.com"
EOF

# Verify issuers are ready
kubectl get clusterissuers
# NAME                     READY   AGE
# letsencrypt-staging      True    1m
# letsencrypt-production   True    1m

# ════════════════════════════════════════════════
# REQUEST A CERTIFICATE MANUALLY (test it works)
# ════════════════════════════════════════════════

kubectl apply -n production - << EOF
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: yourdomain-tls
  namespace: production
spec:
  secretName: yourdomain-tls-secret
  issuerRef:
    name: letsencrypt-staging
    kind: ClusterIssuer
  dnsNames:
  - yourdomain.com
  - "*.yourdomain.com"   # Wildcard — covers all subdomains
EOF

# Watch cert-manager work (it takes 1-3 minutes)
kubectl describe certificate yourdomain-tls -n production
kubectl get certificaterequest -n production
kubectl get order -n production       # ACME order
kubectl get challenge -n production   # DNS challenge

# Watch events as it works:
kubectl get events -n production --sort-by='.lastTimestamp' -w

# When ready:
# NAME                READY   SECRET                  AGE
# yourdomain-tls      True    yourdomain-tls-secret   3m

# Inspect the certificate
kubectl get secret yourdomain-tls-secret -n production \
  -o jsonpath='{.data.tls\.crt}' | base64 -d | \
  openssl x509 -noout -dates -subject

# ════════════════════════════════════════════════
# INGRESS WITH AUTOMATIC TLS
# This is the production pattern — annotation triggers cert-manager
# ════════════════════════════════════════════════

kubectl apply -n production - << EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: production-ingress
  namespace: production
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":80},{"HTTPS":443}]'
    alb.ingress.kubernetes.io/ssl-redirect: "443"
    alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:${AWS_REGION}:${ACCOUNT_ID}:certificate/xxx
    alb.ingress.kubernetes.io/healthcheck-path: /health
    alb.ingress.kubernetes.io/healthcheck-interval-seconds: "30"
    alb.ingress.kubernetes.io/healthy-threshold-count: "2"
    alb.ingress.kubernetes.io/unhealthy-threshold-count: "3"
    # cert-manager annotation — automatically request and attach cert
    cert-manager.io/cluster-issuer: letsencrypt-production
spec:
  ingressClassName: alb
  tls:
  - hosts:
    - api.yourdomain.com
    secretName: api-yourdomain-tls    # cert-manager creates this
  rules:
  - host: api.yourdomain.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-svc
            port:
              number: 80
      - path: /health
        pathType: Exact
        backend:
          service:
            name: api-svc
            port:
              number: 80
EOF

echo "✅ cert-manager and TLS configured"
PART 7: PROMETHEUS + GRAFANA — See Everything
Mental Model
PROMETHEUS = The data collector and storage
→ Scrapes metrics from every pod every 15 seconds
→ Stores time-series data (metric_name{labels} value timestamp)
→ Provides PromQL query language
→ Sends alerts to AlertManager

GRAFANA = The visualization layer
→ Queries Prometheus using PromQL
→ Displays beautiful dashboards
→ Shows you what's happening RIGHT NOW and historically

ALERTMANAGER = The notification router
→ Receives firing alerts from Prometheus
→ Groups, deduplicates, routes
→ Sends to: Slack, PagerDuty, email, OpsGenie

kube-state-metrics = Kubernetes object metrics
→ Converts k8s API objects into Prometheus metrics
→ "How many pods are desired vs running?"
→ "Which deployments are not fully available?"

node-exporter = Node-level metrics (DaemonSet)
→ CPU, memory, disk, network per node
→ Runs on every node, scrapes from host

THE FLOW:
App/Infra → Prometheus scrapes → AlertManager fires →
Slack/PagerDuty pages you → You open Grafana → See the problem
# ════════════════════════════════════════════════
# INSTALL kube-prometheus-stack
# This Helm chart installs EVERYTHING in one shot:
# Prometheus, Grafana, AlertManager,
# kube-state-metrics, node-exporter
# Pre-configured with 25+ dashboards
# ════════════════════════════════════════════════

helm repo add prometheus-community \
  https://prometheus-community.github.io/helm-charts
helm repo update prometheus-community

# Create monitoring namespace
kubectl label namespace monitoring \
  monitoring=enabled

# Install the full stack
helm install kube-prometheus-stack \
  prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --version 56.0.0 \
  --set prometheus.prometheusSpec.retention=30d \
  --set prometheus.prometheusSpec.retentionSize="40GB" \
  --set prometheus.prometheusSpec.replicas=2 \
  --set prometheus.prometheusSpec.tolerations[0].key=workload-type \
  --set prometheus.prometheusSpec.tolerations[0].value=infrastructure \
  --set prometheus.prometheusSpec.tolerations[0].effect=NoSchedule \
  --set prometheus.prometheusSpec.nodeSelector.workload-type=infrastructure \
  --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.storageClassName=gp2 \
  --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.resources.requests.storage=50Gi \
  --set prometheus.prometheusSpec.resources.requests.cpu=500m \
  --set prometheus.prometheusSpec.resources.requests.memory=2Gi \
  --set prometheus.prometheusSpec.resources.limits.cpu=2 \
  --set prometheus.prometheusSpec.resources.limits.memory=4Gi \
  --set grafana.adminPassword=changeme-in-production \
  --set grafana.persistence.enabled=true \
  --set grafana.persistence.size=10Gi \
  --set grafana.tolerations[0].key=workload-type \
  --set grafana.tolerations[0].value=infrastructure \
  --set grafana.tolerations[0].effect=NoSchedule \
  --set grafana.nodeSelector.workload-type=infrastructure \
  --set grafana.resources.requests.cpu=100m \
  --set grafana.resources.requests.memory=256Mi \
  --set grafana.resources.limits.cpu=500m \
  --set grafana.resources.limits.memory=512Mi \
  --set alertmanager.alertmanagerSpec.tolerations[0].key=workload-type \
  --set alertmanager.alertmanagerSpec.tolerations[0].value=infrastructure \
  --set alertmanager.alertmanagerSpec.tolerations[0].effect=NoSchedule \
  --set alertmanager.alertmanagerSpec.nodeSelector.workload-type=infrastructure \
  --set alertmanager.alertmanagerSpec.storage.volumeClaimTemplate.spec.resources.requests.storage=10Gi \
  --set nodeExporter.tolerations[0].operator=Exists \
  --set kube-state-metrics.tolerations[0].key=workload-type \
  --set kube-state-metrics.tolerations[0].value=infrastructure \
  --set kube-state-metrics.tolerations[0].effect=NoSchedule

# Watch everything come up
kubectl get pods -n monitoring -w

# Takes 3-5 minutes. When all Running:
kubectl get pods -n monitoring
# alertmanager-xxx          2/2 Running
# kube-prometheus-stack-grafana-xxx           1/1 Running
# kube-prometheus-stack-operator-xxx          1/1 Running
# kube-prometheus-stack-kube-state-metrics    1/1 Running
# prometheus-kube-prometheus-stack-prometheus 2/2 Running
# node-exporter-xxx (one per node)            2/2 Running

# Check Prometheus is scraping targets
kubectl port-forward -n monitoring svc/kube-prometheus-stack-prometheus 9090:9090 &
# Open http://localhost:9090/targets
# Should show ALL targets as UP

# Access Grafana
kubectl port-forward -n monitoring svc/kube-prometheus-stack-grafana 3000:80 &
# Open http://localhost:3000
# Login: admin / changeme-in-production

# ════════════════════════════════════════════════
# ALERTMANAGER CONFIGURATION
# Route alerts to Slack
# ════════════════════════════════════════════════

kubectl create secret generic alertmanager-slack-webhook \
  --from-literal=webhook-url='https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK' \
  -n monitoring

kubectl apply -n monitoring - << 'EOF'
apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
  name: slack-alerts
  namespace: monitoring
spec:
  route:
    groupBy: ['alertname', 'cluster', 'namespace']
    groupWait: 30s
    groupInterval: 5m
    repeatInterval: 12h
    receiver: 'slack-critical'
    routes:
    - matchers:
      - name: severity
        value: critical
      receiver: 'slack-critical'
    - matchers:
      - name: severity
        value: warning
      receiver: 'slack-warnings'

  receivers:
  - name: 'slack-critical'
    slackConfigs:
    - apiURL:
        name: alertmanager-slack-webhook
        key: webhook-url
      channel: '#alerts-critical'
      sendResolved: true
      title: |
        [{{ .Status | toUpper }}{{ if eq .Status "firing" }}:{{ .Alerts.Firing | len }}{{ end }}]
        {{ .CommonLabels.alertname }}
      text: |
        {{ range .Alerts }}
        *Alert:* {{ .Annotations.summary }}
        *Description:* {{ .Annotations.description }}
        *Severity:* {{ .Labels.severity }}
        *Namespace:* {{ .Labels.namespace }}
        {{ end }}

  - name: 'slack-warnings'
    slackConfigs:
    - apiURL:
        name: alertmanager-slack-webhook
        key: webhook-url
      channel: '#alerts-warnings'
      sendResolved: true
EOF

# ════════════════════════════════════════════════
# CUSTOM PROMETHEUS RULES — alerts that matter
# ════════════════════════════════════════════════

kubectl apply -n monitoring - << 'EOF'
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: production-alerts
  namespace: monitoring
  labels:
    release: kube-prometheus-stack
spec:
  groups:
  - name: production.pods
    interval: 30s
    rules:

    # Pod crash looping
    - alert: PodCrashLooping
      expr: |
        rate(kube_pod_container_status_restarts_total[15m]) * 60 * 5 > 0
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: "Pod {{ $labels.namespace }}/{{ $labels.pod }} crash looping"
        description: "Pod {{ $labels.pod }} in {{ $labels.namespace }} has restarted {{ $value }} times in last 5 min"

    # Pod not ready
    - alert: PodNotReady
      expr: |
        min_over_time(sum by (namespace, pod) (
          kube_pod_status_ready{condition="true"}
        )[5m:]) == 0
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "Pod {{ $labels.namespace }}/{{ $labels.pod }} not ready"

    # Deployment replica mismatch
    - alert: DeploymentReplicasMismatch
      expr: |
        kube_deployment_spec_replicas !=
        kube_deployment_status_replicas_available
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "Deployment {{ $labels.namespace }}/{{ $labels.deployment }} has replica mismatch"
        description: "Desired {{ $value }} replicas not available"

  - name: production.nodes
    rules:

    # Node CPU high
    - alert: NodeCPUHigh
      expr: |
        1 - avg by (node) (
          rate(node_cpu_seconds_total{mode="idle"}[5m])
        ) > 0.85
      for: 10m
      labels:
        severity: warning
      annotations:
        summary: "Node {{ $labels.node }} CPU > 85%"
        description: "Node CPU usage is {{ $value | humanizePercentage }}"

    # Node memory high
    - alert: NodeMemoryHigh
      expr: |
        1 - (node_memory_MemAvailable_bytes /
             node_memory_MemTotal_bytes) > 0.85
      for: 10m
      labels:
        severity: warning
      annotations:
        summary: "Node {{ $labels.node }} memory > 85%"

    # Node disk high
    - alert: NodeDiskHigh
      expr: |
        (node_filesystem_size_bytes{fstype!="tmpfs"} -
         node_filesystem_free_bytes{fstype!="tmpfs"}) /
        node_filesystem_size_bytes{fstype!="tmpfs"} > 0.85
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: "Node {{ $labels.node }} disk > 85%"
        description: "Disk usage on {{ $labels.mountpoint }} is {{ $value | humanizePercentage }}"

    # Node not ready
    - alert: NodeNotReady
      expr: kube_node_status_condition{condition="Ready",status="true"} == 0
      for: 2m
      labels:
        severity: critical
      annotations:
        summary: "Node {{ $labels.node }} is not Ready"

  - name: production.resources
    rules:

    # CPU throttling high (silent latency killer)
    - alert: ContainerCPUThrottling
      expr: |
        rate(container_cpu_cfs_throttled_seconds_total[5m]) /
        rate(container_cpu_cfs_periods_total[5m]) > 0.25
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: "Container {{ $labels.namespace }}/{{ $labels.pod }}/{{ $labels.container }} CPU throttled"
        description: "{{ $value | humanizePercentage }} of CPU time is throttled. Increase CPU limits."

    # OOM kills
    - alert: ContainerOOMKilled
      expr: |
        kube_pod_container_status_last_terminated_reason{reason="OOMKilled"} > 0
      labels:
        severity: critical
      annotations:
        summary: "Container OOMKilled: {{ $labels.namespace }}/{{ $labels.pod }}/{{ $labels.container }}"
        description: "Container was killed by OOM killer. Increase memory limits."

    # PVC almost full
    - alert: PersistentVolumeAlmostFull
      expr: |
        kubelet_volume_stats_used_bytes /
        kubelet_volume_stats_capacity_bytes > 0.85
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "PVC {{ $labels.namespace }}/{{ $labels.persistentvolumeclaim }} almost full"
        description: "PVC is {{ $value | humanizePercentage }} full"

  - name: production.eks
    rules:

    # etcd latency (only on self-managed; EKS doesn't expose this)
    # But we can check API server
    - alert: APIServerLatencyHigh
      expr: |
        histogram_quantile(0.99,
          rate(apiserver_request_duration_seconds_bucket{
            verb!~"WATCH|CONNECT"
          }[5m])
        ) > 1
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "API server p99 latency > 1s"
        description: "p99 latency is {{ $value }}s"

    # Pending pods (scheduler can't place them)
    - alert: PodsPending
      expr: |
        kube_pod_status_phase{phase="Pending"} > 0
      for: 10m
      labels:
        severity: warning
      annotations:
        summary: "Pods pending for > 10 minutes"
        description: "{{ $value }} pods in Pending state in {{ $labels.namespace }}"
EOF

# Verify rules were accepted by Prometheus
kubectl port-forward -n monitoring svc/kube-prometheus-stack-prometheus 9090:9090 &
# Open http://localhost:9090/alerts
# Should see all your rules listed

# ════════════════════════════════════════════════
# EXPOSE GRAFANA VIA INGRESS (with TLS)
# ════════════════════════════════════════════════

kubectl apply -n monitoring - << EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: grafana-ingress
  namespace: monitoring
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":80},{"HTTPS":443}]'
    alb.ingress.kubernetes.io/ssl-redirect: "443"
    cert-manager.io/cluster-issuer: letsencrypt-production
    # Restrict Grafana to your company IP range
    alb.ingress.kubernetes.io/inbound-cidrs: "YOUR_COMPANY_IP/32"
spec:
  ingressClassName: alb
  tls:
  - hosts:
    - grafana.yourdomain.com
    secretName: grafana-tls
  rules:
  - host: grafana.yourdomain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: kube-prometheus-stack-grafana
            port:
              number: 80

EOF
PART 8: PRODUCTION HARDENING
Security — Lock Everything Down
# ════════════════════════════════════════════════
# NETWORK POLICIES — Zero Trust Inside Cluster
# ════════════════════════════════════════════════

# Default deny ALL in production namespace
kubectl apply -n production - << 'EOF'
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
---
# Allow ingress from ALB only
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-ingress-controller
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: api
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - port: 8080
  egress:
  - to:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - protocol: UDP
      port: 53
  - to:
    - ipBlock:
        cidr: 0.0.0.0/0
        except:
        - 169.254.169.254/32   # Block instance metadata from pods
    ports:
    - port: 443
---
# Allow monitoring to scrape all namespaces
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-prometheus-scrape
  namespace: production
spec:
  podSelector: {}
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          monitoring: enabled
    ports:
    - port: 9090
    - port: 8080
    - port: 3000
EOF

# ════════════════════════════════════════════════
# POD SECURITY STANDARDS
# ════════════════════════════════════════════════

# Enforce restricted pod security on production namespace
kubectl label namespace production \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/enforce-version=latest \
  pod-security.kubernetes.io/warn=restricted \
  pod-security.kubernetes.io/audit=restricted

# What "restricted" enforces:
# → No privileged containers
# → No privilege escalation
# → No host network/PID/IPC
# → Must drop ALL capabilities
# → Must run as non-root
# → Must use seccomp profile
# → readOnlyRootFilesystem required

# ════════════════════════════════════════════════
# RBAC — Lock down who can do what
# ════════════════════════════════════════════════

kubectl apply - << 'EOF'
# Developer role — read-only on production
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: developer
  namespace: production
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log", "services", "configmaps"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets"]
  verbs: ["get", "list", "watch"]
- apiGroups: [""]
  resources: ["pods/exec"]
  verbs: []   # NO exec in production for developers
---
# SRE role — can modify workloads but not RBAC or secrets
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: sre
  namespace: production
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log", "services", "configmaps"]
  verbs: ["get", "list", "watch", "update", "patch"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets", "statefulsets"]
  verbs: ["get", "list", "watch", "update", "patch"]
- apiGroups: ["autoscaling"]
  resources: ["horizontalpodautoscalers"]
  verbs: ["get", "list", "watch", "update", "patch"]
- apiGroups: [""]
  resources: ["pods/exec"]
  verbs: ["create"]   # SRE can exec into pods
EOF

# ════════════════════════════════════════════════
# CLUSTER AUTOSCALER — nodes scale with workload
# ════════════════════════════════════════════════

helm install cluster-autoscaler \
  autoscaler/cluster-autoscaler \
  --namespace kube-system \
  --set autoDiscovery.clusterName=$CLUSTER_NAME \
  --set awsRegion=$AWS_REGION \
  --set extraArgs.balance-similar-node-groups=true \
  --set extraArgs.skip-nodes-with-system-pods=false \
  --set extraArgs.scale-down-delay-after-add=5m \
  --set extraArgs.scale-down-unneeded-time=5m \
  --set tolerations[0].key=workload-type \
  --set tolerations[0].value=infrastructure \
  --set tolerations[0].effect=NoSchedule \
  --set nodeSelector.workload-type=infrastructure

# ════════════════════════════════════════════════
# KYVERNO — Policy as Code
# Enforces standards across the cluster
# Alternative to OPA Gatekeeper — easier to write policies
# ════════════════════════════════════════════════

helm repo add kyverno https://kyverno.github.io/kyverno
helm repo update kyverno

helm install kyverno kyverno/kyverno \
  --namespace kyverno \
  --create-namespace \
  --set tolerations[0].key=workload-type \
  --set tolerations[0].value=infrastructure \
  --set tolerations[0].effect=NoSchedule

# Policy: require all containers to have resource limits
kubectl apply - << 'EOF'
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-resource-limits
spec:
  validationFailureAction: enforce   # BLOCK if violated
  background: true
  rules:
  - name: check-container-resources
    match:
      any:
      - resources:
          kinds:
          - Pod
          namespaces:
          - production
    validate:
      message: >
        All containers must have CPU and memory requests and limits.
        Set resources.requests and resources.limits.
      pattern:
        spec:
          containers:
          - resources:
              requests:
                memory: "?*"
                cpu: "?*"
              limits:
                memory: "?*"
                cpu: "?*"
---
# Policy: no latest image tags in production
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-latest-tag
spec:
  validationFailureAction: enforce
  rules:
  - name: require-image-tag
    match:
      any:
      - resources:
          kinds: [Pod]
          namespaces: [production]
    validate:
      message: "Using ':latest' image tag is not allowed in production. Pin to a specific version."
      pattern:
        spec:
          containers:
          - image: "!*:latest"
---
# Policy: require labels on all deployments
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-deployment-labels
spec:
  validationFailureAction: enforce
  rules:
  - name: check-for-labels
    match:
      any:
      - resources:
          kinds: [Deployment]
          namespaces: [production]
    validate:
      message: "Deployments must have 'app' and 'version' labels."
      pattern:
        metadata:
          labels:
            app: "?*"
            version: "?*"
EOF

echo "✅ Kyverno policies applied"
PART 9: DEPLOY YOUR APPLICATION
# ════════════════════════════════════════════════
# COMPLETE APPLICATION DEPLOYMENT
# All the pieces come together here
# ════════════════════════════════════════════════

# ResourceQuota and LimitRange first
kubectl apply -n production - << 'EOF'
apiVersion: v1
kind: ResourceQuota
metadata:
  name: production-quota
  namespace: production
spec:
  hard:
    requests.cpu: "20"
    requests.memory: "40Gi"
    limits.cpu: "40"
    limits.memory: "80Gi"
    pods: "100"
    services.loadbalancers: "1"
---
apiVersion: v1
kind: LimitRange
metadata:
  name: production-limitrange
  namespace: production
spec:
  limits:
  - type: Container
    default:
      cpu: "500m"
      memory: "256Mi"
    defaultRequest:
      cpu: "100m"
      memory: "128Mi"
    max:
      cpu: "4"
      memory: "8Gi"
    min:
      cpu: "50m"
      memory: "64Mi"
EOF

# Full application deployment with all production features
kubectl apply -n production - << EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
  labels:
    app: api
    version: "1.0.0"
    managed-by: kubectl
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  minReadySeconds: 10
  progressDeadlineSeconds: 600
  revisionHistoryLimit: 5
  template:
    metadata:
      labels:
        app: api
        version: "1.0.0"
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9090"
        prometheus.io/path: "/metrics"
    spec:
      serviceAccountName: api-sa   # IRSA — gets AWS credentials
      automountServiceAccountToken: true

      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        runAsGroup: 3000
        fsGroup: 2000
        seccompProfile:
          type: RuntimeDefault

      terminationGracePeriodSeconds: 60

      # Spread across AZs — never put all replicas in one AZ
      topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: topology.kubernetes.io/zone
        whenUnsatisfiable: DoNotSchedule
        labelSelector:
          matchLabels:
            app: api

      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchLabels:
                  app: api
              topologyKey: kubernetes.io/hostname

      containers:
      - name: api
        image: nginx:1.24.0
        imagePullPolicy: IfNotPresent
        ports:
        - name: http
          containerPort: 80
        - name: metrics
          containerPort: 9090

        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"

        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          capabilities:
            drop: ["ALL"]

        livenessProbe:
          httpGet:
            path: /
            port: http
          initialDelaySeconds: 10
          periodSeconds: 10
          failureThreshold: 3
          timeoutSeconds: 5

        readinessProbe:
          httpGet:
            path: /
            port: http
          initialDelaySeconds: 5
          periodSeconds: 5
          failureThreshold: 3
          timeoutSeconds: 3

        startupProbe:
          httpGet:
            path: /
            port: http
          failureThreshold: 30
          periodSeconds: 10

        env:
        - name: APP_ENV
          value: "production"
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName

        volumeMounts:
        - name: tmp
          mountPath: /tmp
        - name: cache
          mountPath: /var/cache/nginx
        - name: run
          mountPath: /var/run

      volumes:
      - name: tmp
        emptyDir: {}
      - name: cache
        emptyDir: {}
      - name: run
        emptyDir: {}
---
# HPA — scale based on CPU
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Pods
        value: 3
        periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
---
# PodDisruptionBudget — minimum availability during disruptions
# (node drains, rolling updates, etc.)
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-pdb
  namespace: production
spec:
  minAvailable: 2    # Always keep at least 2 pods running
  selector:
    matchLabels:
      app: api
---
# Service
apiVersion: v1
kind: Service
metadata:
  name: api-svc
  namespace: production
  labels:
    app: api
spec:
  selector:
    app: api
  ports:
  - name: http
    port: 80
    targetPort: http
  - name: metrics
    port: 9090
    targetPort: metrics
EOF

# Check everything is running
kubectl get all -n production
kubectl get hpa -n production
kubectl get pdb -n production

# Watch pods spread across nodes
kubectl get pods -n production -o wide

# Check IRSA is working for the pods
kubectl exec -n production \
  $(kubectl get pods -n production -l app=api -o name | head -1) \
  -- env | grep AWS

# Should see:
# AWS_ROLE_ARN=arn:aws:iam::111111111111:role/prod-eks-api-role
# AWS_WEB_IDENTITY_TOKEN_FILE=/var/run/secrets/eks.amazonaws.com/serviceaccount/token


PART 10: OPERATIONS AND DEBUGGING
The Production Debugging Toolkit
# ════════════════════════════════════════════════
# YOUR DAILY PRODUCTION COMMANDS
# ════════════════════════════════════════════════

# Cluster health at a glance
kubectl get nodes -o wide
kubectl top nodes
kubectl get pods -A --field-selector 'status.phase!=Running' \
  | grep -v Completed

# Find pods with high restarts
kubectl get pods -A \
  -o custom-columns='NAMESPACE:.metadata.namespace,NAME:.metadata.name,RESTARTS:.status.containerStatuses[0].restartCount' \
  | awk 'NR>1 && $3 > 3 {print}' \
  | sort -k3 -rn

# Multi-pod log streaming (stern)
stern -n production api --tail=50

# Get all images running in cluster
kubectl get pods -A -o jsonpath='{range .items[*]}{.spec.containers[*].image}{"\n"}{end}' \
  | sort -u

# Check certificate expiry (cert-manager)
kubectl get certificates -A
kubectl get certificates -A \
  -o custom-columns='NAMESPACE:.metadata.namespace,NAME:.metadata.name,READY:.status.conditions[0].status,EXPIRY:.status.notAfter'

# Check IRSA is working for a pod
kubectl get pod -n production api-xxx -o yaml \
  | grep -A5 "volumes:" | grep "projected\|serviceaccount"

# Describe a broken ingress
kubectl describe ingress -n production production-ingress
# Look for: events showing ALB controller reconciling
# aws/alb logs: kubectl logs -n kube-system -l app.kubernetes.io/name=aws-load-balancer-controller

# Check ALB controller logs for Ingress issues
kubectl logs -n kube-system \
  -l app.kubernetes.io/name=aws-load-balancer-controller \
  --tail=50 | grep -E "error|Error|WARN|ingress"

# Check cert-manager logs
kubectl logs -n cert-manager \
  -l app.kubernetes.io/name=cert-manager \
  --tail=50

# Check if certificate is failing
kubectl describe certificate -n production api-tls
kubectl describe certificaterequest -n production
kubectl describe order -n production
kubectl describe challenge -n production

# ════════════════════════════════════════════════
# USEFUL PROMETHEUS QUERIES
# (Run in Grafana Explore or port-forwarded Prometheus)
# ════════════════════════════════════════════════

# Pods not running in production
# kube_pod_status_phase{namespace="production",phase!="Running",phase!="Succeeded"}

# Top 10 CPU-consuming pods
# topk(10, sum by (pod, namespace) (rate(container_cpu_usage_seconds_total[5m])))

# Memory usage vs limits per pod
# sum by (pod, namespace) (container_memory_working_set_bytes)
# / sum by (pod, namespace) (kube_pod_container_resource_limits{resource="memory"})

# CPU throttling percentage per container
# rate(container_cpu_cfs_throttled_seconds_total[5m])
# / rate(container_cpu_cfs_periods_total[5m])
# > 0.10

# API server request rate
# sum by (verb, code) (rate(apiserver_request_total[5m]))

# HPA current vs desired replicas
# kube_horizontalpodautoscaler_status_current_replicas
# vs
# kube_horizontalpodautoscaler_spec_max_replicas

# Node memory available %
# node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100
PART 11: THE COMPLETE PRODUCTION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION EKS CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFRASTRUCTURE:
□ VPC with public + private subnets across 2+ AZs
□ NAT Gateway per AZ (not shared — AZ failure resilience)
□ VPC endpoints for S3, ECR, STS, SSM, logs
□ EKS cluster with private API endpoint only
□ OIDC provider configured (required for IRSA)
□ Two node groups: system (infra) and app (workloads)
□ System nodes tainted — only infra workloads run there
□ Cluster Autoscaler installed on system nodes

IRSA:
□ IAM role per workload with least-privilege permissions
□ Trust policy scoped to specific namespace + ServiceAccount
□ ServiceAccount annotated with IAM role ARN
□ Tested: pod can call AWS APIs without access keys
□ No IAM users or access keys stored anywhere in cluster

INGRESS + TLS:
□ AWS Load Balancer Controller installed and running
□ ClusterIssuer created for Let's Encrypt (staging tested first)
□ Certificate issued and auto-renewing
□ All Ingress routes use HTTPS redirect
□ ALB security group restricts inbound to 443 only

OBSERVABILITY:
□ Prometheus scraping all workloads (targets all UP)
□ Grafana accessible via Ingress with TLS
□ AlertManager configured with Slack/PagerDuty
□ Custom alerts: pod crash, OOM, throttling, disk
□ Dashboards: cluster overview, node resources, workload health

SECURITY:
□ NetworkPolicy default-deny in all namespaces
□ Pod Security Standards enforced (restricted)
□ RBAC: developer = read-only, SRE = modify, no admin except CI
□ Kyverno policies: require limits, no :latest, require labels
□ No privileged containers anywhere
□ etcd encrypted at rest (EKS does this by default)
□ CloudTrail enabled (audit who did what)
□ Audit logging enabled on API server

RELIABILITY:
□ All workloads have requests AND limits
□ All workloads have liveness AND readiness probes
□ HPA configured for all stateless workloads
□ PodDisruptionBudget for all critical workloads
□ topologySpreadConstraints for cross-AZ distribution
□ podAntiAffinity for same-node spreading
□ Rolling update strategy: maxUnavailable: 0
□ terminationGracePeriodSeconds ≥ 30
□ Cluster Autoscaler scales nodes on pending pods

COST:
□ Resource requests tuned (not over-allocated)
□ S3 + DynamoDB VPC endpoints (save NAT GW costs)
□ Spot instances for non-critical node groups
□ Savings Plan purchased for baseline compute
□ AWS Cost Explorer tags: cluster, namespace, team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LABS — done with your hands:
□ VPC built from scratch with correct subnet tags
□ EKS cluster created with eksctl — private endpoint only
□ IRSA tested: pod assumes IAM role, no access keys
□ ALB Controller installed — Ingress creates real ALB
□ cert-manager: staging cert issued, production cert issued
□ Prometheus: all targets UP, custom rules loaded
□ Grafana: dashboards visible, Slack alerts firing
□ Kyverno: tried to deploy without limits → got blocked
□ NetworkPolicy: tried cross-namespace call → got blocked
□ HPA: generated load → pods scaled → stopped → scaled down
□ Node drained → PDB prevented too many pods being removed
□ Rolling update: new image → zero downtime → verify traffic
Seven modules in. You have now built a complete production-grade EKS cluster from scratch. Private network, zero static credentials, automatic TLS, full observability, policy enforcement, and automatic scaling.
This is a stack that would cost a company $80,000-$200,000 a year in engineering time to design, build, and operate. You now know every component, why it exists, and how to build it yourself.
The Linux kernel from Module 1 runs your nodes. The networking from Module 2 routes your packets. The IAM from Module 3 is your IRSA. The multi-tier architecture from Module 4 runs inside Kubernetes. The cost modeling from Module 5 keeps the bill predictable. The Kubernetes fundamentals from Module 6 run your workloads. The control plane internals from Module 7 explain exactly what happens when things break.
Everything connects. This is what senior platform engineers know.
Go build it. Break things. Fix them. Come back when it's running.









# Autoscaling — Full Stack 📈

## Your Senior DevSecOps Mentor Speaking

Everything you've built so far sits still when traffic is calm and breaks when traffic spikes — unless you build autoscaling right. This module is about making your infrastructure **breathe**. It expands when load comes in. It contracts when load drops. It does it automatically, intelligently, and without waking you up at 3am.

Three layers of autoscaling exist in Kubernetes. Most people know one. You're going to know all three, how they talk to each other, and exactly what happens inside each one when traffic hits.

By the end of this module you will watch a traffic spike hit, pods multiply, nodes appear from nowhere, traffic gets served, spike dies, everything contracts back — all without touching a single command.

That's the goal. Let's get there.

---

# THE MASTER MENTAL MODEL FIRST

```
THREE LAYERS OF AUTOSCALING — each handles a different problem

LAYER 1: HPA (Horizontal Pod Autoscaler)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"I have enough nodes. I just need more pods."
Watches metrics → adds/removes pods on existing nodes
Speed: FAST — 15-30 seconds to start scaling
Limit: Can't add pods if nodes are already full

LAYER 2: CLUSTER AUTOSCALER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Pods are Pending because nodes are full. Add nodes."
Watches for Pending pods → tells AWS to add EC2 nodes
Speed: SLOW — 3-5 minutes for new node to be Ready
Limit: More expensive, slower, can't predict future load

LAYER 3: SPOT INSTANCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"We need more nodes but we don't want to pay full price."
AWS spare capacity at 70-90% discount
Catch: AWS can reclaim with 2-minute warning
Strategy: Use for stateless, fault-tolerant workloads

HOW THEY WORK TOGETHER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Traffic spike hits
       │
       ▼
HPA sees CPU rising → creates more pods
       │
       ▼
New pods scheduled on existing nodes (FAST — seconds)
       │
       ▼
Nodes get full → new pods stay Pending
       │
       ▼
Cluster Autoscaler sees Pending pods → requests new EC2 nodes
       │
       ▼
New nodes: On-Demand (baseline) + Spot (surge capacity)
       │
       ▼
New nodes join → Pending pods scheduled → traffic served
       │
       ▼
Traffic drops → HPA removes pods
       │
       ▼
Nodes become underutilized → Cluster Autoscaler removes them

THIS IS THE FULL AUTOSCALING CHAIN.
Each layer feeds the next.
Each failure mode is different.
You need to understand all three.
```

---

# PART 1: HPA INTERNALS — The Deep Truth

## Mental Model — The Thermostat

```
Think of HPA exactly like a home thermostat.

You set: "Keep temperature at 70°F"
Thermostat reads: current temperature
Too hot → turn on AC (add pods)
Too cold → turn off AC (remove pods)
Check every few minutes → adjust

HPA does the same:
You set: "Keep CPU at 60% per pod"
HPA reads: current avg CPU across all pods
Too high → add pods (spread the load)
Too low → remove pods (save money)
Check every 15 seconds → adjust

THE MATH:
desiredReplicas = currentReplicas × (currentMetric / targetMetric)

Example:
currentReplicas = 3
currentCPU      = 90%  (average across 3 pods)
targetCPU       = 60%

desiredReplicas = 3 × (90 / 60) = 3 × 1.5 = 4.5 → rounds to 5

HPA creates 2 more pods (3 → 5)
New load spreads across 5 pods
Each pod now at ~54% CPU → below target → stable
```

## The HPA Control Loop — Frame by Frame

```
EVERY 15 SECONDS (default) this loop runs:

STEP 1: FETCH METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HPA controller queries metrics-server:
"What is the current CPU usage of pods
 matching selector app=api in namespace production?"

metrics-server collects from kubelet on each node:
→ Node: ip-10-0-1-5  pods api-aaa: cpu=95m, memory=200Mi
→ Node: ip-10-0-2-3  pods api-bbb: cpu=88m, memory=210Mi
→ Node: ip-10-0-1-7  pods api-ccc: cpu=92m, memory=195Mi

Average CPU = (95 + 88 + 92) / 3 = 91.7m
Request CPU = 100m per pod
Utilization = 91.7 / 100 = 91.7%

STEP 2: CALCULATE DESIRED REPLICAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
target = 60%
current = 91.7%
current_replicas = 3

desired = ceil(3 × (91.7 / 60))
        = ceil(3 × 1.528)
        = ceil(4.58)
        = 5

STEP 3: CHECK CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ desired (5) > maxReplicas (20)? NO → proceed
→ desired (5) < minReplicas (3)? NO → proceed
→ Is this a scale UP? Yes.
→ Is scaleUp stabilizationWindow satisfied? 
  (Was there a scale event in last 60s?) NO → proceed

STEP 4: APPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HPA patches the Deployment:
spec.replicas: 3 → 5

Deployment controller creates 2 new pods.
Scheduler places them on available nodes.
New pods start receiving traffic.

STEP 5: STABILIZATION WINDOW STARTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scale-up: 60s stabilization (no further scale-up for 60s)
Scale-down: 300s stabilization (no scale-down for 5 minutes)
This prevents thrashing — rapid up/down cycles

WHY DIFFERENT WINDOWS?
Scale-UP fast: traffic is hurting users RIGHT NOW
Scale-DOWN slow: what if load comes back in 2 minutes?
  You don't want to scale down and immediately scale up again
  The 5 minute window absorbs natural traffic variation
```

## Metrics Sources — What HPA Can Watch

```
HPA V2 can scale on THREE types of metrics:

TYPE 1: RESOURCE METRICS (built-in, no extra setup)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CPU utilization    → most common, works great
Memory utilization → works but be careful:
                     memory doesn't release as fast as CPU drops
                     can cause flapping

Source: metrics-server (lightweight, built-in)
Refresh: every 60 seconds (kubelet scrapes every 10s, 
         metrics-server aggregates every 60s)

TYPE 2: CUSTOM METRICS (from your app via Prometheus)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
http_requests_per_second  → scale on actual traffic
queue_depth               → scale on work backlog
active_connections        → scale on connection count
db_query_latency          → scale before things break

Source: Prometheus + prometheus-adapter
Setup: more work but MUCH more meaningful
These are business metrics — CPU is just a proxy

TYPE 3: EXTERNAL METRICS (from outside the cluster)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SQS queue depth           → scale consumers on queue depth
Kafka lag                 → scale consumers on lag
Custom CloudWatch metric  → scale on any AWS metric

Source: external metrics API adapter
Best for: event-driven, queue-based workloads
```

## Full HPA Configuration — Production Grade

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api

  minReplicas: 3    # Never go below 3 — minimum HA
  maxReplicas: 50   # Never exceed 50 — cost ceiling

  metrics:
  # PRIMARY: Scale on CPU — fast, responsive
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60  # Target 60% — room to breathe

  # SECONDARY: Scale on memory — catches memory leaks
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80  # Higher threshold — memory is sticky

  # CUSTOM: Scale on actual HTTP requests per second
  # Requires prometheus-adapter to be installed
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "1000"   # 1000 RPS per pod → scale if more

  behavior:
    scaleUp:
      # Don't wait — traffic is hurting users
      stabilizationWindowSeconds: 30

      policies:
      # Add up to 4 pods at a time
      - type: Pods
        value: 4
        periodSeconds: 60
      # OR add up to 50% of current replicas
      - type: Percent
        value: 50
        periodSeconds: 60
      # USE WHICHEVER IS LARGER (Max policy)
      selectPolicy: Max

    scaleDown:
      # Wait 5 minutes — don't remove pods too fast
      stabilizationWindowSeconds: 300

      policies:
      # Remove at most 1 pod per minute
      - type: Pods
        value: 1
        periodSeconds: 60
      # AND at most 10% per minute
      - type: Percent
        value: 10
        periodSeconds: 60
      # USE WHICHEVER IS SMALLER (Min policy = conservative)
      selectPolicy: Min
```

## What Goes Wrong With HPA

```
PROBLEM 1: Metrics not available
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Symptom: kubectl get hpa shows <unknown>/60%
Cause: metrics-server not installed or not working
Fix:
  kubectl top pods -n production
  If error: metrics-server is broken
  kubectl logs -n kube-system \
    -l k8s-app=metrics-server

PROBLEM 2: HPA not scaling when expected
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Symptom: CPU is 90% but replicas not changing
Cause 1: Still in stabilizationWindow — wait it out
Cause 2: Already at maxReplicas
Cause 3: Pods not setting resource REQUESTS
  Without requests: HPA can't calculate utilization %
  CPU usage = 500m but no request set → can't calculate %
Fix: Always set resource.requests on every container

PROBLEM 3: HPA fighting with something else
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Symptom: Replicas changing randomly
Cause: kubectl scale AND HPA both running
Fix: Never manually scale a deployment that has HPA
     HPA owns the replica count — don't touch it

PROBLEM 4: Scale-down too aggressive
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Symptom: Traffic spike → scale up → traffic normal
  → HPA scales down → traffic spike again → repeat
Cause: stabilizationWindowSeconds too low
Fix: Increase scaleDown stabilizationWindowSeconds to 300
     Add conservative Min scale-down policy

DIAGNOSING HPA:
kubectl describe hpa api-hpa -n production
# Look for:
# Conditions:
#   AbleToScale     True  ReadyForNewScale
#   ScalingActive   True  ValidMetricFound
#   ScalingLimited  False
#
# Events:
#   SuccessfulRescale  Scaled up replica count 3 → 5
```

---

# PART 2: CLUSTER AUTOSCALER — Node-Level Scaling

## Mental Model — The Building Manager

```
Think of the Cluster Autoscaler like a building manager
who adds new office floors when the building is full.

Building = Kubernetes cluster
Floors   = EC2 nodes
Offices  = pods

SCENARIO WITHOUT CLUSTER AUTOSCALER:
Building has 3 floors (nodes), all full.
New employee (pod) arrives → no office → waits in lobby (Pending).
Manager (scheduler) says "sorry, no room."
Pod stays Pending until someone leaves.

SCENARIO WITH CLUSTER AUTOSCALER:
New employee arrives → no room → stays in lobby (Pending).
Building manager sees lobby has waiting people (Pending pods).
Manager calls construction company (AWS Auto Scaling Group).
"Add a new floor (EC2 node) immediately."
New floor built in 3-5 minutes.
New employee gets an office.

SCALE-DOWN SCENARIO:
After a project ends, 2 floors are almost empty.
Manager checks: any floor with < 50% utilization?
Manager checks: can all pods on this floor fit on other floors?
YES → manager tells construction to remove the floor.
Pods move to other floors first (graceful eviction).
Floor removed. Cost saved.

THE CATCH:
Building takes 3-5 minutes to build a new floor.
During those minutes, pods are Pending, traffic is suffering.
This is why you need BUFFER CAPACITY.
Don't wait until nodes are 100% full.
Scale pods (HPA) before nodes are full.
```

## Cluster Autoscaler Internals

```
LOOP RUNS EVERY 10 SECONDS:

SCALE-UP CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Any pods in Pending state?
2. Is the pod Pending because of RESOURCE constraints?
   (Not because of: wrong nodeSelector, taint without toleration,
    image pull error, or any non-resource reason)
3. If yes: simulate adding a new node from each node group
4. Would the pod schedule on the simulated new node?
5. If yes: trigger AWS ASG to increase desired count by 1
6. Wait for node to be Ready

IMPORTANT: CA only triggers scale-up for pods that are
Pending due to INSUFFICIENT RESOURCES.
If pod is Pending for OTHER reasons → CA does nothing.
Check with: kubectl describe pod stuck-pod
Look at Events: "0/3 nodes available: Insufficient cpu"
vs "0/3 nodes available: node(s) didn't match nodeSelector"
The second one → CA won't help → fix your config

SCALE-DOWN CHECK (runs every 10 seconds but more conservative):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Any node with < 50% requested resources for > 10 minutes?
   (--scale-down-utilization-threshold, default 0.5)
2. For each underutilized node: can all its pods fit on other nodes?
3. Check: would moving these pods violate PodDisruptionBudgets?
4. Check: are there any "safe to evict: false" annotations?
5. If all safe: cordon the node (no new pods), evict pods,
   wait for pods to reschedule, terminate the EC2 instance

WHAT BLOCKS SCALE-DOWN:
→ Pod with no ReplicaSet (naked pod) — CA won't evict it
→ Pod with local storage (emptyDir) — CA won't evict it
→ Pod with "cluster-autoscaler.kubernetes.io/safe-to-evict: false"
→ PodDisruptionBudget would be violated
→ Node has a DaemonSet pod (always stays)
→ Node not underutilized for long enough (10 min default)

ANNOTATION TO PROTECT A POD FROM SCALE-DOWN:
metadata:
  annotations:
    cluster-autoscaler.kubernetes.io/safe-to-evict: "false"
```

## Cluster Autoscaler Configuration

```bash
# ════════════════════════════════════════════════
# INSTALL CLUSTER AUTOSCALER ON EKS
# ════════════════════════════════════════════════

# First: create IAM role for CA via IRSA
eksctl create iamserviceaccount \
  --cluster=$CLUSTER_NAME \
  --namespace=kube-system \
  --name=cluster-autoscaler \
  --attach-policy-arn=arn:aws:iam::aws:policy/AutoScalingFullAccess \
  --override-existing-serviceaccounts \
  --approve

# Better: use a custom policy (least privilege)
cat > /tmp/ca-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "autoscaling:DescribeAutoScalingGroups",
        "autoscaling:DescribeAutoScalingInstances",
        "autoscaling:DescribeLaunchConfigurations",
        "autoscaling:DescribeTags",
        "autoscaling:SetDesiredCapacity",
        "autoscaling:TerminateInstanceInAutoScalingGroup",
        "ec2:DescribeLaunchTemplateVersions",
        "ec2:DescribeInstanceTypes",
        "eks:DescribeNodegroup"
      ],
      "Resource": ["*"]
    }
  ]
}
EOF

CA_POLICY=$(aws iam create-policy \
  --policy-name "${CLUSTER_NAME}-cluster-autoscaler" \
  --policy-document file:///tmp/ca-policy.json \
  --query 'Policy.Arn' --output text)

# Add required tags to node groups so CA can discover them
# eksctl does this automatically, but verify:
aws autoscaling describe-auto-scaling-groups \
  --query "AutoScalingGroups[?contains(Tags[?Key=='kubernetes.io/cluster/${CLUSTER_NAME}'].Value, 'owned')].{Name:AutoScalingGroupName,Min:MinSize,Max:MaxSize,Desired:DesiredCapacity}" \
  --output table

# Install via Helm
helm repo add autoscaler https://kubernetes.github.io/autoscaler
helm repo update autoscaler

helm install cluster-autoscaler autoscaler/cluster-autoscaler \
  --namespace kube-system \
  --set autoDiscovery.clusterName=$CLUSTER_NAME \
  --set awsRegion=$AWS_REGION \
  --set rbac.serviceAccount.name=cluster-autoscaler \
  --set rbac.serviceAccount.create=false \
  \
  --set extraArgs.balance-similar-node-groups=true \
  --set extraArgs.skip-nodes-with-system-pods=false \
  --set extraArgs.skip-nodes-with-local-storage=false \
  \
  --set extraArgs.scale-down-enabled=true \
  --set extraArgs.scale-down-delay-after-add=5m \
  --set extraArgs.scale-down-unneeded-time=10m \
  --set extraArgs.scale-down-utilization-threshold=0.5 \
  \
  --set extraArgs.max-node-provision-time=15m \
  --set extraArgs.scan-interval=10s \
  --set extraArgs.expander=least-waste \
  \
  --set resources.requests.cpu=100m \
  --set resources.requests.memory=300Mi \
  --set resources.limits.cpu=1 \
  --set resources.limits.memory=600Mi

# Verify it's running
kubectl get pods -n kube-system -l app.kubernetes.io/name=cluster-autoscaler

# Watch CA logs
kubectl logs -n kube-system \
  -l app.kubernetes.io/name=cluster-autoscaler -f

# You should see:
# "Starting main loop"
# "Scale down status: ready for scale down"
# "Node group: prod-eks-app-nodes: 3/10 nodes"
```

## Expander Strategies — How CA Picks Which Node Group

```
When multiple node groups can host a pending pod,
CA uses an EXPANDER to decide which to scale up.

EXPANDERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

random (default)
→ Picks a node group randomly
→ Good for testing, bad for production

least-waste (recommended)
→ Picks the node group whose new node
  wastes the LEAST resources
→ If pod needs 2 CPU: picks the instance type
  that most closely matches (minimizes leftover capacity)
→ Cost efficient

least-nodes
→ Picks the option that scales up the FEWEST nodes
→ Tries to bin-pack — fill existing nodes first

price
→ Picks the cheapest node group
→ Requires cloud provider pricing info
→ Great for cost optimization

priority
→ You define priority per node group
→ Always tries highest priority first
→ Useful for: try spot first, fall back to on-demand

PRODUCTION RECOMMENDATION:
Use priority expander:
  Priority 10: spot-nodes    (try cheap first)
  Priority 1:  on-demand-nodes (fall back to reliable)
```

---

# PART 3: SPOT INSTANCES — Cheap Capacity With Teeth

## Mental Model — The Standby Airplane Seat

```
SPOT INSTANCES = Standby seats on a plane.

Full-price ticket (On-Demand) = Your seat is guaranteed.
Standby (Spot) = Seat is available RIGHT NOW at 70% off.
BUT: If a full-price passenger shows up → you get bumped.
You get 2 minutes warning before you lose your seat.

AWS SPOT INSTANCES:
→ Up to 90% cheaper than On-Demand
→ AWS can reclaim with 2-minute warning (Spot interruption)
→ AWS sends a signal: this instance will be terminated in 2 min
→ Your app must handle this gracefully:
   1. Stop accepting new traffic (readiness probe fails)
   2. Finish in-flight requests
   3. Die cleanly
→ This is exactly what terminationGracePeriodSeconds handles

WHEN SPOT IS SAFE:
✅ Stateless web services (API pods) — any pod can be killed
✅ Worker pods processing queues — incomplete work requeues
✅ Batch jobs — can restart from checkpoint
✅ CI/CD runners — job retries on new node

WHEN SPOT IS DANGEROUS:
❌ Databases — state is lost when node dies
❌ StatefulSets with local storage — PV attached to dead node
❌ Control plane components — cluster breaks
❌ Single-replica services — downtime when spot is reclaimed

SPOT STRATEGY: MIX SPOT AND ON-DEMAND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Baseline (On-Demand): minimum capacity you always need
  → runs on on-demand nodes guaranteed never interrupted

Burst (Spot): extra capacity for traffic spikes
  → runs on spot nodes for 70-90% savings
  → if spot interrupted: pods reschedule to on-demand (if capacity)

Production pattern:
  min 2 on-demand nodes always running (baseline)
  HPA scales pods → Spot nodes absorb the burst
  Spot interrupted → CA launches new spot (different AZ/type)
  If no spot available → CA falls back to on-demand
```

## Multiple Instance Type Strategy

```
SPOT DIVERSIFICATION — the most important spot concept

WRONG WAY:
Request spot for ONLY m5.large
→ m5.large spot pool dries up → no capacity → pods stay Pending
→ You have no fallback

RIGHT WAY:
Request spot across MANY instance types:
  m5.large, m5a.large, m5n.large,
  m4.large, t3.large, t3a.large
→ All have similar CPU/memory
→ If one pool dries up → spot from another pool fills in
→ AWS calls this "instance flexibility"

THE RULE: BIGGER POOLS = MORE STABILITY
The more instance types you allow,
the larger the combined spot pool,
the less likely you get interrupted.

USE KARPENTER OR AWS EC2 NODE GROUPS with
overrides for multiple instance types:

NODE GROUP OVERRIDE STRATEGY:
instancesDistribution:
  onDemandBaseCapacity: 0       # All spot by default
  onDemandPercentageAboveBase: 0  # 0% on-demand
  spotAllocationStrategy: capacity-optimized  # Pick deepest pool
  spotInstancePools: 4          # Spread across 4 pools
overrides:
- instanceType: m5.large
- instanceType: m5a.large
- instanceType: m5n.large
- instanceType: m4.large
- instanceType: t3.large
- instanceType: t3a.large
Setting Up Spot Node Groups
# ════════════════════════════════════════════════
# ADD A SPOT NODE GROUP TO EXISTING EKS CLUSTER
# ════════════════════════════════════════════════

cat << EOF | eksctl create nodegroup -f -
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: ${CLUSTER_NAME}
  region: ${AWS_REGION}

managedNodeGroups:
- name: spot-nodes
  # Multiple instance types = diversified spot pool
  instanceTypes:
  - m5.large
  - m5a.large
  - m5n.large
  - m4.large
  - t3.large
  - t3a.large

  spot: true   # THIS makes it a spot node group

  minSize: 0   # Can scale to 0 when not needed
  maxSize: 20  # Max during traffic spike
  desiredCapacity: 0  # Start empty — CA scales it up

  privateNetworking: true
  availabilityZones:
  - ${AWS_REGION}a
  - ${AWS_REGION}b

  labels:
    node-role: spot-worker
    workload-type: burst
    capacity-type: spot

  taints:
  - key: capacity-type
    value: spot
    effect: NoSchedule  # Only tolerating pods go to spot

  tags:
    NodeGroup: spot-worker
    k8s.io/cluster-autoscaler/enabled: "true"
    k8s.io/cluster-autoscaler/${CLUSTER_NAME}: owned

  iam:
    attachPolicyARNs:
    - arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy
    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy
    - arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
    withAddonPolicies:
      autoScaler: true
EOF

# Verify the spot node group was created
kubectl get nodes -L node-role,capacity-type

# ════════════════════════════════════════════════
# HANDLE SPOT INTERRUPTIONS
# Install the AWS Node Termination Handler
# This DaemonSet listens for the 2-minute warning
# and gracefully drains the node
# ════════════════════════════════════════════════

helm repo add eks https://aws.github.io/eks-charts
helm repo update eks

helm install aws-node-termination-handler \
  eks/aws-node-termination-handler \
  --namespace kube-system \
  --set enableSpotInterruptionDraining=true \
  --set enableScheduledEventDraining=true \
  --set enableRebalanceMonitoring=true \
  --set enableRebalanceDraining=true \
  --set nodeTerminationGracePeriod=120 \
  --set podTerminationGracePeriod=60 \
  --set emitKubernetesEvents=true \
  --set logLevel=info

# What NTH does when spot interruption hits:
# T-2min: AWS sends interruption notice to EC2 metadata
# T-2min: NTH detects the notice (polls metadata every 5s)
# T-2min: NTH cordons the node (no new pods)
# T-2min: NTH sends SIGTERM to all pods
# T-1min: Pods drain gracefully (finish in-flight requests)
# T-0:    EC2 instance terminates
# T+10s:  Cluster Autoscaler detects lost node
# T+10s:  Pods from dead node go Pending
# T+30s:  CA triggers new spot instance in different pool

# ════════════════════════════════════════════════
# DEPLOY WORKLOADS THAT TOLERATE SPOT
# ════════════════════════════════════════════════

kubectl apply -n production - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-burst
  namespace: production
spec:
  replicas: 0   # Starts at 0, HPA scales it up
  selector:
    matchLabels:
      app: api-burst
  template:
    metadata:
      labels:
        app: api-burst
    spec:
      # Accept the spot taint — this pod CAN run on spot
      tolerations:
      - key: capacity-type
        value: spot
        effect: NoSchedule

      # Prefer spot nodes, fall back to on-demand
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            preference:
              matchExpressions:
              - key: capacity-type
                operator: In
                values: ["spot"]

      # Handle graceful shutdown when spot is interrupted
      terminationGracePeriodSeconds: 90  # < 2 min spot warning

      containers:
      - name: api
        image: nginx:1.24.0
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "200m"
            memory: "256Mi"
          limits:
            cpu: "1"
            memory: "512Mi"

        # Fail readiness immediately on SIGTERM
        # This removes pod from LB before it dies
        lifecycle:
          preStop:
            exec:
              command: ["/bin/sh", "-c", "sleep 10"]
          # The sleep gives LB time to stop sending traffic
          # before the process actually exits
EOF
PART 4: THE PROJECT — Traffic Spike Simulation
Setting Up the Full Autoscaling Stack
# ════════════════════════════════════════════════
# SETUP: Install metrics-server (required for HPA)
# ════════════════════════════════════════════════

kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Verify metrics-server works
kubectl top nodes
kubectl top pods -A

# If on kind (local cluster) metrics-server needs flag:
kubectl patch deployment metrics-server \
  -n kube-system \
  --type=json \
  -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'

# ════════════════════════════════════════════════
# DEPLOY THE TARGET APPLICATION
# A CPU-burning app that responds to load
# ════════════════════════════════════════════════

kubectl apply -n production - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: load-target
  namespace: production
  labels:
    app: load-target
    version: "1.0.0"
spec:
  replicas: 2
  selector:
    matchLabels:
      app: load-target
  template:
    metadata:
      labels:
        app: load-target
    spec:
      containers:
      - name: app
        image: k8s.gcr.io/hpa-example
        # This image does CPU computation on each request
        # Perfect for testing HPA CPU scaling
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "200m"
            memory: "64Mi"
          limits:
            cpu: "500m"
            memory: "128Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: load-target-svc
  namespace: production
spec:
  selector:
    app: load-target
  ports:
  - port: 80
    targetPort: 80
EOF

# Wait for pods
kubectl rollout status deployment/load-target -n production

# ════════════════════════════════════════════════
# CONFIGURE HPA WITH MEASUREMENT ANNOTATIONS
# ════════════════════════════════════════════════

kubectl apply -n production - << 'EOF'
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: load-target-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: load-target
  minReplicas: 2
  maxReplicas: 20

  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50   # Low threshold = faster scaling

  behavior:
    scaleUp:
      stabilizationWindowSeconds: 0    # Scale UP immediately
      policies:
      - type: Pods
        value: 4                        # Add up to 4 pods at once
        periodSeconds: 15
    scaleDown:
      stabilizationWindowSeconds: 60   # Wait 1 min before scale down
      policies:
      - type: Pods
        value: 2
        periodSeconds: 30
EOF

# Verify HPA is working
kubectl get hpa -n production -w
# NAME               REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS
# load-target-hpa    Deployment/load-   2%/50%    2         20        2
The Traffic Spike Simulation
# ════════════════════════════════════════════════
# MONITORING SETUP — open these in separate terminals
# Watch everything happen in real time
# ════════════════════════════════════════════════

# TERMINAL 1: Watch HPA status (most important)
watch -n5 'kubectl get hpa load-target-hpa -n production'

# TERMINAL 2: Watch pods (count and status)
watch -n3 'kubectl get pods -n production -l app=load-target -o wide'

# TERMINAL 3: Watch nodes (for cluster autoscaler)
watch -n10 'kubectl get nodes -L node-role,capacity-type'

# TERMINAL 4: Watch events (the story of what happened)
kubectl get events -n production -w \
  --field-selector reason=SuccessfulRescale

# TERMINAL 5: Resource usage live
watch -n5 'kubectl top pods -n production -l app=load-target'

# ════════════════════════════════════════════════
# THE LOAD GENERATOR — attack the service
# ════════════════════════════════════════════════

# Deploy a persistent load generator
kubectl run load-generator \
  --image=busybox \
  --restart=Never \
  -n production \
  --requests='cpu=100m,memory=64Mi' \
  -- /bin/sh -c \
  "while true; do \
     wget -q -O- http://load-target-svc.production.svc.cluster.local/; \
   done"

echo "Load generator running. Watch HPA terminal..."

# ════════════════════════════════════════════════
# MEASUREMENT — record timestamps
# This builds your scaling latency report
# ════════════════════════════════════════════════

echo "=== SCALING LATENCY MEASUREMENT ==="
echo "T+0: Load generator started at $(date '+%H:%M:%S')"

# Watch for first scale event
kubectl get events -n production \
  --field-selector reason=SuccessfulRescale -w &
EVENTS_PID=$!

# Poll HPA state every 5 seconds and log it
while true; do
  TIMESTAMP=$(date '+%H:%M:%S')
  HPA_DATA=$(kubectl get hpa load-target-hpa -n production \
    --no-headers 2>/dev/null)
  PODS=$(kubectl get pods -n production -l app=load-target \
    --no-headers 2>/dev/null | wc -l)
  CPU=$(kubectl top pods -n production -l app=load-target \
    --no-headers 2>/dev/null | \
    awk '{sum+=$2} END {print sum}' | tr -d 'm')

  echo "${TIMESTAMP} | Pods: ${PODS} | HPA: ${HPA_DATA} | CPU: ${CPU}m"
  sleep 5
done &
POLL_PID=$!

# Let it run for 5 minutes to see full scale-up
sleep 300

# Stop the load generator
kubectl delete pod load-generator -n production
echo "T+5min: Load stopped at $(date '+%H:%M:%S')"

# Continue watching scale-down
sleep 120

# Stop polling
kill $POLL_PID $EVENTS_PID 2>/dev/null

# ════════════════════════════════════════════════
# ADVANCED: Multi-wave spike simulation
# Tests HPA with realistic traffic patterns
# ════════════════════════════════════════════════

cat << 'SCRIPT' > /tmp/spike_simulation.sh
#!/bin/bash
set -e

NAMESPACE="production"
TARGET_SVC="load-target-svc"
LOG_FILE="/tmp/scaling_metrics_$(date +%Y%m%d_%H%M%S).txt"

echo "=== AUTOSCALING SPIKE SIMULATION ===" | tee $LOG_FILE
echo "Started: $(date)" | tee -a $LOG_FILE

log_state() {
  TS=$(date '+%H:%M:%S')
  REPLICAS=$(kubectl get deployment load-target -n $NAMESPACE \
    -o jsonpath='{.status.readyReplicas}' 2>/dev/null || echo "0")
  DESIRED=$(kubectl get hpa load-target-hpa -n $NAMESPACE \
    -o jsonpath='{.status.desiredReplicas}' 2>/dev/null || echo "0")
  CPU_TARGET=$(kubectl get hpa load-target-hpa -n $NAMESPACE \
    -o jsonpath='{.spec.metrics[0].resource.target.averageUtilization}' 2>/dev/null)
  CPU_CURRENT=$(kubectl get hpa load-target-hpa -n $NAMESPACE \
    -o jsonpath='{.status.currentMetrics[0].resource.current.averageUtilization}' 2>/dev/null || echo "0")
  NODES=$(kubectl get nodes --no-headers 2>/dev/null | wc -l)

  echo "${TS} | Nodes:${NODES} | ReadyPods:${REPLICAS} | DesiredPods:${DESIRED} | CPU:${CPU_CURRENT}% (target:${CPU_TARGET}%)" \
    | tee -a $LOG_FILE
}

# PHASE 1: Baseline — no load
echo "" | tee -a $LOG_FILE
echo "=== PHASE 1: BASELINE (no load, 30s) ===" | tee -a $LOG_FILE
for i in $(seq 1 6); do
  log_state
  sleep 5
done

# PHASE 2: Gradual ramp-up
echo "" | tee -a $LOG_FILE
echo "=== PHASE 2: GRADUAL RAMP-UP (3 generators, 2min) ===" | tee -a $LOG_FILE
echo "Ramp start: $(date '+%H:%M:%S')" | tee -a $LOG_FILE

for i in 1 2 3; do
  kubectl run load-gen-${i} \
    --image=busybox \
    --restart=Never \
    -n $NAMESPACE \
    --requests='cpu=50m,memory=32Mi' \
    -- /bin/sh -c \
    "while true; do wget -q -O- http://${TARGET_SVC}/; done" \
    2>/dev/null

  echo "Generator ${i} started at $(date '+%H:%M:%S')" | tee -a $LOG_FILE
  sleep 20   # Stagger generator starts

  log_state
done

# Let ramp-up metrics settle
for i in $(seq 1 12); do
  log_state
  sleep 5
done

# PHASE 3: SPIKE — maximum load
echo "" | tee -a $LOG_FILE
echo "=== PHASE 3: FULL SPIKE (10 generators, 3min) ===" | tee -a $LOG_FILE
echo "Spike start: $(date '+%H:%M:%S')" | tee -a $LOG_FILE
SPIKE_START=$(date +%s)

for i in 4 5 6 7 8 9 10; do
  kubectl run load-gen-${i} \
    --image=busybox \
    --restart=Never \
    -n $NAMESPACE \
    --requests='cpu=50m,memory=32Mi' \
    -- /bin/sh -c \
    "while true; do wget -q -O- http://${TARGET_SVC}/; done" \
    2>/dev/null
done

echo "All 10 generators running" | tee -a $LOG_FILE

# Record time to first scale event
SCALED=false
for i in $(seq 1 36); do  # 3 minutes max
  log_state

  CURRENT_REPLICAS=$(kubectl get deployment load-target -n $NAMESPACE \
    -o jsonpath='{.status.readyReplicas}' 2>/dev/null || echo "2")

  if [ "$CURRENT_REPLICAS" -gt "2" ] && [ "$SCALED" = "false" ]; then
    SCALE_UP_TIME=$(date +%s)
    LATENCY=$((SCALE_UP_TIME - SPIKE_START))
    echo "SCALE-UP DETECTED at $(date '+%H:%M:%S') — Latency: ${LATENCY}s" | tee -a $LOG_FILE
    SCALED=true
  fi

  sleep 5
done

# PHASE 4: STOP load and measure scale-down
echo "" | tee -a $LOG_FILE
echo "=== PHASE 4: LOAD STOPS — measuring scale-down ===" | tee -a $LOG_FILE
echo "Scale-down start: $(date '+%H:%M:%S')" | tee -a $LOG_FILE
STOP_TIME=$(date +%s)

for i in $(seq 1 10); do
  kubectl delete pod load-gen-${i} -n $NAMESPACE 2>/dev/null || true
done

echo "All generators stopped" | tee -a $LOG_FILE

# Record time back to baseline
BASELINE_RESTORED=false
for i in $(seq 1 60); do  # 5 minutes max
  log_state

  CURRENT_REPLICAS=$(kubectl get deployment load-target -n $NAMESPACE \
    -o jsonpath='{.status.readyReplicas}' 2>/dev/null || echo "0")

  if [ "$CURRENT_REPLICAS" -le "2" ] && [ "$BASELINE_RESTORED" = "false" ]; then
    RESTORE_TIME=$(date +%s)
    SCALEDOWN_LATENCY=$((RESTORE_TIME - STOP_TIME))
    echo "BASELINE RESTORED at $(date '+%H:%M:%S') — Scale-down took: ${SCALEDOWN_LATENCY}s" | tee -a $LOG_FILE
    BASELINE_RESTORED=true
  fi

  sleep 5
done

echo "" | tee -a $LOG_FILE
echo "=== SIMULATION COMPLETE ===" | tee -a $LOG_FILE
echo "Log file: $LOG_FILE" | tee -a $LOG_FILE
cat $LOG_FILE
SCRIPT

chmod +x /tmp/spike_simulation.sh
bash /tmp/spike_simulation.sh

Measuring Cluster Autoscaler Scaling Latency
# ════════════════════════════════════════════════
# TEST CLUSTER AUTOSCALER
# Fill current nodes, force CA to add a new one
# ════════════════════════════════════════════════

echo "=== CLUSTER AUTOSCALER LATENCY TEST ==="
echo "Current nodes: $(kubectl get nodes --no-headers | wc -l)"
echo "Current pods: $(kubectl get pods -A --no-headers | grep Running | wc -l)"

# Create a large deployment that won't fit on existing nodes
# Calculate: how much CPU do current nodes have free?
kubectl top nodes
# If nodes have 1.5 CPU free across all nodes:
# Deploy pods requesting 600m each — 3 pods will trigger CA

CA_START=$(date +%s)

kubectl apply -n production - << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ca-test
  namespace: production
spec:
  replicas: 20   # Intentionally more than nodes can fit
  selector:
    matchLabels:
      app: ca-test
  template:
    metadata:
      labels:
        app: ca-test
    spec:
      containers:
      - name: app
        image: nginx:1.24.0
        resources:
          requests:
            cpu: "400m"    # Large enough to fill nodes fast
            memory: "256Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"
EOF

echo "CA test deployment created at $(date '+%H:%M:%S')"

# Watch for Pending pods — signal that CA should trigger
echo "Waiting for Pending pods..."
NODE_ADDED=false

while true; do
  TS=$(date '+%H:%M:%S')
  PENDING=$(kubectl get pods -n production -l app=ca-test \
    --field-selector status.phase=Pending \
    --no-headers 2>/dev/null | wc -l)
  RUNNING=$(kubectl get pods -n production -l app=ca-test \
    --field-selector status.phase=Running \
    --no-headers 2>/dev/null | wc -l)
  NODES=$(kubectl get nodes --no-headers | wc -l)

  echo "${TS} | Nodes: ${NODES} | Running: ${RUNNING} | Pending: ${PENDING}"

  # Check for CA log activity
  CA_LOG=$(kubectl logs -n kube-system \
    -l app.kubernetes.io/name=cluster-autoscaler \
    --tail=5 2>/dev/null | grep -E "scale up|Scale-up|adding node" | tail -1)

  if [ -n "$CA_LOG" ]; then
    echo "CA ACTION: $CA_LOG"
  fi

  # Detect new node
  if [ "$NODES" -gt "3" ] && [ "$NODE_ADDED" = "false" ]; then
    NEW_NODE_TIME=$(date +%s)
    PROVISION_LATENCY=$((NEW_NODE_TIME - CA_START))
    echo "NEW NODE ADDED at ${TS} — Provision latency: ${PROVISION_LATENCY}s"
    NODE_ADDED=true
  fi

  # Stop when all pods are running
  if [ "$PENDING" -eq "0" ] && [ "$RUNNING" -gt "0" ]; then
    COMPLETE_TIME=$(date +%s)
    TOTAL_LATENCY=$((COMPLETE_TIME - CA_START))
    echo "ALL PODS RUNNING at ${TS}"
    echo "Total latency (deploy to all running): ${TOTAL_LATENCY}s"
    break
  fi

  sleep 10
done

# Read CA logs for the full story
echo "=== CLUSTER AUTOSCALER ACTIVITY ==="
kubectl logs -n kube-system \
  -l app.kubernetes.io/name=cluster-autoscaler \
  --since=10m | grep -E "scale|node|pending" | head -30

# Cleanup
kubectl delete deployment ca-test -n production
echo "=== Test complete. CA should now scale down excess nodes ==="

# Watch scale-down
watch -n30 'kubectl get nodes'
# Nodes will reduce after --scale-down-unneeded-time (default 10min)
PART 5: THE DELIVERABLE — Scaling Efficiency Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUTOSCALING EFFICIENCY REPORT
Cluster: prod-eks | Date: [YOUR DATE] | Engineer: [YOUR NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: HPA PERFORMANCE RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Configuration:
  Target Deployment:    load-target
  Min Replicas:         2
  Max Replicas:         20
  CPU Target:           50%
  Scale-Up Window:      0s (immediate)
  Scale-Down Window:    60s

Measurement Results:
  Baseline CPU:           2-5%
  Peak CPU (10 workers):  92-95%

SCALE-UP TIMELINE:
  T+0s:    Load generators started
  T+15s:   metrics-server reports CPU > 50% threshold
  T+15s:   HPA calculates: desired = 2 × (92/50) = 3.68 → 4 pods
  T+15s:   HPA patches Deployment: replicas 2 → 4
  T+18s:   New pods created by ReplicaSet controller
  T+20s:   Scheduler places new pods on available nodes
  T+45s:   New pods pass readiness probe → traffic flows
  T+60s:   CPU stabilizes at 48% across 4 pods

  TIME FROM SPIKE START TO PODS SERVING TRAFFIC: ~45 seconds

SCALE-UP EFFICIENCY:
  Scale trigger latency:    15s  (metrics-server refresh)
  Pod creation latency:     3s   (Deployment → Pod objects)
  Container start latency:  12s  (image cached → running)
  Readiness probe latency:  15s  (app startup time)
  Total pod-ready latency:  30-45 seconds ✅

SCALE-DOWN TIMELINE:
  T+0s:    Load stopped
  T+15s:   metrics-server sees CPU dropping
  T+60s:   Stabilization window clears
  T+75s:   HPA calculates: desired = 4 × (5/50) = 0.4 → 2 (minReplicas)
  T+90s:   HPA scales from 4 → 3
  T+120s:  HPA scales from 3 → 2
  T+120s:  Back to baseline

  TIME FROM LOAD STOP TO BASELINE REPLICAS: ~2 minutes ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: CLUSTER AUTOSCALER PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Configuration:
  Node Groups:          app-nodes (on-demand), spot-nodes (spot)
  Min Nodes:            2 (on-demand baseline)
  Max Nodes:            22 (2 on-demand + 20 spot)
  Scale-Down Threshold: 50% utilization
  Scale-Down Delay:     10 minutes unneeded

Measurement Results:
NODE PROVISION TIMELINE:
  T+0s:    ca-test deployment created (20 replicas × 400m CPU)
  T+10s:   Pods start scheduling on existing nodes
  T+30s:   Existing nodes full → remaining pods Pending
  T+40s:   CA scan detects Pending pods
  T+40s:   CA evaluates: can spot-node group absorb these?
  T+42s:   CA calls AWS: increase spot-nodes ASG desired+1
  T+45s:   AWS API acknowledges request
  T+90s:   EC2 spot instance starts (fast — spot capacity available)
  T+120s:  Node appears in Kubernetes (kubelet registers)
  T+150s:  Node passes readiness checks → Ready
  T+155s:  Scheduler places Pending pods on new node
  T+160s:  All pods Running

  PROVISION LATENCY: 160 seconds (2m 40s) from Pending to Running ✅

NODE SCALE-DOWN TIMELINE:
  T+0s:    Load test deployment deleted
  T+0-10m: CA monitors node utilization every 10s
  T+10m:   Nodes below 50% for 10 consecutive minutes
  T+10m:   CA confirms: can all pods fit on fewer nodes?
  T+10m:   CA cordons empty spot node (no new pods)
  T+10m:   CA evicts remaining pods → they reschedule
  T+13m:   Node empty → CA terminates EC2 instance
  T+15m:   Node removed from cluster

  SCALE-DOWN LATENCY: 10-15 minutes (by design — conservative) ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: SPOT INSTANCE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Configuration:
  Instance Types:     m5.large, m5a.large, m5n.large, m4.large,
                      t3.large, t3a.large (6 types diversified)
  Allocation Strategy: capacity-optimized
  Interruption Handler: AWS Node Termination Handler

Cost Analysis:
  On-Demand m5.large:  $0.096/hr
  Spot m5.large:       $0.029/hr (70% savings)
  Spot m5a.large:      $0.027/hr (72% savings)

  Monthly cost (3 nodes baseline):
    On-Demand:  3 × $0.096 × 730 = $210/month
    Mixed (2 OD + burst spot):
      2 OD: $140/month
      4 spot avg: 4 × $0.028 × 300hr surge = $34/month
    TOTAL: $174/month vs $210/month = 17% saving on compute

  With heavy spot usage (60% spot):
    Potential saving: 40-50% on node costs

Spot Interruption Resilience:
  Diversification: 6 instance types × 2 AZs = 12 spot pools
  Interruption probability per pool: ~2-5% per week
  Combined interruption probability: Very low
  NTH drain time: 90 seconds (within 2-min window) ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: SCALING LATENCY SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT USERS EXPERIENCE:
  T+0s:     Traffic spike starts
  T+0-45s:  Existing pods handle increased load
            (pods at high CPU — slow but serving)
  T+45s:    New pods ready — load distributed
            (CPU drops — normal latency restored)
  T+90-160s: If nodes were full: new node joins
             Pods that were Pending now serve traffic

BOTTLENECKS IDENTIFIED:
  1. metrics-server refresh: 15s delay before HPA acts
     FIX: Reduce --metric-resolution-period to 10s

  2. Pod startup time: 12-15s for readiness
     FIX: Optimize container startup, cache images,
          pre-warm with PodTemplates

  3. Node provision: 2-3 minutes unavoidable
     FIX: Over-provision with buffer nodes using Balloon pods
          (placeholder pods that consume resources,
           evicted when real pods need the space)

  4. Scale-down delay: 10 minutes by design
     FIX: Reduce --scale-down-unneeded-time if cost is priority
          Increase if stability is priority

SCALING EFFICIENCY SCORE:
  HPA pod-level scaling:    ✅ EXCELLENT (45s end-to-end)
  CA node provisioning:     ✅ GOOD (160s — expected for EC2)
  Spot cost efficiency:     ✅ EXCELLENT (70% savings)
  Spot resilience:          ✅ GOOD (6 pool diversification)
  Scale-down speed:         ⚠️  CONSERVATIVE (10min — by design)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: OPTIMIZATION RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIORITY 1 — BALLOON PODS (eliminate node provision wait)
  Deploy placeholder pods that consume node capacity.
  When real pods need the space → Balloon pods evicted first.
  New node provisions while balloon pods are evicted.
  Real pods land on existing nodes. No wait.

  Implementation:
  kubectl apply -f - << 'EOF'
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: balloon
    namespace: kube-system
  spec:
    replicas: 5      # 5 placeholder pods
    selector:
      matchLabels:
        app: balloon
    template:
      metadata:
        labels:
          app: balloon
      spec:
        priorityClassName: balloon-priority  # Very low priority
        containers:
        - name: balloon
          image: registry.k8s.io/pause:3.9
          resources:
            requests:
              cpu: "500m"
              memory: "256Mi"
  EOF
  # When real pods are needed: they preempt balloon pods
  # Balloon pods go Pending → CA provisions new nodes for them
  # Result: buffer capacity always available = zero wait time

PRIORITY 2 — KARPENTER (replace Cluster Autoscaler)
  Karpenter is AWS's next-generation node autoscaler.
  Provisions EXACTLY the right instance for pending pods.
  Provisions in 30-60 seconds vs 2-3 minutes.
  Automatic spot diversity built-in.
  More cost-efficient. Faster. Smarter.
  RECOMMENDED for new clusters.

PRIORITY 3 — PREDICTIVE SCALING (KEDA + scheduled scaling)
  HPA reacts. Predictive scaling ANTICIPATES.
  If traffic spikes at 9am every weekday:
  Pre-scale to 10 pods at 8:45am.
  No latency impact on users at 9am.
  KEDA supports cron-based scaling triggers.

PRIORITY 4 — CUSTOM METRICS HPA
  Replace CPU metric with request-rate metric.
  CPU is a proxy. Request rate is reality.
  1000 RPS per pod target = direct business metric.
  Scales before CPU even becomes a problem.

OVERALL ASSESSMENT:
  Current setup handles: moderate traffic spikes well
  Weakest point: node provision latency (2-3 min gap)
  Biggest opportunity: Balloon pods + Karpenter
  Cost savings achieved: 17-50% with spot diversification
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 6: THE MENTAL MODELS THAT MAKE YOU A WIZARD
MENTAL MODEL 1: THE SCALING CHAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Traffic → Pod CPU up → HPA scales pods → Nodes full →
Pods Pending → CA adds nodes → Pods schedule → Traffic served

Break any link in this chain → scaling fails.
Debug by checking each link:
  Pods not scaling? → Check HPA, check metrics-server
  Pods Pending? → Check CA, check node capacity
  Nodes not adding? → Check CA logs, check ASG limits

MENTAL MODEL 2: SPEED VS STABILITY TRADEOFF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scale UP fast — users are hurting RIGHT NOW
Scale DOWN slow — what if traffic comes back?

scaleUp.stabilizationWindowSeconds: 0-60 (fast)
scaleDown.stabilizationWindowSeconds: 180-600 (slow)

The asymmetry is intentional and correct.

MENTAL MODEL 3: REQUESTS ARE THE CURRENCY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HPA uses REQUESTS not actual usage for percentage calc.
Scheduler uses REQUESTS not actual usage for placement.
CA uses REQUESTS not actual usage for utilization calc.

Pod using 900m CPU with request of 100m:
  → HPA sees: 900% utilization (900/100)
  → HPA scales aggressively → correct behavior
  → But also: REQUESTS were too low (should be 500m)

Always set requests close to P50 actual usage.
Never set requests too low — HPA math goes wrong.

MENTAL MODEL 4: SPOT IS ABOUT POOLS NOT PRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The price discount is nice.
The POOL SIZE is what matters for reliability.

m5.large spot pool in us-east-1a: huge pool = rarely interrupted
c5.xlarge spot pool in ap-southeast-2: small pool = often interrupted

Pick: common instance types in busy regions = large pools.
Don't optimize for cheapest. Optimize for most available.
Use capacity-optimized allocation strategy.

MENTAL MODEL 5: KARPENTER IS THE FUTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cluster Autoscaler: you define node groups → CA picks between them
Karpenter: you define what pods need → Karpenter creates exactly that

CA: "I have 3 node groups. Which one do I scale?"
Karpenter: "Pod needs 2 CPU, 4GB. I'll launch a t3.medium. Done. 60s."

Karpenter is 2-3x faster to provision.
Karpenter is more cost-efficient.
Karpenter handles spot automatically.
If building new: use Karpenter.
If migrating: worth the effort to switch.
YOUR COMPLETE CHECKLIST
CONCEPTS — explain without notes:
□ Explain the HPA formula: desiredReplicas = current × (metric/target)
□ Explain why scale-up window is short but scale-down is long
□ Explain what happens when HPA shows <unknown>
□ Explain the difference between Requests and Limits for HPA
□ Explain the full Cluster Autoscaler scale-up loop
□ Explain what blocks CA from scaling down a node
□ Explain why spot diversification matters more than spot price
□ Explain what the 2-minute spot interruption notice means
□ Explain Balloon pods and why they eliminate provision latency
□ Explain Karpenter vs Cluster Autoscaler in one minute

LABS — done with your own hands:
□ metrics-server installed and kubectl top works
□ HPA deployed watching CPU target 50%
□ Single load generator started → HPA scaled pods (observed)
□ 10 load generators → peak CPU observed → max scaling
□ All generators stopped → scale-down to baseline observed
□ Full spike simulation script run → log file generated
□ Spot node group added to cluster
□ AWS Node Termination Handler installed
□ CA test deployment: pods Pending → CA added node → all running
□ CA scale-down: empty nodes removed after timeout
□ All timestamps recorded for latency report

DELIVERABLE:
□ HPA scale-up latency measured (pod-ready time)
□ HPA scale-down latency measured (baseline restore time)
□ CA provision latency measured (Pending to Running)
□ CA scale-down latency measured (empty to terminated)
□ Spot cost savings calculated vs on-demand
□ Bottlenecks identified with specific fixes
□ Balloon pod recommendation documented
□ Optimization priority list created
Eight modules in. You now understand autoscaling from the math inside the HPA control loop all the way down to EC2 spot instance pool dynamics. You know why the scale-up window is short, why scale-down is slow by design, why spot diversification beats spot price, and why Balloon pods eliminate the biggest latency gap in the entire system.
The Linux cgroups from Module 1 enforce the resource limits HPA depends on. The AWS IAM from Module 3 controls Cluster Autoscaler's access to the ASG API. The Kubernetes control plane from Module 7 runs the HPA controller that does the math every 15 seconds. The EKS setup from Module 8 is where all of this runs.
Everything connects. Always has.
Go run every simulation. Capture every timestamp. Build that report from real numbers. That's what production engineers do.










Infrastructure as Code — Terraform + ArgoCD 🏗️
Your Senior DevSecOps Mentor Speaking
Every module so far you've been clicking commands and applying YAMLs one at a time. That works for learning. It is a disaster in production.
Here's why. Six months from now your colleague asks: "Why is the security group configured this way?" You don't remember. The console has no history. The YAML you applied is gone. Nobody knows what changed, when, or why.
Infrastructure as Code solves this permanently. Every resource is declared in code. Code lives in Git. Git has history. History has blame. Blame has accountability. Accountability means you can sleep at night.
Terraform manages your cloud infrastructure. ArgoCD manages your Kubernetes infrastructure. Together they make your entire platform reproducible, auditable, and recoverable from complete disaster in minutes.
This is how serious engineering teams operate. No console clicks. Ever.
THE MASTER MENTAL MODEL FIRST
BEFORE IaC — The Wild West
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1:  Bob clicks around AWS console, creates VPC
Day 30: Alice SSHes into server, installs nginx manually
Day 60: Bob "tweaks" security group, forgets to document
Day 90: Server dies. Nobody knows how it was configured.
        Company loses 3 days rebuilding from memory.
        Half the config is wrong. Incidents happen.
        Bob says "I think I did something like this..."

This is infrastructure defined in someone's HEAD.
Head is not version controlled.
Head forgets.
Head leaves the company.

AFTER IaC — Engineering Discipline
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1:  Bob writes VPC in Terraform. Opens PR. Alice reviews.
Day 30: Alice writes nginx config in Helm chart. Opens PR. Bob reviews.
Day 60: Bob changes security group. Terraform plan shows the diff.
        PR reviewed. Approved. Applied. Logged forever in Git.
Day 90: Server dies. Run: terraform apply
        15 minutes later: identical infrastructure running.
        Zero memory required. Zero guessing.

TERRAFORM handles: AWS resources
  VPC, subnets, EKS cluster, RDS, IAM roles,
  security groups, Route53 records — everything AWS

ARGOCD handles: Kubernetes resources
  Deployments, Services, Ingress, HPA, secrets,
  ConfigMaps — everything inside the cluster

THE RELATIONSHIP:
  Terraform creates the CLUSTER
  ArgoCD runs INSIDE the cluster
  ArgoCD deploys APPLICATIONS to the cluster
  Git is the source of truth for BOTH

  Push to Git → Terraform applies → infrastructure exists
  Push to Git → ArgoCD syncs → application is deployed

  ONE git push = entire platform changes.
  Reviewed. Tested. Documented. Reversible.
  This is GitOps.
PART 1: TERRAFORM FUNDAMENTALS — How It Actually Works
Mental Model — The Blueprint and the Building
TERRAFORM is like an architect's blueprint system.

You write: what the building SHOULD look like
Terraform reads: what the building LOOKS LIKE RIGHT NOW
Terraform calculates: what changes to make
Terraform makes: exactly those changes. Nothing more.

THE STATE FILE = Terraform's memory
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

terraform.tfstate is a JSON file that says:
"I created VPC vpc-abc123 for the resource named main_vpc"
"I created subnet subnet-def456 for the resource named private_1a"

Without state:
Terraform doesn't know what it already created.
It would try to CREATE EVERYTHING AGAIN on next apply.
Duplicate resources. Errors. Chaos.

With state:
Terraform compares: "I know I created vpc-abc123.
Is the config still the same? YES → do nothing.
Did config change? YES → update it."

STATE IS SACRED.
Lose the state → Terraform doesn't know what it owns.
Corrupt the state → Terraform does wrong things.
Share the state incorrectly → two people apply at once → disaster.

THE FOUR TERRAFORM COMMANDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

terraform init    → download providers, set up backend
                    Run once when starting, run again after changes

terraform plan    → SHOW what would change (no changes made)
                    READ THIS BEFORE EVERY APPLY
                    This is your safety check

terraform apply   → MAKE the changes shown in plan
                    Creates/updates/destroys real resources

terraform destroy → DESTROY everything in state
                    Nuclear option. Use with extreme care.

THE WORKFLOW:
Write code → terraform plan → review → terraform apply → done
Always plan before apply. Always.
Core Terraform Syntax — The Building Blocks
# ════════════════════════════════════════════════
# TERRAFORM CONFIGURATION BLOCKS
# Learn each one cold
# ════════════════════════════════════════════════

# TERRAFORM BLOCK — configure Terraform itself
terraform {
  required_version = ">= 1.6.0"   # Minimum Terraform version

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"   # ~> means >=5.0 and <6.0
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }

  # REMOTE STATE — store state in S3, not locally
  # CRITICAL for team environments
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "production/eks/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true   # Encrypt state at rest (has secrets!)
    dynamodb_table = "terraform-state-lock"  # Prevent concurrent applies
  }
}

# PROVIDER BLOCK — configure the cloud provider
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      ManagedBy   = "terraform"
      Environment = var.environment
      Project     = var.project_name
    }
  }
}

# VARIABLE BLOCK — inputs to your configuration
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (production/staging/dev)"
  type        = string

  validation {
    condition     = contains(["production", "staging", "dev"], var.environment)
    error_message = "Environment must be production, staging, or dev."
  }
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "private_subnet_cidrs" {
  description = "List of CIDR blocks for private subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "tags" {
  description = "Additional tags for all resources"
  type        = map(string)
  default     = {}
}

# LOCAL BLOCK — computed values used internally
locals {
  cluster_name = "${var.project_name}-${var.environment}"
  common_tags = merge(var.tags, {
    ClusterName = local.cluster_name
    ManagedBy   = "terraform"
  })
  azs = slice(data.aws_availability_zones.available.names, 0, 2)
}

# DATA BLOCK — READ existing AWS resources (don't create them)
data "aws_availability_zones" "available" {
  state = "available"
}

data "aws_caller_identity" "current" {}

data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_name
  depends_on = [module.eks]
}

# RESOURCE BLOCK — CREATE AWS resources
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = merge(local.common_tags, {
    Name = "${local.cluster_name}-vpc"
    # EKS requires this tag on the VPC
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  })
}

# OUTPUT BLOCK — export values for other modules or humans
output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
  sensitive   = false
}

output "cluster_certificate_authority_data" {
  description = "Base64 encoded certificate authority data"
  value       = module.eks.cluster_certificate_authority_data
  sensitive   = true   # Won't show in terminal output
}
Meta-Arguments — Terraform Power Features
# COUNT — create multiple similar resources
resource "aws_subnet" "private" {
  count = length(var.private_subnet_cidrs)

  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidrs[count.index]
  availability_zone = local.azs[count.index]

  tags = {
    Name = "${local.cluster_name}-private-${count.index + 1}"
    "kubernetes.io/role/internal-elb" = "1"
  }
}

# Access: aws_subnet.private[0].id, aws_subnet.private[1].id

# FOR_EACH — create resources from a map (preferred over count)
variable "node_groups" {
  type = map(object({
    instance_type    = string
    min_size         = number
    max_size         = number
    desired_size     = number
    capacity_type    = string
  }))
  default = {
    system = {
      instance_type = "t3.medium"
      min_size      = 2
      max_size      = 4
      desired_size  = 2
      capacity_type = "ON_DEMAND"
    }
    app = {
      instance_type = "t3.medium"
      min_size      = 2
      max_size      = 10
      desired_size  = 3
      capacity_type = "SPOT"
    }
  }
}

resource "aws_eks_node_group" "this" {
  for_each = var.node_groups

  cluster_name    = aws_eks_cluster.main.name
  node_group_name = each.key
  node_role_arn   = aws_iam_role.node.arn

  subnet_ids = aws_subnet.private[*].id

  instance_types = [each.value.instance_type]
  capacity_type  = each.value.capacity_type

  scaling_config {
    min_size     = each.value.min_size
    max_size     = each.value.max_size
    desired_size = each.value.desired_size
  }

  tags = {
    Name = "${local.cluster_name}-${each.key}"
  }
}

# DEPENDS_ON — explicit dependency when Terraform can't detect it
resource "aws_eks_addon" "vpc_cni" {
  cluster_name = aws_eks_cluster.main.name
  addon_name   = "vpc-cni"

  depends_on = [
    aws_eks_node_group.this  # Wait for nodes before installing addon
  ]
}

# LIFECYCLE — control resource behavior
resource "aws_db_instance" "main" {
  identifier = "${local.cluster_name}-postgres"

  lifecycle {
    prevent_destroy       = true  # Terraform errors if you try to destroy this
    ignore_changes        = [
      password,           # Don't update DB if password changes in tfvars
      engine_version,     # Don't update if AWS patches the engine
    ]
    create_before_destroy = true  # Create replacement before destroying old
  }
}

# PROVISIONER — run commands after resource creation (use sparingly)
resource "null_resource" "kubeconfig" {
  provisioner "local-exec" {
    command = "aws eks update-kubeconfig --name ${local.cluster_name} --region ${var.aws_region}"
  }

  depends_on = [aws_eks_cluster.main]
}


PART 2: TERRAFORM MODULES — The Reusable Building Blocks
Mental Model — LEGO Bricks
MODULES are LEGO bricks.

Without modules (spaghetti Terraform):
One file with 2000 lines.
VPC, EKS, RDS, IAM all mixed together.
Impossible to reuse. Impossible to test.
Change one thing → need to read 2000 lines to understand impact.

With modules (clean Terraform):
Each module = one LEGO brick with:
  INPUTS: what goes in (variables)
  LOGIC: what the brick does internally
  OUTPUTS: what comes out (outputs)

vpc-module:     IN: cidr, region → OUT: vpc_id, subnet_ids
eks-module:     IN: vpc_id, cluster_name → OUT: cluster_endpoint
rds-module:     IN: vpc_id, subnet_ids → OUT: db_endpoint
iam-module:     IN: cluster_name → OUT: role_arns

ROOT module connects them:
  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnet_ids

USE THIS MODULE FOR THIS CLUSTER.
USE SAME MODULE FOR STAGING CLUSTER.
USE SAME MODULE FOR DEV CLUSTER.
Write once. Use everywhere.
Module Directory Structure
Your production infrastructure as code structure:

terraform/
├── environments/
│   ├── production/
│   │   ├── main.tf          ← calls modules, wires them together
│   │   ├── variables.tf     ← environment-specific variables
│   │   ├── outputs.tf       ← what to export
│   │   ├── terraform.tfvars ← actual values for production
│   │   └── backend.tf       ← remote state config
│   ├── staging/
│   │   ├── main.tf          ← same modules, different values
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── terraform.tfvars
│   └── dev/
│       └── ...
│
└── modules/
    ├── vpc/
    │   ├── main.tf          ← resource definitions
    │   ├── variables.tf     ← input variables
    │   ├── outputs.tf       ← output values
    │   └── README.md        ← documentation
    ├── eks/
    │   ├── main.tf
    │   ├── variables.tf
    │   ├── outputs.tf
    │   └── README.md
    ├── rds/
    │   └── ...
    ├── iam/
    │   └── ...
    └── irsa/
        └── ...

THE RULE:
Modules have NO environment-specific config.
Modules are generic. Variables make them specific.
environments/production/main.tf provides the specifics.
Build Every Module
Module 1: VPC
# modules/vpc/variables.tf
variable "cluster_name" {
  description = "Name of the EKS cluster (used for tagging)"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidrs" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnet_cidrs" {
  type    = list(string)
  default = ["10.0.3.0/24", "10.0.4.0/24"]
}

variable "enable_nat_gateway" {
  description = "Create NAT Gateways for private subnets"
  type        = bool
  default     = true
}

variable "single_nat_gateway" {
  description = "Use single NAT GW (cost saving) vs one per AZ (HA)"
  type        = bool
  default     = false   # false = HA (one per AZ) — production default
}

variable "tags" {
  type    = map(string)
  default = {}
}

# modules/vpc/main.tf
data "aws_availability_zones" "available" {
  state = "available"
}

locals {
  azs = slice(data.aws_availability_zones.available.names, 0,
    min(length(data.aws_availability_zones.available.names),
        length(var.private_subnet_cidrs)))

  public_subnet_count  = length(var.public_subnet_cidrs)
  private_subnet_count = length(var.private_subnet_cidrs)

  # One NAT GW or one per AZ
  nat_gateway_count = var.single_nat_gateway ? 1 : local.public_subnet_count
}

resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-vpc"
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
  })
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-igw"
  })
}

resource "aws_subnet" "public" {
  count = local.public_subnet_count

  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.public_subnet_cidrs[count.index]
  availability_zone       = local.azs[count.index]
  map_public_ip_on_launch = true

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-public-${count.index + 1}"
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
    "kubernetes.io/role/elb"                    = "1"
  })
}

resource "aws_subnet" "private" {
  count = local.private_subnet_count

  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidrs[count.index]
  availability_zone = local.azs[count.index]

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-private-${count.index + 1}"
    "kubernetes.io/cluster/${var.cluster_name}" = "owned"
    "kubernetes.io/role/internal-elb"           = "1"
  })
}

resource "aws_eip" "nat" {
  count  = var.enable_nat_gateway ? local.nat_gateway_count : 0
  domain = "vpc"

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-nat-eip-${count.index + 1}"
  })

  depends_on = [aws_internet_gateway.main]
}

resource "aws_nat_gateway" "main" {
  count = var.enable_nat_gateway ? local.nat_gateway_count : 0

  allocation_id = aws_eip.nat[count.index].id
  subnet_id     = aws_subnet.public[count.index].id

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-nat-${count.index + 1}"
  })

  depends_on = [aws_internet_gateway.main]
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-public-rt"
  })
}

resource "aws_route_table_association" "public" {
  count = local.public_subnet_count

  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table" "private" {
  count  = var.enable_nat_gateway ? local.nat_gateway_count : 1
  vpc_id = aws_vpc.main.id

  dynamic "route" {
    for_each = var.enable_nat_gateway ? [1] : []
    content {
      cidr_block     = "0.0.0.0/0"
      nat_gateway_id = aws_nat_gateway.main[count.index].id
    }
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-private-rt-${count.index + 1}"
  })
}

resource "aws_route_table_association" "private" {
  count = local.private_subnet_count

  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private[
    var.single_nat_gateway ? 0 : count.index
  ].id
}

# VPC Endpoints — save NAT GW costs
resource "aws_vpc_endpoint" "s3" {
  vpc_id            = aws_vpc.main.id
  service_name      = "com.amazonaws.${data.aws_region.current.name}.s3"
  vpc_endpoint_type = "Gateway"
  route_table_ids   = aws_route_table.private[*].id

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-s3-endpoint"
  })
}

data "aws_region" "current" {}

# modules/vpc/outputs.tf
output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "vpc_cidr" {
  value = aws_vpc.main.cidr_block
}

output "public_subnet_ids" {
  description = "IDs of public subnets"
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "IDs of private subnets"
  value       = aws_subnet.private[*].id
}

output "private_route_table_ids" {
  value = aws_route_table.private[*].id
}

output "nat_gateway_ids" {
  value = aws_nat_gateway.main[*].id
}
Module 2: IAM (EKS roles)
# modules/iam/variables.tf
variable "cluster_name" { type = string }
variable "account_id"   { type = string }
variable "oidc_provider_url" {
  description = "EKS OIDC provider URL (without https://)"
  type        = string
  default     = ""
}
variable "tags" { type = map(string); default = {} }

# modules/iam/main.tf

# ── EKS CLUSTER ROLE ──
data "aws_iam_policy_document" "eks_cluster_assume" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["eks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "eks_cluster" {
  name               = "${var.cluster_name}-cluster-role"
  assume_role_policy = data.aws_iam_policy_document.eks_cluster_assume.json
  tags               = var.tags
}

resource "aws_iam_role_policy_attachment" "eks_cluster_policy" {
  role       = aws_iam_role.eks_cluster.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}

# ── EKS NODE ROLE ──
data "aws_iam_policy_document" "eks_node_assume" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "eks_node" {
  name               = "${var.cluster_name}-node-role"
  assume_role_policy = data.aws_iam_policy_document.eks_node_assume.json
  tags               = var.tags
}

locals {
  node_policies = [
    "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
    "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
    "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
    "arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy",
  ]
}

resource "aws_iam_role_policy_attachment" "eks_node" {
  for_each   = toset(local.node_policies)
  role       = aws_iam_role.eks_node.name
  policy_arn = each.value
}

# ── IRSA: ALB CONTROLLER ROLE ──
data "aws_iam_policy_document" "alb_controller_assume" {
  count = var.oidc_provider_url != "" ? 1 : 0

  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = ["arn:aws:iam::${var.account_id}:oidc-provider/${var.oidc_provider_url}"]
    }
    condition {
      test     = "StringEquals"
      variable = "${var.oidc_provider_url}:aud"
      values   = ["sts.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "${var.oidc_provider_url}:sub"
      values   = ["system:serviceaccount:kube-system:aws-load-balancer-controller"]
    }
  }
}

resource "aws_iam_role" "alb_controller" {
  count              = var.oidc_provider_url != "" ? 1 : 0
  name               = "${var.cluster_name}-alb-controller-role"
  assume_role_policy = data.aws_iam_policy_document.alb_controller_assume[0].json
  tags               = var.tags
}

resource "aws_iam_role_policy_attachment" "alb_controller" {
  count      = var.oidc_provider_url != "" ? 1 : 0
  role       = aws_iam_role.alb_controller[0].name
  policy_arn = aws_iam_policy.alb_controller[0].arn
}

resource "aws_iam_policy" "alb_controller" {
  count  = var.oidc_provider_url != "" ? 1 : 0
  name   = "${var.cluster_name}-alb-controller-policy"
  policy = file("${path.module}/policies/alb-controller-policy.json")
  tags   = var.tags
}

# ── IRSA: CLUSTER AUTOSCALER ROLE ──
data "aws_iam_policy_document" "cluster_autoscaler_assume" {
  count = var.oidc_provider_url != "" ? 1 : 0

  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = ["arn:aws:iam::${var.account_id}:oidc-provider/${var.oidc_provider_url}"]
    }
    condition {
      test     = "StringEquals"
      variable = "${var.oidc_provider_url}:sub"
      values   = ["system:serviceaccount:kube-system:cluster-autoscaler"]
    }
  }
}

resource "aws_iam_role" "cluster_autoscaler" {
  count              = var.oidc_provider_url != "" ? 1 : 0
  name               = "${var.cluster_name}-cluster-autoscaler-role"
  assume_role_policy = data.aws_iam_policy_document.cluster_autoscaler_assume[0].json
  tags               = var.tags
}

data "aws_iam_policy_document" "cluster_autoscaler" {
  statement {
    effect = "Allow"
    actions = [
      "autoscaling:DescribeAutoScalingGroups",
      "autoscaling:DescribeAutoScalingInstances",
      "autoscaling:DescribeLaunchConfigurations",
      "autoscaling:DescribeScalingActivities",
      "autoscaling:DescribeTags",
      "autoscaling:SetDesiredCapacity",
      "autoscaling:TerminateInstanceInAutoScalingGroup",
      "ec2:DescribeLaunchTemplateVersions",
      "ec2:DescribeInstanceTypes",
      "eks:DescribeNodegroup",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "cluster_autoscaler" {
  count  = var.oidc_provider_url != "" ? 1 : 0
  name   = "cluster-autoscaler"
  role   = aws_iam_role.cluster_autoscaler[0].name
  policy = data.aws_iam_policy_document.cluster_autoscaler.json
}

# modules/iam/outputs.tf
output "cluster_role_arn" {
  value = aws_iam_role.eks_cluster.arn
}

output "node_role_arn" {
  value = aws_iam_role.eks_node.arn
}

output "alb_controller_role_arn" {
  value = try(aws_iam_role.alb_controller[0].arn, "")
}

output "cluster_autoscaler_role_arn" {
  value = try(aws_iam_role.cluster_autoscaler[0].arn, "")
}

Module 3: EKS
# modules/eks/variables.tf
variable "cluster_name"       { type = string }
variable "cluster_version"    { type = string; default = "1.29" }
variable "cluster_role_arn"   { type = string }
variable "node_role_arn"      { type = string }
variable "subnet_ids"         { type = list(string) }
variable "vpc_id"             { type = string }
variable "private_api_access" { type = bool; default = true }
variable "public_api_access"  { type = bool; default = false }
variable "node_groups" {
  type = map(object({
    instance_types = list(string)
    capacity_type  = string
    min_size       = number
    max_size       = number
    desired_size   = number
    labels         = map(string)
    taints         = list(object({
      key    = string
      value  = string
      effect = string
    }))
  }))
}
variable "tags" { type = map(string); default = {} }

# modules/eks/main.tf
resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  version  = var.cluster_version
  role_arn = var.cluster_role_arn

  vpc_config {
    subnet_ids              = var.subnet_ids
    endpoint_private_access = var.private_api_access
    endpoint_public_access  = var.public_api_access
    security_group_ids      = [aws_security_group.cluster.id]
  }

  enabled_cluster_log_types = [
    "api", "audit", "authenticator",
    "controllerManager", "scheduler"
  ]

  encryption_config {
    provider {
      key_arn = aws_kms_key.eks.arn
    }
    resources = ["secrets"]
  }

  tags = var.tags

  depends_on = [aws_cloudwatch_log_group.eks]
}

# KMS key for etcd encryption at rest
resource "aws_kms_key" "eks" {
  description             = "EKS cluster encryption key for ${var.cluster_name}"
  deletion_window_in_days = 7
  enable_key_rotation     = true
  tags                    = var.tags
}

resource "aws_kms_alias" "eks" {
  name          = "alias/${var.cluster_name}-eks"
  target_key_id = aws_kms_key.eks.key_id
}

resource "aws_cloudwatch_log_group" "eks" {
  name              = "/aws/eks/${var.cluster_name}/cluster"
  retention_in_days = 30
  tags              = var.tags
}

# OIDC Provider — required for IRSA
data "tls_certificate" "eks" {
  url = aws_eks_cluster.main.identity[0].oidc[0].issuer
}

resource "aws_iam_openid_connect_provider" "eks" {
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.eks.certificates[0].sha1_fingerprint]
  url             = aws_eks_cluster.main.identity[0].oidc[0].issuer
  tags            = var.tags
}

# Security group for cluster
resource "aws_security_group" "cluster" {
  name        = "${var.cluster_name}-cluster-sg"
  description = "EKS cluster security group"
  vpc_id      = var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-cluster-sg"
  })
}

# Managed node groups
resource "aws_eks_node_group" "this" {
  for_each = var.node_groups

  cluster_name    = aws_eks_cluster.main.name
  node_group_name = each.key
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.subnet_ids
  instance_types  = each.value.instance_types
  capacity_type   = each.value.capacity_type

  scaling_config {
    min_size     = each.value.min_size
    max_size     = each.value.max_size
    desired_size = each.value.desired_size
  }

  update_config {
    max_unavailable = 1
  }

  labels = each.value.labels

  dynamic "taint" {
    for_each = each.value.taints
    content {
      key    = taint.value.key
      value  = taint.value.value
      effect = taint.value.effect
    }
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-${each.key}"
    "k8s.io/cluster-autoscaler/${var.cluster_name}" = "owned"
    "k8s.io/cluster-autoscaler/enabled"             = "true"
  })

  lifecycle {
    ignore_changes = [scaling_config[0].desired_size]
    # Ignore desired_size because Cluster Autoscaler manages it
    # Without this: Terraform would constantly fight with CA
  }
}

# EKS Add-ons
locals {
  addons = {
    vpc-cni    = {}
    coredns    = {}
    kube-proxy = {}
    aws-ebs-csi-driver = {}
  }
}

resource "aws_eks_addon" "this" {
  for_each = local.addons

  cluster_name                = aws_eks_cluster.main.name
  addon_name                  = each.key
  resolve_conflicts_on_update = "OVERWRITE"

  tags = var.tags

  depends_on = [aws_eks_node_group.this]
}

# modules/eks/outputs.tf
output "cluster_name" {
  value = aws_eks_cluster.main.name
}

output "cluster_endpoint" {
  value = aws_eks_cluster.main.endpoint
}

output "cluster_certificate_authority_data" {
  value     = aws_eks_cluster.main.certificate_authority[0].data
  sensitive = true
}

output "cluster_version" {
  value = aws_eks_cluster.main.version
}

output "oidc_provider_arn" {
  value = aws_iam_openid_connect_provider.eks.arn
}

output "oidc_provider_url" {
  value = trimprefix(
    aws_eks_cluster.main.identity[0].oidc[0].issuer,
    "https://"
  )
}

output "node_security_group_id" {
  value = aws_eks_cluster.main.vpc_config[0].cluster_security_group_id
}
Root Module — Wire Everything Together
# environments/production/main.tf
terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws        = { source = "hashicorp/aws", version = "~> 5.0" }
    kubernetes = { source = "hashicorp/kubernetes", version = "~> 2.0" }
    helm       = { source = "hashicorp/helm", version = "~> 2.0" }
    tls        = { source = "hashicorp/tls", version = "~> 4.0" }
  }

  backend "s3" {
    bucket         = "mycompany-terraform-state"
    key            = "production/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

provider "aws" {
  region = var.aws_region
  default_tags {
    tags = local.common_tags
  }
}

provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)

  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    args        = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
  }
}

provider "helm" {
  kubernetes {
    host                   = module.eks.cluster_endpoint
    cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
    exec {
      api_version = "client.authentication.k8s.io/v1beta1"
      command     = "aws"
      args        = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
    }
  }
}

data "aws_caller_identity" "current" {}

locals {
  cluster_name = "${var.project_name}-${var.environment}"
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
    Team        = "platform"
  }
}

# ── MODULE 1: VPC ──
module "vpc" {
  source = "../../modules/vpc"

  cluster_name         = local.cluster_name
  vpc_cidr             = var.vpc_cidr
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
  enable_nat_gateway   = true
  single_nat_gateway   = false  # One per AZ for HA
  tags                 = local.common_tags
}

# ── MODULE 2: IAM (before EKS — EKS needs the roles) ──
module "iam" {
  source = "../../modules/iam"

  cluster_name      = local.cluster_name
  account_id        = data.aws_caller_identity.current.account_id
  oidc_provider_url = module.eks.oidc_provider_url
  tags              = local.common_tags

  # EKS depends on IAM, IAM IRSA depends on EKS OIDC
  # Terraform handles this via depends_on in the module
  depends_on = [module.eks]
}

# ── MODULE 3: EKS ──
module "eks" {
  source = "../../modules/eks"

  cluster_name       = local.cluster_name
  cluster_version    = var.eks_version
  cluster_role_arn   = module.iam.cluster_role_arn
  node_role_arn      = module.iam.node_role_arn
  subnet_ids         = module.vpc.private_subnet_ids
  vpc_id             = module.vpc.vpc_id
  private_api_access = true
  public_api_access  = false

  node_groups = {
    system = {
      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"
      min_size       = 2
      max_size       = 4
      desired_size   = 2
      labels         = { "workload-type" = "infrastructure" }
      taints = [{
        key    = "workload-type"
        value  = "infrastructure"
        effect = "NO_SCHEDULE"
      }]
    }
    app = {
      instance_types = ["t3.medium", "t3a.medium", "m5.large"]
      capacity_type  = "SPOT"
      min_size       = 2
      max_size       = 20
      desired_size   = 3
      labels         = { "workload-type" = "application" }
      taints         = []
    }
  }

  tags = local.common_tags
}

# ── HELM: AWS LOAD BALANCER CONTROLLER ──
resource "helm_release" "alb_controller" {
  name       = "aws-load-balancer-controller"
  repository = "https://aws.github.io/eks-charts"
  chart      = "aws-load-balancer-controller"
  namespace  = "kube-system"
  version    = "1.7.1"

  set {
    name  = "clusterName"
    value = module.eks.cluster_name
  }
  set {
    name  = "serviceAccount.create"
    value = "true"
  }
  set {
    name  = "serviceAccount.annotations.eks\\.amazonaws\\.com/role-arn"
    value = module.iam.alb_controller_role_arn
  }
  set {
    name  = "region"
    value = var.aws_region
  }
  set {
    name  = "vpcId"
    value = module.vpc.vpc_id
  }

  depends_on = [module.eks, module.iam]
}

# ── HELM: CLUSTER AUTOSCALER ──
resource "helm_release" "cluster_autoscaler" {
  name       = "cluster-autoscaler"
  repository = "https://kubernetes.github.io/autoscaler"
  chart      = "cluster-autoscaler"
  namespace  = "kube-system"
  version    = "9.35.0"

  set {
    name  = "autoDiscovery.clusterName"
    value = module.eks.cluster_name
  }
  set {
    name  = "awsRegion"
    value = var.aws_region
  }
  set {
    name  = "rbac.serviceAccount.annotations.eks\\.amazonaws\\.com/role-arn"
    value = module.iam.cluster_autoscaler_role_arn
  }

  depends_on = [module.eks, module.iam]
}

# environments/production/variables.tf
variable "aws_region"    { type = string; default = "us-east-1" }
variable "project_name"  { type = string; default = "prodapp" }
variable "environment"   { type = string; default = "production" }
variable "eks_version"   { type = string; default = "1.29" }
variable "vpc_cidr"      { type = string; default = "10.0.0.0/16" }

variable "public_subnet_cidrs" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnet_cidrs" {
  type    = list(string)
  default = ["10.0.3.0/24", "10.0.4.0/24"]
}

# environments/production/outputs.tf
output "cluster_name" {
  value = module.eks.cluster_name
}

output "cluster_endpoint" {
  value = module.eks.cluster_endpoint
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "configure_kubectl" {
  value = "aws eks update-kubeconfig --name ${module.eks.cluster_name} --region ${var.aws_region}"
}
PART 3: STATE MANAGEMENT — The Most Critical Skill
Setting Up Remote State
# ════════════════════════════════════════════════
# CREATE STATE BACKEND — do this BEFORE anything else
# This must exist before terraform init with S3 backend
# ════════════════════════════════════════════════

# State bucket — must be globally unique
STATE_BUCKET="mycompany-terraform-state-$(openssl rand -hex 4)"
STATE_REGION="us-east-1"

# Create S3 bucket
aws s3api create-bucket \
  --bucket $STATE_BUCKET \
  --region $STATE_REGION

# Enable versioning — CRITICAL
# If state gets corrupted: roll back to previous version
aws s3api put-bucket-versioning \
  --bucket $STATE_BUCKET \
  --versioning-configuration Status=Enabled

# Enable encryption
aws s3api put-bucket-encryption \
  --bucket $STATE_BUCKET \
  --server-side-encryption-configuration '{
    "Rules": [{
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "aws:kms"
      }
    }]
  }'

# Block ALL public access
aws s3api put-public-access-block \
  --bucket $STATE_BUCKET \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# Enable MFA delete (extreme protection)
# aws s3api put-bucket-versioning \
#   --bucket $STATE_BUCKET \
#   --versioning-configuration Status=Enabled,MFADelete=Enabled

# DynamoDB table for state locking
# Prevents two people running terraform apply simultaneously
aws dynamodb create-table \
  --table-name terraform-state-lock \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region $STATE_REGION

echo "State backend ready:"
echo "  Bucket: $STATE_BUCKET"
echo "  DynamoDB: terraform-state-lock"

# Update your backend.tf with the bucket name
echo "bucket = \"$STATE_BUCKET\"" > /tmp/backend-config.txt
State Commands — Production Toolkit
# ════════════════════════════════════════════════
# WORKING WITH STATE
# Learn these before you need them in an emergency
# ════════════════════════════════════════════════

# Initialize — downloads providers, connects to backend
terraform init

# List everything in state
terraform state list

# Output:
# module.vpc.aws_vpc.main
# module.vpc.aws_subnet.private[0]
# module.vpc.aws_subnet.private[1]
# module.vpc.aws_subnet.public[0]
# module.vpc.aws_subnet.public[1]
# module.vpc.aws_nat_gateway.main[0]
# module.vpc.aws_nat_gateway.main[1]
# module.eks.aws_eks_cluster.main
# module.eks.aws_eks_node_group.this["system"]
# module.eks.aws_eks_node_group.this["app"]

# Show details of a specific resource
terraform state show module.vpc.aws_vpc.main
# Shows all attributes of that resource in state

# MOVE resource in state (rename without destroying)
# Use when: you rename a resource in code
terraform state mv \
  module.vpc.aws_subnet.private \
  module.vpc.aws_subnet.private_subnet

# REMOVE resource from state (stop managing it)
# Use when: resource was created manually, now Terraform is taking over
# OR: you want Terraform to forget about a resource WITHOUT destroying it
terraform state rm module.vpc.aws_nat_gateway.main[0]
# WARNING: Resource still exists in AWS. Terraform just forgets about it.
# On next plan: Terraform may try to CREATE a new one (conflict!)
# Use with extreme care.

# IMPORT existing resource INTO state
# Use when: resource exists in AWS but not in Terraform state
terraform import module.vpc.aws_vpc.main vpc-abc123def456
# Now Terraform knows about that VPC
# Next plan: should show no changes if code matches reality

# REFRESH state from real AWS (sync state with reality)
# Use when: resources were changed outside Terraform
terraform refresh
# Updates state file to match actual AWS state
# Does NOT change your .tf files

# SHOW what's in state as JSON (for scripting)
terraform show -json | jq '.values.root_module.resources[].address'

# PULL remote state to local (for inspection)
terraform state pull > /tmp/state-backup.json
# Read it: cat /tmp/state-backup.json | jq '.resources[].type'

# PUSH local state to remote (dangerous — use only for recovery)
terraform state push /tmp/state-backup.json
PART 4: BREAK THE STATE AND RECOVER
The Most Important Lab — State Recovery
# ════════════════════════════════════════════════
# SCENARIO 1: State lock is stuck
# Someone's terraform apply crashed mid-run
# State is locked. Nobody can run terraform.
# ════════════════════════════════════════════════

# Check what's locking state
terraform force-unlock <LOCK-ID>

# Find the lock ID:
aws dynamodb scan \
  --table-name terraform-state-lock \
  --query 'Items[].LockID'

# Force unlock (use ONLY when you're sure no apply is running)
LOCK_ID=$(aws dynamodb scan \
  --table-name terraform-state-lock \
  --query 'Items[0].LockID.S' \
  --output text)

terraform force-unlock $LOCK_ID

# ════════════════════════════════════════════════
# SCENARIO 2: Resource deleted in AWS console
# VPC deleted manually. State still says it exists.
# ════════════════════════════════════════════════

# terraform plan will fail with:
# "Error: reading VPC: couldn't find resource"
# Because state says vpc-abc123 exists but AWS says it doesn't

# OPTION A: Let Terraform recreate it
# terraform plan → shows it will CREATE vpc
# terraform apply → creates new VPC

# OPTION B: Remove from state, import existing
# If you created a new VPC manually and want Terraform to manage it:
terraform state rm module.vpc.aws_vpc.main
terraform import module.vpc.aws_vpc.main vpc-NEW123456
terraform plan   # Should show no changes if config matches

# ════════════════════════════════════════════════
# SCENARIO 3: State file corrupted
# The actual state file is broken JSON
# ════════════════════════════════════════════════

# STEP 1: Check S3 versioning to get previous state
aws s3api list-object-versions \
  --bucket $STATE_BUCKET \
  --prefix "production/terraform.tfstate" \
  --query 'Versions[*].{VersionId:VersionId,LastModified:LastModified}' \
  --output table

# STEP 2: Download a previous working version
aws s3api get-object \
  --bucket $STATE_BUCKET \
  --key "production/terraform.tfstate" \
  --version-id "PREVIOUS_VERSION_ID" \
  /tmp/good-state.json

# STEP 3: Inspect it's valid JSON
cat /tmp/good-state.json | jq '.version'
# Should output: 4

# STEP 4: Push the good state back
terraform state push /tmp/good-state.json

# STEP 5: Verify
terraform plan
# Should show minimal or no changes

# ════════════════════════════════════════════════
# SCENARIO 4: State drift — AWS was modified outside Terraform
# Someone changed a security group rule in console
# ════════════════════════════════════════════════

# terraform plan will show the drift:
# ~ aws_security_group_rule.api_http
#     from_port: 80 → 8080    (someone changed this!)

# Option A: Accept the drift, update your code
# Edit your .tf file to say from_port = 8080
# terraform plan → no changes

# Option B: Reject the drift, revert to code
# terraform apply → overwrites the console change with code value
# from_port goes back to 80

# This is why "no console clicks" is the rule.
# Console changes cause drift. Drift causes confusion.
# Code is truth. Always.

# ════════════════════════════════════════════════
# SCENARIO 5: Rename a module — state doesn't know
# You renamed module "old_vpc" to "vpc" in your code
# State still references "module.old_vpc.aws_vpc.main"
# Terraform will DESTROY old and CREATE new (disaster!)
# ════════════════════════════════════════════════

# terraform plan shows:
# - module.old_vpc.aws_vpc.main (destroy)
# + module.vpc.aws_vpc.main (create)
# This would delete your entire VPC and everything in it!

# FIX: Move state entries to new names
terraform state mv \
  module.old_vpc.aws_vpc.main \
  module.vpc.aws_vpc.main

terraform state mv \
  'module.old_vpc.aws_subnet.private[0]' \
  'module.vpc.aws_subnet.private[0]'

terraform state mv \
  'module.old_vpc.aws_subnet.private[1]' \
  'module.vpc.aws_subnet.private[1]'

# ... repeat for all resources in the module

# Now terraform plan shows: No changes.
# State was migrated. Resources untouched.

# ════════════════════════════════════════════════
# SCENARIO 6: Complete state loss
# Worst case. State file deleted from S3. No backup.
# Terraform thinks nothing exists. Would recreate everything.
# ════════════════════════════════════════════════

# This is why you enable S3 versioning.
# This is why you export state periodically.
# This is why you have a recovery plan.

# IF YOU HAVE NO BACKUP — use terraform import for critical resources:

# Step 1: Create empty state
terraform init -reconfigure

# Step 2: Import every resource manually
terraform import module.vpc.aws_vpc.main $(aws ec2 describe-vpcs \
  --filters "Name=tag:Name,Values=${CLUSTER_NAME}-vpc" \
  --query 'Vpcs[0].VpcId' --output text)

terraform import 'module.vpc.aws_subnet.private[0]' $(aws ec2 describe-subnets \
  --filters "Name=tag:Name,Values=${CLUSTER_NAME}-private-1" \
  --query 'Subnets[0].SubnetId' --output text)

# ... this is painful for large infrastructure
# Takes hours. This is why you protect state religiously.

# PROTECTION STRATEGY:
# 1. S3 versioning: enabled ✅
# 2. S3 MFA delete: enabled (optional but strong)
# 3. S3 bucket policy: deny delete from all except specific role
# 4. Daily export: terraform state pull → S3 backup location
# 5. Access: only CI/CD pipeline can write state

# S3 BUCKET POLICY to protect state:
aws s3api put-bucket-policy \
  --bucket $STATE_BUCKET \
  --policy '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Deny",
        "Principal": "*",
        "Action": "s3:DeleteObject",
        "Resource": "arn:aws:s3:::'"$STATE_BUCKET"'/*",
        "Condition": {
          "StringNotLike": {
            "aws:PrincipalArn": "arn:aws:iam::'"$ACCOUNT_ID"':role/terraform-ci-role"
          }
        }
      }
    ]
  }'
PART 5: ARGOCD — GitOps for Kubernetes
Mental Model — The Sync Robot
ArgoCD watches a Git repository.
When Git changes, ArgoCD syncs the cluster to match.
Kubernetes cluster always reflects what's in Git.
Nobody applies YAML directly. Git is the only door.

WITHOUT ARGOCD (imperative):
kubectl apply -f deployment.yaml    ← Who ran this? When? Which version?
helm upgrade myapp ./chart          ← Is cluster matching this chart? Who knows?
kubectl set image deployment/api nginx:1.25  ← Logged nowhere.

WITH ARGOCD (declarative GitOps):
git commit -m "update nginx to 1.25"
git push
ArgoCD detects: Git says nginx:1.25, cluster has nginx:1.24
ArgoCD applies the diff automatically
Audit trail: Git history IS your deployment history

THE THREE ARGOCD CONCEPTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APPLICATION = "Watch this Git repo path, sync to this cluster/namespace"
  - Source: github.com/myorg/myapp, path: k8s/production
  - Destination: cluster=prod-eks, namespace=production
  - Sync policy: automatic or manual

REPOSITORY = Git repo that ArgoCD has access to
  - Your app configs, Helm charts, Kustomize overlays

PROJECT = Groups of applications with access controls
  - Which repos applications can use
  - Which clusters they can deploy to
  - Who has access

SYNC STATUS:
  Synced     = cluster matches Git ✅
  OutOfSync  = cluster differs from Git (needs sync)
  Unknown    = ArgoCD can't connect

HEALTH STATUS:
  Healthy    = all resources passing health checks ✅
  Degraded   = something is unhealthy
  Progressing = rolling update in progress
  Suspended  = HPA/CronJob suspended
Your GitOps Repository Structure
gitops/                          ← separate Git repo from app code
├── apps/                        ← ArgoCD Application definitions
│   ├── root-app.yaml            ← App of Apps pattern (the master)
│   ├── production/
│   │   ├── api-app.yaml
│   │   ├── monitoring-app.yaml
│   │   └── ingress-app.yaml
│   └── staging/
│       ├── api-app.yaml
│       └── ...
│
├── infrastructure/              ← Cluster-level config (managed by ArgoCD)
│   ├── cert-manager/
│   │   ├── namespace.yaml
│   │   └── helmrelease.yaml
│   ├── ingress-nginx/
│   │   └── helmrelease.yaml
│   ├── prometheus-stack/
│   │   └── helmrelease.yaml
│   └── cluster-autoscaler/
│       └── helmrelease.yaml
│
└── applications/               ← Application deployments
    ├── api/
    │   ├── base/               ← Kustomize base
    │   │   ├── deployment.yaml
    │   │   ├── service.yaml
    │   │   ├── hpa.yaml
    │   │   └── kustomization.yaml
    │   └── overlays/
    │       ├── production/     ← Production-specific overrides
    │       │   ├── replicas.yaml
    │       │   ├── resources.yaml
    │       │   └── kustomization.yaml
    │       └── staging/
    │           ├── replicas.yaml
    │           └── kustomization.yaml
    └── frontend/
        └── ...
Install ArgoCD via Terraform
# Add to environments/production/main.tf

# ── ARGOCD NAMESPACE ──
resource "kubernetes_namespace" "argocd" {
  metadata {
    name = "argocd"
    labels = {
      "app.kubernetes.io/managed-by" = "terraform"
    }
  }

  depends_on = [module.eks]
}

# ── ARGOCD HELM RELEASE ──
resource "helm_release" "argocd" {
  name       = "argocd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  namespace  = kubernetes_namespace.argocd.metadata[0].name
  version    = "6.4.0"

  values = [<<-EOF
    global:
      domain: argocd.${var.domain_name}

    server:
      replicas: 2
      resources:
        requests:
          cpu: 100m
          memory: 128Mi
        limits:
          cpu: 500m
          memory: 256Mi
      ingress:
        enabled: true
        ingressClassName: alb
        annotations:
          alb.ingress.kubernetes.io/scheme: internet-facing
          alb.ingress.kubernetes.io/target-type: ip
          alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'
          cert-manager.io/cluster-issuer: letsencrypt-production
        tls: true

    configs:
      params:
        server.insecure: false
        application.namespaces: "production,staging"

      rbac:
        policy.default: role:readonly
        policy.csv: |
          p, role:platform-engineer, applications, *, */*, allow
          p, role:platform-engineer, clusters, get, *, allow
          p, role:developer, applications, get, */*, allow
          p, role:developer, applications, sync, production/*, deny
          g, platform-team, role:platform-engineer
          g, dev-team, role:developer

    repoServer:
      replicas: 2
      resources:
        requests:
          cpu: 200m
          memory: 256Mi
        limits:
          cpu: 1
          memory: 512Mi

    applicationSet:
      replicas: 2

    redis:
      resources:
        requests:
          cpu: 100m
          memory: 64Mi
  EOF
  ]

  depends_on = [
    module.eks,
    helm_release.alb_controller,
    kubernetes_namespace.argocd,
  ]
}

# ── ROOT APP — App of Apps Pattern ──
# This ONE Application tells ArgoCD to watch the apps/ directory
# and create all the other Application objects from there
# Deploy one app → it deploys all other apps
resource "kubernetes_manifest" "root_app" {
  manifest = {
    apiVersion = "argoproj.io/v1alpha1"
    kind       = "Application"
    metadata = {
      name      = "root-app"
      namespace = "argocd"
      finalizers = ["resources-finalizer.argocd.argoproj.io"]
    }
    spec = {
      project = "default"
      source = {
        repoURL        = var.gitops_repo_url
        targetRevision = "main"
        path           = "apps/production"
      }
      destination = {
        server    = "https://kubernetes.default.svc"
        namespace = "argocd"
      }
      syncPolicy = {
        automated = {
          prune    = true   # Delete resources removed from Git
          selfHeal = true   # Auto-fix manual kubectl changes
        }
        syncOptions = [
          "CreateNamespace=true",
          "ServerSideApply=true",
        ]
      }
    }
  }

  depends_on = [helm_release.argocd]
}
ArgoCD Application Definitions
# apps/production/api-app.yaml
# This file lives in Git. ArgoCD reads it and creates the Application.
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: api-production
  namespace: argocd
  finalizers:
  - resources-finalizer.argocd.argoproj.io
  annotations:
    notifications.argoproj.io/subscribe.on-sync-succeeded.slack: production-deploys
    notifications.argoproj.io/subscribe.on-sync-failed.slack: alerts-critical
spec:
  project: production

  source:
    repoURL: https://github.com/myorg/gitops
    targetRevision: main
    path: applications/api/overlays/production

  destination:
    server: https://kubernetes.default.svc
    namespace: production

  syncPolicy:
    automated:
      prune: true       # Remove resources deleted from Git
      selfHeal: true    # Revert manual kubectl changes automatically
    syncOptions:
    - CreateNamespace=true
    - PrunePropagationPolicy=foreground
    - ApplyOutOfSyncOnly=true   # Only apply resources that differ
    retry:
      limit: 3
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m

  revisionHistoryLimit: 10

  ignoreDifferences:
  # HPA manages replicas — don't conflict with ArgoCD
  - group: apps
    kind: Deployment
    jsonPointers:
    - /spec/replicas
  # Cert-manager injects data — ignore it
  - group: ""
    kind: Secret
    jsonPointers:
    - /data

---
# apps/production/monitoring-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: monitoring-production
  namespace: argocd
spec:
  project: production
  source:
    repoURL: https://github.com/myorg/gitops
    targetRevision: main
    path: infrastructure/prometheus-stack
  destination:
    server: https://kubernetes.default.svc
    namespace: monitoring
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true
    - ServerSideApply=true
Kustomize Overlays — Environment-Specific Config
# applications/api/base/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 2   # Base default — overlays override this
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
      - name: api
        image: ghcr.io/myorg/api:latest  # Image tag managed by CI/CD
        ports:
        - containerPort: 8080
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"

---
# applications/api/base/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
- deployment.yaml
- service.yaml
- hpa.yaml

---
# applications/api/overlays/production/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

bases:
- ../../base

# Production-specific image tag (updated by CI/CD pipeline)
images:
- name: ghcr.io/myorg/api
  newTag: "v1.24.5"   # CI updates this line on every deploy

# Production-specific patches
patches:
- patch: |-
    - op: replace
      path: /spec/replicas
      value: 3    # Production wants 3 replicas minimum
  target:
    kind: Deployment
    name: api

# Production resource limits
- patch: |-
    - op: replace
      path: /spec/template/spec/containers/0/resources
      value:
        requests:
          cpu: "200m"
          memory: "256Mi"
        limits:
          cpu: "1"
          memory: "512Mi"
  target:
    kind: Deployment
    name: api

namePrefix: ""
namespace: production

commonLabels:
  environment: production

---
# applications/api/overlays/staging/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

bases:
- ../../base

images:
- name: ghcr.io/myorg/api
  newTag: "v1.25.0-rc1"   # Staging can test release candidates

patches:
- patch: |-
    - op: replace
      path: /spec/replicas
      value: 1    # Staging only needs 1 replica (save money)
  target:
    kind: Deployment
    name: api

namespace: staging

CI/CD Pipeline — Git Push → Auto Deploy
# .github/workflows/deploy.yaml
# This runs when you push to main branch
# Updates the image tag in gitops repo → ArgoCD picks it up

name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}/api

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
      id-token: write   # Required for OIDC

    outputs:
      image-tag: ${{ steps.meta.outputs.version }}

    steps:
    - uses: actions/checkout@v4

    - name: Login to GitHub Container Registry
      uses: docker/login-action@v3
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=sha,prefix=v,format=short

    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: ${{ github.event_name != 'pull_request' }}
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}

  update-gitops:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.event_name != 'pull_request'

    steps:
    - name: Checkout gitops repo
      uses: actions/checkout@v4
      with:
        repository: myorg/gitops
        token: ${{ secrets.GITOPS_PAT }}

    - name: Update image tag
      run: |
        IMAGE_TAG="${{ needs.build-and-push.outputs.image-tag }}"
        sed -i "s|newTag:.*|newTag: \"${IMAGE_TAG}\"|" \
          applications/api/overlays/production/kustomization.yaml

    - name: Commit and push
      run: |
        git config user.email "ci@mycompany.com"
        git config user.name "CI Pipeline"
        git add applications/api/overlays/production/kustomization.yaml
        git commit -m "deploy: api ${IMAGE_TAG} to production"
        git push

    # ArgoCD detects the Git change and syncs automatically
    # No kubectl commands needed in CI/CD

  notify:
    needs: [build-and-push, update-gitops]
    runs-on: ubuntu-latest
    if: always()
    steps:
    - name: Notify Slack
      uses: slackapi/slack-github-action@v1.25.0
      with:
        payload: |
          {
            "text": "Deployment ${{ job.status }}: api ${{ needs.build-and-push.outputs.image-tag }} to production"
          }
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
PART 6: RUNNING TERRAFORM — The Full Workflow
# ════════════════════════════════════════════════
# THE COMPLETE TERRAFORM WORKFLOW
# Follow this every single time. No shortcuts.
# ════════════════════════════════════════════════

cd environments/production

# STEP 1: Initialize
# Downloads providers, connects to S3 backend
terraform init

# STEP 2: Format your code (always)
terraform fmt -recursive ../..

# STEP 3: Validate syntax
terraform validate
# Fix any errors before planning

# STEP 4: PLAN — READ EVERY LINE OF THIS
terraform plan -out=tfplan

# What to look for in plan output:
# + resource being CREATED (green) — expected for new infra
# ~ resource being UPDATED (yellow) — verify this is intentional
# - resource being DESTROYED (red) — STOP. Is this intentional?

# NEVER apply if you see unexpected destroys.
# destroy of aws_vpc = wipes your entire cluster.
# Stop. Read. Understand. Then decide.

# STEP 5: Review the plan file (human readable)
terraform show tfplan

# STEP 6: APPLY
terraform apply tfplan
# Using the saved plan ensures you apply EXACTLY what you reviewed.

# STEP 7: Verify outputs
terraform output

# STEP 8: Update kubeconfig
eval $(terraform output -raw configure_kubectl)
kubectl get nodes

# ════════════════════════════════════════════════
# MAKING CHANGES — the day-to-day workflow
# ════════════════════════════════════════════════

# Example: Add a new node group
# 1. Edit modules/eks/variables.tf or environments/production/main.tf
# 2. Add the new node group to var.node_groups
# 3. Plan:
terraform plan -out=tfplan

# Plan shows:
# + aws_eks_node_group.this["spot-large"] will be created
# No destroys. Safe to apply.

# 4. Apply:
terraform apply tfplan

# 5. Verify:
kubectl get nodes -L node-role

# ════════════════════════════════════════════════
# WORKING IN TEAMS — PR workflow
# ════════════════════════════════════════════════

# GitHub Actions workflow for Terraform:
# On PR:
#   terraform fmt --check     → fail if code is unformatted
#   terraform validate         → fail if syntax error
#   terraform plan             → post plan output as PR comment
#
# On merge to main:
#   terraform apply            → apply automatically
#   post result to Slack

# This means:
# → Every infra change is reviewed as code
# → Plan is visible before apply
# → Apply only happens after approval
# → Full audit trail in Git

# ════════════════════════════════════════════════
# TARGETED APPLIES — surgical changes
# ════════════════════════════════════════════════

# Apply ONLY a specific resource (useful for debugging)
terraform apply -target=module.vpc.aws_vpc.main

# Apply ONLY a specific module
terraform apply -target=module.eks

# Plan without refreshing state (faster, use carefully)
terraform plan -refresh=false

# ════════════════════════════════════════════════
# DESTROY — the nuclear option
# ════════════════════════════════════════════════

# NEVER run terraform destroy on production without:
# 1. Explicit business approval
# 2. Understanding exactly what will be deleted
# 3. Backup of stateful data (RDS snapshots, etc.)

# See what would be destroyed:
terraform plan -destroy

# Destroy specific resource only:
terraform destroy -target=module.eks.aws_eks_node_group.this["app"]

# Destroy everything (should basically never happen in production):
# terraform destroy

PART 7: THE DELIVERABLE — Infrastructure Recovery Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFRASTRUCTURE AS CODE — STATE RECOVERY REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: ARCHITECTURE OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Terraform Modules:
  vpc/    → VPC, subnets, NAT gateways, route tables, VPC endpoints
  iam/    → Cluster role, node role, IRSA roles for controllers
  eks/    → EKS cluster, node groups, addons, OIDC provider
  rds/    → RDS instance, subnet group, parameter group (optional)

Environments:
  production/  → calls modules with production values
  staging/     → calls same modules with staging values
  dev/         → smaller instances, single NAT GW (cost saving)

Remote State:
  Backend: S3 (versioning enabled, KMS encrypted)
  Lock: DynamoDB (prevents concurrent applies)
  Access: Only terraform-ci-role can write state

ArgoCD GitOps:
  Installed via Terraform helm_release
  Watches: github.com/myorg/gitops
  Root App: deploys all Application objects from apps/ directory
  Auto-sync: enabled with selfHeal and prune

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: STATE BREAK SCENARIOS AND RECOVERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENARIO: State Lock Stuck
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cause:   Apply process crashed mid-execution
Symptom: Error acquiring state lock
         Lock ID: abc-123
Detect:  aws dynamodb scan --table terraform-state-lock
Fix:     terraform force-unlock <LOCK-ID>
Time:    2 minutes
Risk:    Low (if you confirm no apply is actually running)

SCENARIO: Drift — Console Change
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cause:   Someone modified security group in AWS console
Symptom: terraform plan shows unexpected change
         ~ aws_security_group_rule.api_http (port 80 → 8080)
Fix:     terraform apply → reverts console change to code value
Time:    5 minutes
Lesson:  No console clicks. Ever.

SCENARIO: Module Rename
━━━━━━━━━━━━━━━━━━━━━━━
Cause:   Renamed module.old_vpc to module.vpc in code
Symptom: Plan shows DESTROY old resources, CREATE new ones
Risk:    Catastrophic — would delete entire VPC
Fix:
  terraform state mv module.old_vpc.aws_vpc.main module.vpc.aws_vpc.main
  (repeat for every resource in module)
Time:    15-30 minutes for large modules
Lesson:  Use terraform state mv BEFORE changing module names in code

SCENARIO: Resource Deleted in Console
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cause:   NAT Gateway deleted from console (state thinks it exists)
Symptom: Plan fails with "resource not found" error
Fix A:   terraform apply → recreates the resource
Fix B:   terraform state rm + terraform import (if created manually)
Time:    10 minutes for recreation, 5 minutes for import
Lesson:  No console clicks. Ever.

SCENARIO: State File Corrupted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cause:   Partial write during failed apply corrupted state JSON
Symptom: terraform plan fails with JSON parse error
Fix:
  1. List S3 versions:
     aws s3api list-object-versions --bucket STATE_BUCKET --prefix KEY
  2. Get last good version:
     aws s3api get-object --version-id PREV_VERSION /tmp/good.json
  3. Validate JSON: cat /tmp/good.json | jq '.version'
  4. Push back: terraform state push /tmp/good.json
  5. Verify: terraform plan (should show no unexpected changes)
Time:    20 minutes
Risk:    Medium (any changes between corruption and backup are lost)

SCENARIO: Total State Loss
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cause:   State bucket deleted, no backup
Symptom: terraform plan wants to CREATE everything
Risk:    Would create duplicate resources (conflicts!)
Fix:
  terraform import for every resource manually
  Takes hours for large infrastructure
Prevention:
  S3 versioning: ON ✅
  S3 bucket policy: deny delete ✅
  DynamoDB table: PITR enabled ✅
  Weekly state pull to backup location ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: GITOPS DEPLOYMENT AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every deployment is traceable:

Git commit SHA → ArgoCD sync ID → Kubernetes resource version

To answer "what changed at 3pm Tuesday?":
  git log --since="2024-01-02 15:00" --until="2024-01-02 16:00"
  argocd app history api-production

To rollback any deployment:
  git revert <commit-sha>
  git push
  ArgoCD auto-syncs back to previous state in 30 seconds

Mean time to rollback: < 2 minutes
Manual kubectl commands blocked by: ArgoCD selfHeal + RBAC
Console changes blocked by: SCP + IAM policies + no-console-clicks rule

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: IaC MATURITY CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TERRAFORM:
✅ Remote state in S3 with encryption and versioning
✅ DynamoDB locking prevents concurrent applies
✅ Modules for VPC, IAM, EKS — no copy-paste infrastructure
✅ Variables for environment differences — no hardcoded values
✅ prevent_destroy on critical resources (RDS, EKS cluster)
✅ ignore_changes for CA-managed replica counts
✅ All resources tagged: ManagedBy=terraform, Environment=production
✅ CI/CD: plan on PR, apply on merge to main
✅ No console clicks in production (enforced by team agreement + SCP)

ARGOCD:
✅ Installed via Terraform (not manually)
✅ App of Apps pattern: one root app manages all others
✅ Auto-sync with selfHeal and prune enabled
✅ ignoreDifferences for HPA-managed replicas
✅ RBAC: developers read-only, platform engineers can sync
✅ Notifications: deploy success/failure to Slack
✅ Kustomize overlays: production vs staging differences in code
✅ CI/CD: image tag update in gitops repo triggers auto-deploy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR COMPLETE CHECKLIST
CONCEPTS — explain without notes:
□ Explain what the state file is and why it's sacred
□ Explain what happens if two people run terraform apply at once
□ Explain the difference between terraform plan and apply
□ Explain why terraform destroy on production is dangerous
□ Explain the module pattern and why it prevents duplication
□ Explain the count vs for_each difference and when to use each
□ Explain terraform state mv and when you need it
□ Explain what GitOps means and why Git is the only door
□ Explain ArgoCD self-heal and why it matters
□ Explain the App of Apps pattern

LABS — done with your own hands:
□ S3 state bucket created with versioning and encryption
□ DynamoDB lock table created
□ All three modules written: vpc, iam, eks
□ environments/production/main.tf wires modules together
□ terraform init → plan → apply ran successfully
□ EKS cluster running with nodes visible: kubectl get nodes
□ ArgoCD installed via Terraform helm_release
□ Root app deployed → all child apps synced
□ Kustomize overlay: staging uses different replica count
□ State lock stuck → force-unlock ran successfully
□ Module renamed → state mv ran without destroying resources
□ Console change made → drift detected → terraform apply reverted it
□ State backed up to S3 version → restored from previous version
□ Image tag update in gitops repo → ArgoCD auto-synced → new pod running

PRODUCTION HABITS:
□ NEVER apply without reviewing the plan output first
□ NEVER click in the AWS console for managed resources
□ ALWAYS use remote state — never local terraform.tfstate
□ ALWAYS pin provider versions (~> 5.0 not = 5.0 or latest)
□ ALWAYS use ignore_changes for externally-managed fields
□ ALWAYS protect state: versioning, encryption, delete protection
□ ALWAYS tag every resource: who made it, what project, what env
□ ALWAYS open a PR for infrastructure changes — peer review
□ NEVER store secrets in terraform.tfvars or .tf files
□ NEVER commit terraform.tfstate to Git — it has secrets
Nine modules deep. You have now built every layer of a production platform with code. The infrastructure lives in Git. Git is the source of truth. Nobody clicks the console. Every change is reviewed. Every deployment is auditable. Every disaster is recoverable.
The Linux cgroups from Module 1 are enforced by the EKS node groups Terraform creates. The VPC from Module 2 is built by the VPC module. The IAM roles from Module 3 are created by the IAM module with IRSA. The EKS cluster from Module 8 is now provisioned by code not clicking. The autoscaling from Module 9 runs on the spot nodes Terraform provisions.
Every module connects. Everything is code. Nothing is a mystery.
This is how world-class engineering teams operate.
Go write every module. Break the state. Recover it. Come back when the entire platform deploys from a single terraform apply.









CI/CD + GitOps — Full Automated Platform 🔄
Your Senior DevSecOps Mentor Speaking
You've built the infrastructure. You've written the code. You understand every layer from kernel to cluster.
Now we make it self-operating.
Right now your platform requires a human to type commands. A human to review security. A human to apply changes. A human to catch drift. Humans make mistakes. Humans get tired. Humans go on vacation.
A properly built CI/CD + GitOps system removes the human from the critical path. You push code to Git. The pipeline takes over. It lints. It scans for vulnerabilities. It enforces policies. It plans infrastructure changes. It deploys applications. It detects when reality drifts from what Git says and fixes it automatically.
You become the engineer who built the system that runs itself. That is the highest level of platform engineering.
Let's build it completely.
THE MASTER MENTAL MODEL FIRST
THE AUTOMATED PLATFORM PIPELINE — End to End

Developer pushes code
         │
         ▼
    ┌─────────────────────────────────────────┐
    │         CI PIPELINE (GitHub Actions)    │
    │                                         │
    │  STAGE 1: CODE QUALITY                  │
    │  → Lint (catch style/syntax errors)     │
    │  → Format check (consistent code)       │
    │  → Unit tests (does logic work?)        │
    │                                         │
    │  STAGE 2: SECURITY SCANNING             │
    │  → Trivy (container vulnerabilities)    │
    │  → tfsec (Terraform misconfigurations)  │
    │  → Checkov (IaC policy violations)      │
    │  → Semgrep (code security patterns)     │
    │  → Secret scanning (no leaked creds)    │
    │                                         │
    │  STAGE 3: POLICY ENFORCEMENT            │
    │  → OPA/Conftest (custom policies)       │
    │  → Kyverno CLI (k8s manifest policies)  │
    │  → Cost estimation (Infracost)          │
    │                                         │
    │  STAGE 4: BUILD                         │
    │  → Build Docker image                   │
    │  → Sign image (cosign)                  │
    │  → Push to registry                     │
    │                                         │
    │  STAGE 5: TERRAFORM                     │
    │  → terraform fmt, validate              │
    │  → terraform plan (post as PR comment)  │
    │  → On merge: terraform apply            │
    └─────────────────────────────────────────┘
         │
         ▼
    ┌─────────────────────────────────────────┐
    │         GITOPS (ArgoCD)                 │
    │                                         │
    │  Pipeline updates image tag in Git      │
    │  ArgoCD detects Git changed             │
    │  ArgoCD compares Git vs cluster         │
    │  ArgoCD applies the difference          │
    │  ArgoCD reports sync status             │
    └─────────────────────────────────────────┘
         │
         ▼
    PRODUCTION CLUSTER UPDATED
    Zero human intervention after git push.


THE MENTAL MODEL FOR EACH STAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LINT     = Spell checker for code
           Catches obvious mistakes before they reach production

SECURITY = Airport security scanner
           Everything must pass before boarding the plane (cluster)

POLICY   = The legal department
           Even if code works, does it follow company rules?

PLAN     = Showing your homework before submitting
           PR reviewers see EXACTLY what will change in AWS

GITOPS   = The robot operations team
           Never sleeps, never forgets, always syncs to what Git says
PART 1: UNDERSTANDING THE TOOLS
The Full Toolchain — What Each Tool Does
LINTING TOOLS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

hadolint      → Lint Dockerfiles
               "FROM ubuntu:latest" → ERROR: pin to specific tag
               "RUN apt-get update && apt-get install" → WARN: use --no-install-recommends

tflint        → Lint Terraform
               Catches: missing required provider configs,
               deprecated resource types, invalid instance types

yamllint      → Lint YAML files
               Catches: wrong indentation, duplicate keys,
               tabs instead of spaces

shellcheck    → Lint shell scripts
               "if [ $VAR == "" ]" → ERROR: use [[ ]] or quote variables

markdownlint  → Lint documentation
               Consistent docs = professional platform

SECURITY SCANNING TOOLS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

trivy         → THE scanner. Does everything.
               Scans: container images, filesystems, git repos
               Finds: CVEs in OS packages, language dependencies,
                      Terraform misconfigs, k8s misconfigs, secrets
               Output: table, JSON, SARIF (GitHub Security tab)

tfsec         → Terraform-specific security scanner
               Finds: S3 buckets without encryption,
                      security groups allowing 0.0.0.0/0 on SSH,
                      IAM policies with wildcard permissions,
                      RDS without deletion protection

checkov       → Multi-language IaC security scanner
               Supports: Terraform, CloudFormation, Kubernetes YAML,
                         Dockerfile, ARM templates
               Has 1000+ built-in checks
               Can write custom checks in Python

semgrep       → Pattern-based code security scanner
               Finds: SQL injection patterns,
                      hardcoded secrets,
                      insecure crypto usage,
                      OWASP Top 10 patterns

gitleaks      → Secret detection in git history
               Finds: AWS keys, GitHub tokens, passwords
               Scans: every commit in history, not just current files
               CRITICAL: catches "I'll just commit it for now" mistakes

POLICY ENFORCEMENT TOOLS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

conftest      → OPA (Open Policy Agent) for IaC files
               Write policies in Rego language
               "Deny if Terraform creates S3 bucket without encryption"
               "Deny if Kubernetes pod runs as root"
               "Deny if resource has no Name tag"

kyverno CLI   → Test Kyverno policies against manifests offline
               Before applying to cluster: does this YAML pass policies?

infracost     → Cost estimation for Terraform plans
               "This plan would add $47.23/month to your AWS bill"
               Shows cost breakdown per resource
               Set budgets: fail if plan adds > $100/month

GITOPS TOOLS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

argocd        → GitOps operator for Kubernetes
               Watches Git → syncs cluster → fixes drift

argocd-image-updater → Watches container registry for new tags
               Automatically updates image tags in Git
               Alternative to CI updating image tags manually

PART 2: REPOSITORY STRUCTURE — The Foundation
YOUR THREE REPOSITORIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REPO 1: app-repo (your application code)
github.com/myorg/api

api/
├── src/                    ← Application source code
├── tests/                  ← Unit and integration tests
├── Dockerfile
├── .github/
│   └── workflows/
│       ├── ci.yaml         ← Lint, test, scan, build
│       └── pr-checks.yaml  ← PR validation
└── .trivyignore            ← Known acceptable CVEs

REPO 2: infra-repo (Terraform)
github.com/myorg/infrastructure

infrastructure/
├── modules/
│   ├── vpc/
│   ├── eks/
│   └── iam/
├── environments/
│   ├── production/
│   └── staging/
├── .github/
│   └── workflows/
│       ├── terraform-pr.yaml   ← Plan on PR
│       ├── terraform-apply.yaml ← Apply on merge
│       └── security-scan.yaml  ← tfsec, checkov
├── policies/
│   └── terraform/          ← Conftest OPA policies
└── .tflint.hcl

REPO 3: gitops-repo (Kubernetes manifests)
github.com/myorg/gitops

gitops/
├── apps/                   ← ArgoCD Application objects
│   ├── root-app.yaml
│   └── production/
├── infrastructure/         ← Cluster-level tools
│   ├── cert-manager/
│   ├── prometheus-stack/
│   └── argocd/
├── applications/           ← App deployments (Kustomize)
│   ├── api/
│   │   ├── base/
│   │   └── overlays/
│   └── frontend/
├── policies/
│   └── kubernetes/         ← Conftest k8s policies
└── .github/
    └── workflows/
        ├── validate.yaml   ← Lint, policy check manifests
        └── drift-report.yaml ← Detect cluster drift
PART 3: CI PIPELINE — Application Repository
Stage 1: Code Quality + Linting
# .github/workflows/ci.yaml
# This runs on every push and PR

name: CI Pipeline

on:
  push:
    branches: ['**']
  pull_request:
    branches: [main, staging]

# Concurrency: cancel old runs if new commit pushed to same branch
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
  GO_VERSION: "1.21"
  PYTHON_VERSION: "3.11"

jobs:
  # ════════════════════════════════════════════════
  # JOB 1: LINT
  # Catches style and syntax errors before anything else
  # Fastest job — fails fast, saves time
  # ════════════════════════════════════════════════
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    # Lint the Dockerfile
    - name: Lint Dockerfile
      uses: hadolint/hadolint-action@v3.1.0
      with:
        dockerfile: Dockerfile
        failure-threshold: warning
        # DL3008 = pin versions in apt-get
        # DL3018 = pin versions in apk add
        ignore: DL3008,DL3018

    # Lint YAML files
    - name: Lint YAML
      uses: ibiqlik/action-yamllint@v3
      with:
        file_or_dir: .
        config_data: |
          extends: default
          rules:
            line-length:
              max: 120
            truthy:
              allowed-values: ['true', 'false']

    # Lint shell scripts
    - name: Lint shell scripts
      uses: ludeeus/action-shellcheck@2.0.0
      with:
        scandir: './scripts'

    # Lint Python (if applicable)
    - name: Lint Python
      if: hashFiles('**/*.py') != ''
      run: |
        pip install ruff
        ruff check .
        ruff format --check .

    # Lint Go (if applicable)
    - name: Lint Go
      if: hashFiles('**/*.go') != ''
      uses: golangci/golangci-lint-action@v4
      with:
        version: latest

  # ════════════════════════════════════════════════
  # JOB 2: UNIT TESTS
  # ════════════════════════════════════════════════
  test:
    name: Unit Tests
    runs-on: ubuntu-latest
    needs: lint   # Only run if lint passed

    services:
      # Start a postgres container for tests that need a DB
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: testpassword
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: ${{ env.PYTHON_VERSION }}
        cache: pip

    - name: Install dependencies
      run: pip install -r requirements.txt -r requirements-dev.txt

    - name: Run tests with coverage
      run: |
        pytest \
          --cov=src \
          --cov-report=xml \
          --cov-report=term-missing \
          --cov-fail-under=80 \
          -v
      env:
        DATABASE_URL: postgresql://postgres:testpassword@localhost/testdb

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v4
      with:
        file: coverage.xml
        fail_ci_if_error: true

  # ════════════════════════════════════════════════
  # JOB 3: SECRET SCANNING
  # Run this BEFORE security scanning — stop here if secrets found
  # ════════════════════════════════════════════════
  secret-scan:
    name: Secret Detection
    runs-on: ubuntu-latest
    needs: lint

    steps:
    - uses: actions/checkout@v4
      with:
        fetch-depth: 0   # Full history — scan every commit

    # Gitleaks: scans ALL git history for secrets
    - name: Run Gitleaks
      uses: gitleaks/gitleaks-action@v2
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        GITLEAKS_LICENSE: ${{ secrets.GITLEAKS_LICENSE }}

    # TruffleHog: additional secret scanner with different patterns
    - name: Run TruffleHog
      uses: trufflesecurity/trufflehog@main
      with:
        path: ./
        base: ${{ github.event.repository.default_branch }}
        head: HEAD
        extra_args: --debug --only-verified

  # ════════════════════════════════════════════════
  # JOB 4: SECURITY SCANNING
  # ════════════════════════════════════════════════
  security-scan:
    name: Security Scanning
    runs-on: ubuntu-latest
    needs: [lint, secret-scan]
    permissions:
      security-events: write   # Upload to GitHub Security tab
      contents: read

    steps:
    - uses: actions/checkout@v4

    # TRIVY: scan the filesystem (before building image)
    # Catches dependency vulnerabilities in requirements.txt, package.json etc
    - name: Trivy filesystem scan
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: fs
        scan-ref: .
        format: sarif
        output: trivy-fs-results.sarif
        severity: CRITICAL,HIGH
        exit-code: 1      # Fail if CRITICAL or HIGH found
        ignore-unfixed: true  # Don't fail on unpatched CVEs

    - name: Upload Trivy filesystem results to GitHub Security
      uses: github/codeql-action/upload-sarif@v3
      if: always()
      with:
        sarif_file: trivy-fs-results.sarif
        category: trivy-filesystem

    # SEMGREP: code security patterns
    - name: Semgrep scan
      uses: returntocorp/semgrep-action@v1
      with:
        config: >-
          p/python
          p/security-audit
          p/owasp-top-ten
          p/dockerfile
      env:
        SEMGREP_APP_TOKEN: ${{ secrets.SEMGREP_APP_TOKEN }}

    # BANDIT: Python security linter (if Python project)
    - name: Bandit security scan
      if: hashFiles('**/*.py') != ''
      run: |
        pip install bandit[toml]
        bandit -r src/ \
          -f json \
          -o bandit-results.json \
          -ll   # Only high severity
        cat bandit-results.json | python3 -c "
        import json,sys
        data = json.load(sys.stdin)
        issues = [i for i in data['results'] if i['issue_severity'] == 'HIGH']
        if issues:
            print(f'HIGH severity issues found: {len(issues)}')
            for i in issues:
                print(f'  {i[\"filename\"]}:{i[\"line_number\"]} - {i[\"issue_text\"]}')
            sys.exit(1)
        print('No HIGH severity issues found')
        "

  # ════════════════════════════════════════════════
  # JOB 5: BUILD AND SCAN IMAGE
  # ════════════════════════════════════════════════
  build:
    name: Build and Scan Image
    runs-on: ubuntu-latest
    needs: [test, security-scan]
    permissions:
      contents: read
      packages: write
      security-events: write
      id-token: write   # For cosign OIDC signing

    outputs:
      image-digest: ${{ steps.build.outputs.digest }}
      image-tag: ${{ steps.meta.outputs.version }}
      image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}@${{ steps.build.outputs.digest }}

    steps:
    - uses: actions/checkout@v4

    # Setup Docker BuildKit
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    # Login to GitHub Container Registry
    - name: Login to GHCR
      uses: docker/login-action@v3
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    # Generate image tags and labels
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=sha,prefix=sha-,format=short
          type=ref,event=branch
          type=semver,pattern={{version}}
          type=semver,pattern={{major}}.{{minor}}
        labels: |
          org.opencontainers.image.title=API Service
          org.opencontainers.image.vendor=MyCompany

    # Build the image (don't push yet — scan first)
    - name: Build Docker image
      id: build
      uses: docker/build-push-action@v5
      with:
        context: .
        push: false
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
        # Load into local Docker daemon for scanning
        load: true

    # TRIVY: scan the built image
    - name: Trivy image scan
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:sha-${{ github.sha }}
        format: sarif
        output: trivy-image-results.sarif
        severity: CRITICAL,HIGH
        exit-code: 1
        ignore-unfixed: true

    - name: Upload Trivy image results
      uses: github/codeql-action/upload-sarif@v3
      if: always()
      with:
        sarif_file: trivy-image-results.sarif
        category: trivy-image

    # Push ONLY after passing security scan
    - name: Push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: ${{ github.event_name != 'pull_request' }}
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

    # Install cosign for image signing
    - name: Install cosign
      if: github.event_name != 'pull_request'
      uses: sigstore/cosign-installer@v3

    # Sign the image with OIDC (keyless signing via Sigstore)
    - name: Sign container image
      if: github.event_name != 'pull_request'
      run: |
        cosign sign --yes \
          ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}@${{ steps.build.outputs.digest }}
      env:
        COSIGN_EXPERIMENTAL: 1

  # ════════════════════════════════════════════════
  # JOB 6: POLICY ENFORCEMENT
  # Run AFTER build — enforce policies on actual manifests
  # ════════════════════════════════════════════════
  policy-check:
    name: Policy Enforcement
    runs-on: ubuntu-latest
    needs: lint

    steps:
    - uses: actions/checkout@v4

    # Install Conftest (OPA policy runner)
    - name: Install Conftest
      run: |
        VERSION=$(curl -s https://api.github.com/repos/open-policy-agent/conftest/releases/latest \
          | jq -r .tag_name)
        wget "https://github.com/open-policy-agent/conftest/releases/download/${VERSION}/conftest_${VERSION#v}_Linux_x86_64.tar.gz"
        tar xzf conftest_*.tar.gz
        sudo mv conftest /usr/local/bin/

    # Enforce policies on Kubernetes manifests
    - name: Run Conftest on k8s manifests
      run: |
        conftest test k8s/ \
          --policy policies/kubernetes/ \
          --output table \
          --all-namespaces

    # Install Kyverno CLI for offline policy testing
    - name: Install Kyverno CLI
      run: |
        curl -LO https://github.com/kyverno/kyverno/releases/latest/download/kyverno-cli_linux_x86_64.tar.gz
        tar xzf kyverno-cli_*.tar.gz
        sudo mv kyverno /usr/local/bin/

    # Test Kubernetes manifests against Kyverno policies
    - name: Kyverno policy test
      run: |
        kyverno apply policies/kyverno/ \
          --resource k8s/ \
          --detailed-results

  # ════════════════════════════════════════════════
  # JOB 7: UPDATE GITOPS REPO (on main branch only)
  # ════════════════════════════════════════════════
  update-gitops:
    name: Update GitOps Repository
    runs-on: ubuntu-latest
    needs: [build, policy-check]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'

    steps:
    - name: Checkout gitops repository
      uses: actions/checkout@v4
      with:
        repository: myorg/gitops
        token: ${{ secrets.GITOPS_PAT }}
        ref: main

    - name: Update image tag in production overlay
      run: |
        IMAGE_TAG="${{ needs.build.outputs.image-tag }}"
        IMAGE_DIGEST="${{ needs.build.outputs.image-digest }}"

        echo "Updating to tag: $IMAGE_TAG"
        echo "Image digest: $IMAGE_DIGEST"

        # Update kustomization.yaml with new tag
        sed -i "s|newTag:.*|newTag: \"${IMAGE_TAG}\"|g" \
          applications/api/overlays/production/kustomization.yaml

        # Also record the digest for verification
        cat > applications/api/overlays/production/image-metadata.yaml << EOF
        # Auto-generated by CI pipeline
        # Do not edit manually
        imageTag: "${IMAGE_TAG}"
        imageDigest: "${IMAGE_DIGEST}"
        deployedAt: "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
        commitSha: "${{ github.sha }}"
        commitMessage: "${{ github.event.head_commit.message }}"
        EOF

    - name: Create Pull Request (or direct push for automation)
      run: |
        git config user.email "ci-bot@mycompany.com"
        git config user.name "CI Bot"
        git add -A
        git diff --staged --quiet || git commit \
          -m "deploy(api): ${{ needs.build.outputs.image-tag }} to production

          Commit: ${{ github.sha }}
          Author: ${{ github.actor }}
          Message: ${{ github.event.head_commit.message }}"
        git push

    - name: Comment on commit with deployment info
      uses: peter-evans/commit-comment@v3
      with:
        body: |
          🚀 **Deployment Triggered**

          Image: `${{ needs.build.outputs.image-ref }}`
          Tag: `${{ needs.build.outputs.image-tag }}`

          ArgoCD will sync production within 3 minutes.
          Monitor: https://argocd.mycompany.com/applications/api-production

PART 4: TERRAFORM CI PIPELINE
Terraform PR — Plan as PR Comment
# infrastructure/.github/workflows/terraform-pr.yaml
name: Terraform PR

on:
  pull_request:
    paths:
    - 'environments/**'
    - 'modules/**'
    - '.github/workflows/terraform-*.yaml'

permissions:
  contents: read
  pull-requests: write      # Post plan as PR comment
  id-token: write           # AWS OIDC authentication
  security-events: write    # Upload security scan results

jobs:
  # ════════════════════════════════════════════════
  # SECURITY SCAN TERRAFORM CODE
  # Run BEFORE plan — catch misconfigs early
  # ════════════════════════════════════════════════
  terraform-security:
    name: Terraform Security Scan
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    # tfsec: Terraform security scanner
    - name: Run tfsec
      uses: aquasecurity/tfsec-action@v1.0.0
      with:
        working_directory: environments/production
        format: sarif
        soft_fail: false    # Fail on HIGH severity issues
        additional_args: |
          --minimum-severity HIGH
          --exclude-downloaded-modules

    - name: Upload tfsec results
      uses: github/codeql-action/upload-sarif@v3
      if: always()
      with:
        sarif_file: results.sarif
        category: tfsec

    # Checkov: multi-framework IaC scanner
    - name: Run Checkov
      uses: bridgecrewio/checkov-action@v12
      with:
        directory: environments/production
        framework: terraform
        output_format: sarif
        output_file_path: checkov-results.sarif
        soft_fail: false
        skip_check: CKV_AWS_144,CKV_AWS_18   # Known acceptable exceptions
        # CKV_AWS_144: S3 cross-region replication (not needed)
        # CKV_AWS_18:  S3 server access logging (handled separately)

    - name: Upload Checkov results
      uses: github/codeql-action/upload-sarif@v3
      if: always()
      with:
        sarif_file: checkov-results.sarif
        category: checkov

    # Trivy IaC scan: additional coverage
    - name: Trivy IaC scan
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: config
        scan-ref: environments/production
        format: table
        exit-code: 1
        severity: CRITICAL,HIGH

  # ════════════════════════════════════════════════
  # OPA POLICY ENFORCEMENT ON TERRAFORM
  # ════════════════════════════════════════════════
  terraform-policy:
    name: Terraform Policy Check
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Install Conftest
      run: |
        VERSION=$(curl -s https://api.github.com/repos/open-policy-agent/conftest/releases/latest \
          | jq -r .tag_name)
        wget -q "https://github.com/open-policy-agent/conftest/releases/download/${VERSION}/conftest_${VERSION#v}_Linux_x86_64.tar.gz"
        tar xzf conftest_*.tar.gz
        sudo mv conftest /usr/local/bin/

    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v3
      with:
        terraform_version: 1.7.0

    - name: Configure AWS credentials via OIDC
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:role/terraform-ci-role
        aws-region: us-east-1

    - name: Terraform Init
      run: terraform init
      working-directory: environments/production

    # Generate plan in JSON for policy evaluation
    - name: Terraform Plan JSON
      run: |
        terraform plan \
          -var-file=terraform.tfvars \
          -out=tfplan.binary

        terraform show -json tfplan.binary > tfplan.json
      working-directory: environments/production

    # Conftest evaluates the plan against OPA policies
    - name: Conftest policy check on Terraform plan
      run: |
        conftest test environments/production/tfplan.json \
          --policy policies/terraform/ \
          --output table

  # ════════════════════════════════════════════════
  # COST ESTIMATION
  # Show cost impact BEFORE applying
  # ════════════════════════════════════════════════
  cost-estimation:
    name: Cost Estimation
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Setup Infracost
      uses: infracost/actions/setup@v2
      with:
        api-key: ${{ secrets.INFRACOST_API_KEY }}

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:role/terraform-ci-role
        aws-region: us-east-1

    # Generate cost breakdown for this PR
    - name: Generate Infracost breakdown
      run: |
        infracost breakdown \
          --path environments/production \
          --terraform-var-file terraform.tfvars \
          --format json \
          --out-file /tmp/infracost-base.json

    # Generate diff vs main branch
    - name: Generate Infracost diff
      run: |
        infracost diff \
          --path environments/production \
          --terraform-var-file terraform.tfvars \
          --compare-to /tmp/infracost-base.json \
          --format json \
          --out-file /tmp/infracost-diff.json

    # Post cost as PR comment
    - name: Post Infracost comment
      run: |
        infracost comment github \
          --path /tmp/infracost-diff.json \
          --repo ${{ github.repository }} \
          --github-token ${{ github.token }} \
          --pull-request ${{ github.event.pull_request.number }} \
          --behavior update   # Update existing comment if present

    # Fail if cost increase exceeds threshold
    - name: Check cost threshold
      run: |
        MONTHLY_COST=$(cat /tmp/infracost-diff.json | \
          jq -r '.diffTotalMonthlyCost')
        echo "Monthly cost change: $MONTHLY_COST"

        # Fail if adding more than $200/month
        python3 -c "
        import sys
        cost = float('$MONTHLY_COST')
        if cost > 200:
            print(f'ERROR: Plan would add \${cost:.2f}/month, exceeds \$200 threshold')
            sys.exit(1)
        print(f'Cost change \${cost:.2f}/month is within threshold')
        "

  # ════════════════════════════════════════════════
  # TERRAFORM PLAN — the main event
  # Post plan output as PR comment
  # ════════════════════════════════════════════════
  terraform-plan:
    name: Terraform Plan
    runs-on: ubuntu-latest
    needs: [terraform-security, terraform-policy]

    steps:
    - uses: actions/checkout@v4

    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v3
      with:
        terraform_version: 1.7.0
        terraform_wrapper: false   # Disable wrapper to capture output

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:role/terraform-ci-role
        aws-region: us-east-1

    - name: Terraform Format Check
      id: fmt
      run: terraform fmt -check -recursive
      working-directory: .
      continue-on-error: true

    - name: Terraform Init
      id: init
      run: terraform init
      working-directory: environments/production

    - name: Terraform Validate
      id: validate
      run: terraform validate -no-color
      working-directory: environments/production

    - name: Terraform Plan
      id: plan
      run: |
        terraform plan \
          -var-file=terraform.tfvars \
          -no-color \
          -detailed-exitcode \
          -out=tfplan.binary \
          2>&1 | tee /tmp/plan-output.txt

        # Exit codes: 0=no changes, 1=error, 2=changes detected
        echo "exitcode=${PIPESTATUS[0]}" >> $GITHUB_OUTPUT
      working-directory: environments/production
      continue-on-error: true   # Don't fail job — we post results as comment

    # Extract and truncate plan for comment (GitHub has 65535 char limit)
    - name: Process plan output
      id: process-plan
      run: |
        PLAN=$(cat /tmp/plan-output.txt)
        MAX_LENGTH=50000

        if [ ${#PLAN} -gt $MAX_LENGTH ]; then
          PLAN="${PLAN:0:$MAX_LENGTH}

        ... Plan truncated (${#PLAN} chars). View full plan in job logs."
        fi

        # Write to file for next step (avoid shell escaping issues)
        echo "$PLAN" > /tmp/plan-comment.txt

        # Count changes
        ADDS=$(echo "$PLAN" | grep -c "will be created" || true)
        CHANGES=$(echo "$PLAN" | grep -c "will be updated" || true)
        DESTROYS=$(echo "$PLAN" | grep -c "will be destroyed" || true)

        echo "adds=$ADDS" >> $GITHUB_OUTPUT
        echo "changes=$CHANGES" >> $GITHUB_OUTPUT
        echo "destroys=$DESTROYS" >> $GITHUB_OUTPUT

    # Post plan as PR comment
    - name: Post Terraform Plan Comment
      uses: peter-evans/create-or-update-comment@v4
      if: github.event_name == 'pull_request'
      with:
        issue-number: ${{ github.event.pull_request.number }}
        body: |
          ## 🔍 Terraform Plan Results

          | Step | Status |
          |------|--------|
          | Format | ${{ steps.fmt.outcome == 'success' && '✅ Passed' || '❌ Failed' }} |
          | Validate | ${{ steps.validate.outcome == 'success' && '✅ Passed' || '❌ Failed' }} |
          | Plan | ${{ steps.plan.outputs.exitcode == '0' && '✅ No Changes' || steps.plan.outputs.exitcode == '2' && '⚠️ Changes Detected' || '❌ Failed' }} |

          **Changes Summary:**
          - 🟢 Resources to Add: `${{ steps.process-plan.outputs.adds }}`
          - 🟡 Resources to Change: `${{ steps.process-plan.outputs.changes }}`
          - 🔴 Resources to Destroy: `${{ steps.process-plan.outputs.destroys }}`

          <details>
          <summary>📋 Full Plan Output</summary>

          ```hcl
          ${{ steps.plan.outputs.stdout }}
          ```
          </details>

          > ⚠️ **Review carefully before approving.** Destruction of resources may cause downtime.
          > This plan will be applied automatically when this PR is merged to main.

    # Fail the job if plan failed (exitcode 1)
    - name: Check plan exit code
      run: |
        if [ "${{ steps.plan.outputs.exitcode }}" == "1" ]; then
          echo "Terraform plan failed"
          exit 1
        fi
        echo "Plan exit code: ${{ steps.plan.outputs.exitcode }}"
        # 0 = no changes (fine)
        # 2 = changes pending (fine for PR, apply on merge)

# ════════════════════════════════════════════════
# infrastructure/.github/workflows/terraform-apply.yaml
# APPLY on merge to main
# ════════════════════════════════════════════════
name: Terraform Apply

on:
  push:
    branches: [main]
    paths:
    - 'environments/**'
    - 'modules/**'

jobs:
  apply:
    name: Terraform Apply
    runs-on: ubuntu-latest
    environment: production   # GitHub environment with required reviewers

    steps:
    - uses: actions/checkout@v4

    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v3
      with:
        terraform_version: 1.7.0
        terraform_wrapper: false

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:role/terraform-ci-role
        aws-region: us-east-1

    - name: Terraform Init
      run: terraform init
      working-directory: environments/production

    # Plan again on main — someone may have pushed directly
    - name: Terraform Plan
      run: |
        terraform plan \
          -var-file=terraform.tfvars \
          -out=tfplan.binary \
          -no-color
      working-directory: environments/production

    # Apply the plan
    - name: Terraform Apply
      id: apply
      run: |
        terraform apply \
          -auto-approve \
          -no-color \
          tfplan.binary \
          2>&1 | tee /tmp/apply-output.txt

        echo "exit_code=$?" >> $GITHUB_OUTPUT
      working-directory: environments/production

    # Notify on success
    - name: Notify Slack - Success
      if: success()
      uses: slackapi/slack-github-action@v1.25.0
      with:
        payload: |
          {
            "text": "✅ Terraform Apply succeeded on production\nCommit: ${{ github.sha }}\nBy: ${{ github.actor }}"
          }
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}

    # Notify on failure
    - name: Notify Slack - Failure
      if: failure()
      uses: slackapi/slack-github-action@v1.25.0
      with:
        payload: |
          {
            "text": "❌ Terraform Apply FAILED on production\nCommit: ${{ github.sha }}\nBy: ${{ github.actor }}\nCheck: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
          }
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}

PART 5: OPA POLICIES — Write the Rules
Policy as Code — What Can and Cannot Exist
# policies/terraform/main.rego
# OPA policies evaluated against terraform plan JSON

package main

import future.keywords.contains
import future.keywords.if
import future.keywords.in

# ════════════════════════════════════════════════
# HELPER FUNCTIONS
# ════════════════════════════════════════════════

# Get all resources being created or updated
resources_being_created[resource] {
  resource := input.resource_changes[_]
  resource.change.actions[_] == "create"
}

resources_being_updated[resource] {
  resource := input.resource_changes[_]
  resource.change.actions[_] == "update"
}

resources_being_destroyed[resource] {
  resource := input.resource_changes[_]
  resource.change.actions[_] == "delete"
}

# ════════════════════════════════════════════════
# DENY RULES — these BLOCK the plan
# ════════════════════════════════════════════════

# DENY: S3 bucket without encryption
deny contains msg if {
  resource := resources_being_created[_]
  resource.type == "aws_s3_bucket"
  not _has_encryption(resource)
  msg := sprintf("S3 bucket '%v' must have server-side encryption enabled", [resource.name])
}

_has_encryption(resource) if {
  resource.change.after.server_side_encryption_configuration != null
}

# DENY: Security group allowing 0.0.0.0/0 on SSH
deny contains msg if {
  resource := input.resource_changes[_]
  resource.type == "aws_security_group_rule"
  resource.change.after.type == "ingress"
  resource.change.after.from_port <= 22
  resource.change.after.to_port >= 22
  resource.change.after.cidr_blocks[_] == "0.0.0.0/0"
  msg := sprintf("Security group rule '%v' allows SSH from 0.0.0.0/0 - use a specific CIDR", [resource.name])
}

# DENY: RDS without deletion protection (production only)
deny contains msg if {
  resource := resources_being_created[_]
  resource.type == "aws_db_instance"
  resource.change.after.deletion_protection != true
  msg := sprintf("RDS instance '%v' must have deletion_protection = true", [resource.name])
}

# DENY: EKS with public API endpoint
deny contains msg if {
  resource := resources_being_created[_]
  resource.type == "aws_eks_cluster"
  resource.change.after.vpc_config[_].endpoint_public_access == true
  msg := sprintf("EKS cluster '%v' must not have public API endpoint in production", [resource.name])
}

# DENY: IAM policy with wildcard action on all resources
deny contains msg if {
  resource := resources_being_created[_]
  resource.type == "aws_iam_role_policy"
  policy := json.unmarshal(resource.change.after.policy)
  statement := policy.Statement[_]
  statement.Effect == "Allow"
  statement.Action == "*"
  statement.Resource == "*"
  msg := sprintf("IAM policy '%v' has wildcard Action and Resource - use least privilege", [resource.name])
}

# DENY: Missing required tags
required_tags := {"Environment", "ManagedBy", "Project"}

deny contains msg if {
  resource := resources_being_created[_]
  resource.type in {"aws_vpc", "aws_eks_cluster", "aws_db_instance", "aws_s3_bucket"}
  existing_tags := resource.change.after.tags
  missing := required_tags - {k | existing_tags[k]}
  count(missing) > 0
  msg := sprintf("Resource '%v' of type '%v' is missing required tags: %v",
    [resource.name, resource.type, missing])
}

# DENY: Destroy of critical resources without explicit flag
deny contains msg if {
  resource := resources_being_destroyed[_]
  resource.type in {"aws_eks_cluster", "aws_db_instance", "aws_vpc"}
  msg := sprintf("CRITICAL: Plan would DESTROY '%v' of type '%v'. This requires explicit approval.",
    [resource.name, resource.type])
}

# ════════════════════════════════════════════════
# WARN RULES — these alert but don't block
# ════════════════════════════════════════════════

warn contains msg if {
  resource := resources_being_created[_]
  resource.type == "aws_instance"
  resource.change.after.instance_type in {"t2.micro", "t2.small"}
  msg := sprintf("Instance '%v' uses old generation t2 type - consider t3 for better performance/cost", [resource.name])
}

warn contains msg if {
  resource := resources_being_created[_]
  resource.type == "aws_db_instance"
  resource.change.after.backup_retention_period < 7
  msg := sprintf("RDS instance '%v' has backup retention < 7 days - consider increasing for production", [resource.name])
}
# policies/kubernetes/main.rego
# OPA policies for Kubernetes manifests

package main

# DENY: Container running as root
deny[msg] {
  input.kind == "Deployment"
  container := input.spec.template.spec.containers[_]
  not container.securityContext.runAsNonRoot
  msg := sprintf("Container '%v' in Deployment '%v' must set runAsNonRoot: true",
    [container.name, input.metadata.name])
}

# DENY: No resource limits set
deny[msg] {
  input.kind == "Deployment"
  container := input.spec.template.spec.containers[_]
  not container.resources.limits
  msg := sprintf("Container '%v' in Deployment '%v' must set resource limits",
    [container.name, input.metadata.name])
}

# DENY: Missing readiness probe
deny[msg] {
  input.kind == "Deployment"
  container := input.spec.template.spec.containers[_]
  not container.readinessProbe
  msg := sprintf("Container '%v' in Deployment '%v' must have a readinessProbe",
    [container.name, input.metadata.name])
}

# DENY: Latest image tag
deny[msg] {
  input.kind == "Deployment"
  container := input.spec.template.spec.containers[_]
  endswith(container.image, ":latest")
  msg := sprintf("Container '%v' uses ':latest' tag - pin to a specific version",
    [container.name])
}

# DENY: Privileged container
deny[msg] {
  input.kind == "Deployment"
  container := input.spec.template.spec.containers[_]
  container.securityContext.privileged == true
  msg := sprintf("Container '%v' must not run as privileged",
    [container.name])
}

# DENY: No namespace set
deny[msg] {
  input.kind in {"Deployment", "Service", "ConfigMap", "Secret"}
  not input.metadata.namespace
  msg := sprintf("%v '%v' must specify a namespace",
    [input.kind, input.metadata.name])
}

# WARN: No pod anti-affinity
warn[msg] {
  input.kind == "Deployment"
  input.spec.replicas > 1
  not input.spec.template.spec.affinity.podAntiAffinity
  msg := sprintf("Deployment '%v' has %v replicas but no podAntiAffinity - pods may land on same node",
    [input.metadata.name, input.spec.replicas])
}

# WARN: Single replica in production namespace
warn[msg] {
  input.kind == "Deployment"
  input.metadata.namespace == "production"
  input.spec.replicas == 1
  msg := sprintf("Deployment '%v' in production has only 1 replica - consider 3+ for HA",
    [input.metadata.name])
}
PART 6: ARGOCD GITOPS — Full Setup
ArgoCD Notification System
# applications/argocd/notifications-config.yaml
# Configures ArgoCD to send Slack notifications on events

apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-notifications-cm
  namespace: argocd
data:
  # Slack notification templates
  template.app-deployed: |
    slack:
      attachments: |
        [{
          "title": "{{.app.metadata.name}}",
          "title_link": "{{.context.argocdUrl}}/applications/{{.app.metadata.name}}",
          "color": "#18be52",
          "fields": [
            {"title": "Sync Status", "value": "{{.app.status.sync.status}}", "short": true},
            {"title": "Health", "value": "{{.app.status.health.status}}", "short": true},
            {"title": "Revision", "value": "{{.app.status.sync.revision}}", "short": false}
          ]
        }]
      groupingKey: "{{.app.metadata.name}}"
      notifyBroadcast: false

  template.app-sync-failed: |
    slack:
      attachments: |
        [{
          "title": "❌ Sync FAILED: {{.app.metadata.name}}",
          "title_link": "{{.context.argocdUrl}}/applications/{{.app.metadata.name}}",
          "color": "#E96D76",
          "fields": [
            {"title": "Error", "value": "{{.app.status.conditions[0].message}}", "short": false},
            {"title": "Revision", "value": "{{.app.status.sync.revision}}", "short": true}
          ]
        }]

  template.app-health-degraded: |
    slack:
      attachments: |
        [{
          "title": "⚠️ Health DEGRADED: {{.app.metadata.name}}",
          "color": "#f4c030",
          "fields": [
            {"title": "Health Status", "value": "{{.app.status.health.status}}", "short": true}
          ]
        }]

  # Triggers: when to send which template
  trigger.on-deployed: |
    - description: App synced successfully
      send: [app-deployed]
      when: app.status.sync.status == 'Synced' and app.status.health.status == 'Healthy'

  trigger.on-sync-failed: |
    - description: App sync failed
      send: [app-sync-failed]
      when: app.status.conditions.len() > 0 and app.status.conditions[0].type == 'SyncError'

  trigger.on-health-degraded: |
    - description: App health degraded
      send: [app-health-degraded]
      when: app.status.health.status == 'Degraded'

  # Default subscriptions
  defaultTriggers: |
    - on-deployed
    - on-sync-failed
    - on-health-degraded

  service.slack: |
    token: $slack-token
    username: ArgoCD
    icon: https://argo-cd.readthedocs.io/en/stable/assets/logo.png
The App of Apps — Production Architecture
# apps/production/root-app.yaml
# This is the ONLY Application you create manually.
# It creates ALL other Applications automatically.

apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: root-production
  namespace: argocd
  finalizers:
  - resources-finalizer.argocd.argoproj.io
  annotations:
    argocd.argoproj.io/sync-wave: "-1"   # Sync this first
spec:
  project: production

  source:
    repoURL: https://github.com/myorg/gitops
    targetRevision: main
    path: apps/production

  destination:
    server: https://kubernetes.default.svc
    namespace: argocd

  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true

---
# apps/production/cert-manager-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: cert-manager
  namespace: argocd
  annotations:
    argocd.argoproj.io/sync-wave: "1"   # Install early — others depend on it
spec:
  project: production
  source:
    repoURL: https://charts.jetstack.io
    chart: cert-manager
    targetRevision: v1.14.0
    helm:
      values: |
        installCRDs: true
        replicaCount: 2
        resources:
          requests:
            cpu: 50m
            memory: 64Mi
  destination:
    server: https://kubernetes.default.svc
    namespace: cert-manager
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true
    - ServerSideApply=true

---
# apps/production/api-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: api-production
  namespace: argocd
  annotations:
    argocd.argoproj.io/sync-wave: "3"
    notifications.argoproj.io/subscribe.on-deployed.slack: production-deploys
    notifications.argoproj.io/subscribe.on-sync-failed.slack: alerts-critical
    notifications.argoproj.io/subscribe.on-health-degraded.slack: alerts-critical
spec:
  project: production

  source:
    repoURL: https://github.com/myorg/gitops
    targetRevision: main
    path: applications/api/overlays/production

  destination:
    server: https://kubernetes.default.svc
    namespace: production

  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true
    - ApplyOutOfSyncOnly=true

  ignoreDifferences:
  - group: apps
    kind: Deployment
    jsonPointers:
    - /spec/replicas    # HPA manages this
  - group: ""
    kind: Secret
    jsonPointers:
    - /data             # External Secrets manages this

  revisionHistoryLimit: 10
Sync Waves — Order of Operations
SYNC WAVES control the ORDER things deploy.
Lower wave number = deploys FIRST.

Why this matters:
  Wave 1: cert-manager (Prometheus needs CRDs from cert-manager)
  Wave 2: ingress-controller (apps need this to receive traffic)
  Wave 3: prometheus-stack (monitoring everything else)
  Wave 4: applications (everything above must exist first)

Without sync waves:
  App deploys → needs cert-manager CRDs → CRDs don't exist yet → FAILS
  Everything tries to deploy simultaneously → chaos

With sync waves:
  Wave 1 deploys and becomes Healthy
  Wave 2 starts only when Wave 1 is complete
  Wave 3 starts only when Wave 2 is complete
  Perfect, ordered, reliable deployment

ANNOTATION:
argocd.argoproj.io/sync-wave: "3"

RESOURCE HOOKS (run during sync, not just at app level):
argocd.argoproj.io/hook: PreSync  → run before sync
argocd.argoproj.io/hook: Sync     → run during sync
argocd.argoproj.io/hook: PostSync → run after sync succeeds
argocd.argoproj.io/hook: SyncFail → run if sync fails

Example: Run a database migration before deploying new app version
# Hook example: database migration before deployment
apiVersion: batch/v1
kind: Job
metadata:
  name: db-migration
  namespace: production
  annotations:
    argocd.argoproj.io/hook: PreSync
    argocd.argoproj.io/hook-delete-policy: BeforeHookCreation
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
      - name: migrate
        image: ghcr.io/myorg/api:$IMAGE_TAG
        command: ["python", "manage.py", "migrate", "--noinput"]
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url


PART 7: BREAK RECONCILIATION AND FIX DRIFT
Lab 1: Create Drift and Watch ArgoCD Fix It
# ════════════════════════════════════════════════
# SIMULATE DRIFT SCENARIO 1: Manual kubectl change
# Someone bypasses GitOps — makes direct change
# ════════════════════════════════════════════════

# Check current ArgoCD sync status
argocd app get api-production

# CURRENT STATE:
# Sync Status: Synced
# Health Status: Healthy
# All good.

# Now simulate a developer making a manual change
kubectl scale deployment api --replicas=1 -n production

echo "Replicas manually reduced to 1 — drift created"
echo "Watch ArgoCD detect and fix this..."

# Watch ArgoCD status
watch -n5 'argocd app get api-production | grep -E "Sync|Health|Repo"'

# WHAT HAPPENS:
# T+0s:   Manual scale applied
# T+15s:  ArgoCD polls Git (default: 3 min, webhook: immediate)
# T+15s:  ArgoCD compares cluster state vs Git
#          Git says: replicas=3, Cluster has: replicas=1
# T+15s:  ArgoCD marks app: OutOfSync
# T+15s:  selfHeal is enabled → ArgoCD applies Git state
# T+20s:  Deployment scaled back to 3
# T+45s:  Pods running → Health: Healthy, Sync: Synced

# This is the power of selfHeal.
# The cluster ALWAYS converges to what Git says.
# Manual changes are reversed automatically.

# ════════════════════════════════════════════════
# SIMULATE DRIFT SCENARIO 2: Wrong image tag
# ════════════════════════════════════════════════

kubectl set image deployment/api \
  api=nginx:1.19 \
  -n production

echo "Image manually changed to old version — drift created"

# ArgoCD detects immediately (if using webhook):
# OutOfSync: Container image differs
# api: nginx:1.24.0 (Git) != nginx:1.19 (Cluster)

# selfHeal reverts to Git's image
# Pod with wrong image gets terminated
# Pod with correct image starts

# ════════════════════════════════════════════════
# SIMULATE DRIFT SCENARIO 3: Deleted resource
# Someone deleted a ConfigMap that the app needs
# ════════════════════════════════════════════════

kubectl delete configmap app-config -n production

# ArgoCD detects: ConfigMap 'app-config' exists in Git, not in cluster
# ArgoCD recreates it
# App recovers

# ════════════════════════════════════════════════
# SIMULATE DRIFT SCENARIO 4: New resource added manually
# Someone kubectl-applied a resource not in Git
# ════════════════════════════════════════════════

kubectl apply -n production - << 'EOF'
apiVersion: v1
kind: ConfigMap
metadata:
  name: manual-config
  namespace: production
data:
  key: "this was not in Git"
EOF

# ArgoCD with prune: true will DELETE this
# Because Git doesn't have it → cluster shouldn't have it

# This enforces: EVERYTHING must be in Git.
# No untracked resources in production.

# ════════════════════════════════════════════════
# BREAK RECONCILIATION: Invalid manifest in Git
# Push broken YAML → ArgoCD fails to sync
# ════════════════════════════════════════════════

# Simulate pushing invalid YAML to gitops repo
cat << 'EOF' > /tmp/broken-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
spec:
  replicas: INVALID_NUMBER   # This will fail validation
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
      - name: api
        image: nginx:1.24.0
EOF

# If this were pushed to Git, ArgoCD would:
# 1. Pull the change
# 2. Try to apply it
# 3. Kubernetes API rejects: replicas must be integer
# 4. ArgoCD marks: Sync Failed
# 5. ArgoCD sends notification to Slack
# 6. OLD pods keep running (ArgoCD doesn't destroy working resources)
# 7. You fix the YAML in Git → push again → ArgoCD syncs successfully

# DIAGNOSIS:
argocd app get api-production
# Shows: Sync Status: OutOfSync, Sync Result: Failed

# See sync errors:
argocd app sync api-production --dry-run

# Get sync errors programmatically
argocd app get api-production -o json | \
  jq '.status.conditions[] | select(.type == "SyncError")'

# Fix: revert the bad commit
git revert HEAD --no-edit
git push
# ArgoCD picks up the revert → syncs successfully

# ════════════════════════════════════════════════
# BREAK RECONCILIATION: ArgoCD can't reach Git
# Simulate network partition to GitHub
# ════════════════════════════════════════════════

# Simulate by temporarily giving ArgoCD wrong Git credentials
kubectl patch secret argocd-secret \
  -n argocd \
  -p '{"data":{"github.token":"YnJva2VuLXRva2Vu"}}'   # "broken-token" base64

# ArgoCD attempts to pull from Git
# Git returns 401 Unauthorized
# ArgoCD marks: Unknown (can't determine state)
# BUT: cluster keeps running as-is (no sync = no change = safe)

# Check ArgoCD repo connection status:
argocd repo list

# Fix: restore correct credentials
kubectl create secret generic github-credentials \
  --from-literal=token=$GITHUB_TOKEN \
  -n argocd \
  --dry-run=client -o yaml | kubectl apply -f -

# Verify connection restored
argocd repo list   # Should show Connected

# ════════════════════════════════════════════════
# THE DRIFT DETECTION WORKFLOW
# ════════════════════════════════════════════════

# ArgoCD drift detection runs continuously.
# Default: every 3 minutes (or instant with webhooks)
# Set up webhook for instant detection:

# In GitHub repo settings → Webhooks → Add webhook
# Payload URL: https://argocd.yourdomain.com/api/webhook
# Content type: application/json
# Secret: $ARGOCD_WEBHOOK_SECRET
# Events: push, pull request

# With webhook:
# git push → GitHub fires webhook → ArgoCD gets notified instantly
# ArgoCD syncs within 5 seconds of push
# No more 3-minute polling delay

# Configure webhook secret in ArgoCD:
kubectl create secret generic argocd-secret \
  --from-literal=webhook.github.secret="$GITHUB_WEBHOOK_SECRET" \
  -n argocd \
  --dry-run=client -o yaml | kubectl apply -f -
Lab 2: The Full GitOps Workflow
# ════════════════════════════════════════════════
# THE COMPLETE END-TO-END GITOPS WORKFLOW
# Watch every step from code push to cluster update
# ════════════════════════════════════════════════

echo "=== FULL GITOPS WORKFLOW DEMONSTRATION ==="
echo "Every step timed. Every handoff visible."

# STEP 1: Developer makes a code change
cd /path/to/api-repo

# Make a change (update nginx version)
sed -i 's|nginx:1.24.0|nginx:1.25.0|g' Dockerfile

git add Dockerfile
git commit -m "feat: upgrade nginx to 1.25.0 for security patch"
git push origin main

T_PUSH=$(date +%s)
echo "T+0: Code pushed to GitHub at $(date '+%H:%M:%S')"

# STEP 2: GitHub Actions CI starts (usually within 10 seconds)
echo "Watching GitHub Actions..."
sleep 15

# You'd open GitHub Actions UI here to watch:
# ✅ Lint passed (30s)
# ✅ Security scan passed (2min - Trivy scans image)
# ✅ Policy check passed (30s)
# ✅ Image built and pushed (3min)
# ✅ Image signed with cosign
# ✅ GitOps repo updated with new tag
# Total CI time: ~6-8 minutes

T_CI_DONE=$(( $(date +%s) - T_PUSH ))
echo "T+${T_CI_DONE}s: CI pipeline complete"

# STEP 3: GitOps repo update (done by CI pipeline)
cd /path/to/gitops-repo
git pull

# See what CI updated:
git log --oneline -3
# abc1234 deploy(api): sha-abc1234 to production
# def5678 deploy(api): sha-def5678 to production

cat applications/api/overlays/production/kustomization.yaml | grep newTag
# newTag: "sha-abc1234"   ← Updated by CI

# STEP 4: ArgoCD detects the change
# (instant with webhook, ~3 min with polling)

echo "Waiting for ArgoCD to detect change..."

# Watch ArgoCD
watch -n5 'argocd app get api-production --grpc-web | grep -E "Sync|Health|Revision"'

# STEP 5: ArgoCD shows OutOfSync
# Git revision: abc1234 (new)
# Cluster revision: def5678 (old)
# Status: OutOfSync

# STEP 6: ArgoCD applies the diff
# Only the Deployment is changing (new image tag)
# ArgoCD does kubectl apply on that specific resource
# Kubernetes does rolling update (maxSurge:1, maxUnavailable:0)

T_SYNC_START=$(date +%s)
echo "ArgoCD sync started"

# STEP 7: Watch the rolling update
kubectl get pods -n production -w &
WATCH_PID=$!

# You'll see:
# api-OLD-pod1: Running → Terminating
# api-NEW-pod1: Pending → ContainerCreating → Running
# api-OLD-pod2: Running → Terminating
# api-NEW-pod2: Pending → ContainerCreating → Running
# api-OLD-pod3: Running → Terminating
# api-NEW-pod3: Pending → ContainerCreating → Running

sleep 60
kill $WATCH_PID

T_COMPLETE=$(( $(date +%s) - T_PUSH ))

echo ""
echo "=== GITOPS LATENCY REPORT ==="
echo "T+0:         Code pushed to GitHub"
echo "T+30s:       Lint and policy check passed"
echo "T+3min:      Security scan completed"
echo "T+6min:      Image built, scanned, signed, pushed"
echo "T+6min 30s:  GitOps repo updated"
echo "T+6min 35s:  ArgoCD detected change (webhook)"
echo "T+7min:      Rolling update started"
echo "T+${T_COMPLETE}s: All pods running new version"
echo ""
echo "ZERO manual steps. ZERO human intervention after git push."

# ════════════════════════════════════════════════
# VERIFY THE DEPLOYMENT
# ════════════════════════════════════════════════

# Check ArgoCD says everything is good
argocd app get api-production

# Check pods are running new image
kubectl get pods -n production -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[0].image}{"\n"}{end}'

# Verify image signature (cosign verify)
cosign verify \
  --certificate-identity-regexp "https://github.com/myorg/api" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
  ghcr.io/myorg/api@sha256:abc123...
# If this fails: image was not signed by CI → reject it!

# Check application is healthy
curl -s https://api.yourdomain.com/health | jq .

# Check ArgoCD history
argocd app history api-production

# ROLLBACK if something is wrong:
# Option A: ArgoCD rollback (goes to previous sync)
argocd app rollback api-production

# Option B: Git revert (proper GitOps way)
git revert HEAD --no-edit
git push
# ArgoCD syncs the revert automatically
PART 8: GITOPS REPO CI PIPELINE
Validate Manifests Before ArgoCD Applies Them
# gitops/.github/workflows/validate.yaml
# Run on every PR to gitops repo
# Catch problems BEFORE they hit the cluster

name: Validate Manifests

on:
  pull_request:
    branches: [main]

jobs:
  # ════════════════════════════════════════════════
  # LINT AND VALIDATE YAML
  # ════════════════════════════════════════════════
  lint-yaml:
    name: Lint YAML
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Lint all YAML files
      uses: ibiqlik/action-yamllint@v3
      with:
        file_or_dir: .
        config_data: |
          extends: default
          rules:
            line-length:
              max: 150
            truthy:
              allowed-values: ['true', 'false', 'on', 'off']

  # ════════════════════════════════════════════════
  # KUSTOMIZE BUILD — does it render without errors?
  # ════════════════════════════════════════════════
  kustomize-build:
    name: Kustomize Build Check
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Install Kustomize
      run: |
        curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash
        sudo mv kustomize /usr/local/bin/

    - name: Build all overlays
      run: |
        echo "Building production overlay..."
        kustomize build applications/api/overlays/production

        echo "Building staging overlay..."
        kustomize build applications/api/overlays/staging

        echo "All overlays build successfully"

  # ════════════════════════════════════════════════
  # KUBEVAL — validate Kubernetes manifest schemas
  # ════════════════════════════════════════════════
  kubeval:
    name: Schema Validation
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Install kubeval
      run: |
        wget https://github.com/instrumenta/kubeval/releases/latest/download/kubeval-linux-amd64.tar.gz
        tar xf kubeval-linux-amd64.tar.gz
        sudo mv kubeval /usr/local/bin/

    - name: Render manifests and validate
      run: |
        # Build kustomize output and pipe to kubeval
        kustomize build applications/api/overlays/production | \
          kubeval \
            --strict \
            --kubernetes-version 1.29.0 \
            --ignore-missing-schemas

    - name: Validate ArgoCD Application manifests
      run: |
        find apps/ -name "*.yaml" -exec kubeval {} \;

  # ════════════════════════════════════════════════
  # CONFTEST — OPA policy enforcement
  # ════════════════════════════════════════════════
  policy-check:
    name: Policy Enforcement
    runs-on: ubuntu-latest
    needs: kustomize-build

    steps:
    - uses: actions/checkout@v4

    - name: Install Conftest
      run: |
        VERSION=$(curl -s https://api.github.com/repos/open-policy-agent/conftest/releases/latest \
          | jq -r .tag_name)
        wget -q "https://github.com/open-policy-agent/conftest/releases/download/${VERSION}/conftest_${VERSION#v}_Linux_x86_64.tar.gz"
        tar xzf conftest_*.tar.gz
        sudo mv conftest /usr/local/bin/

    - name: Install Kustomize
      run: |
        curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash
        sudo mv kustomize /usr/local/bin/

    - name: Render and run policy checks
      run: |
        echo "Checking production manifests against OPA policies..."

        kustomize build applications/api/overlays/production > /tmp/production-manifests.yaml

        # Split multi-document YAML and check each
        csplit -z -f /tmp/manifest- /tmp/production-manifests.yaml \
          '/^---$/' '{*}' 2>/dev/null || true

        # Check each manifest
        FAILED=0
        for f in /tmp/manifest-*; do
          echo "Checking: $f"
          conftest test $f \
            --policy policies/kubernetes/ \
            --output table || FAILED=1
        done

        if [ $FAILED -eq 1 ]; then
          echo "Policy violations found!"
          exit 1
        fi

        echo "All policies passed!"

  # ════════════════════════════════════════════════
  # DIFF CHECK — what will change in cluster?
  # ════════════════════════════════════════════════
  argocd-diff:
    name: ArgoCD Diff
    runs-on: ubuntu-latest
    needs: [kustomize-build, policy-check]

    steps:
    - uses: actions/checkout@v4

    - name: Install ArgoCD CLI
      run: |
        VERSION=$(curl -s https://api.github.com/repos/argoproj/argo-cd/releases/latest \
          | jq -r .tag_name)
        curl -sSL -o /tmp/argocd \
          https://github.com/argoproj/argo-cd/releases/download/${VERSION}/argocd-linux-amd64
        chmod +x /tmp/argocd
        sudo mv /tmp/argocd /usr/local/bin/argocd

    - name: ArgoCD diff (what would change in cluster)
      run: |
        argocd app diff api-production \
          --server argocd.yourdomain.com \
          --auth-token ${{ secrets.ARGOCD_AUTH_TOKEN }} \
          --local applications/api/overlays/production \
          --grpc-web \
          2>&1 | tee /tmp/diff-output.txt

        echo "Diff complete"
      continue-on-error: true   # App might not be out of sync — that's fine

    - name: Post diff as PR comment
      uses: peter-evans/create-or-update-comment@v4
      with:
        issue-number: ${{ github.event.pull_request.number }}
        body: |
          ## 🔍 Cluster Diff

          Changes that would be applied to the cluster if this PR is merged:

          ```diff
          ${{ steps.diff.outputs.stdout }}
          ```

          > Review these changes carefully before approving.

PART 9: THE DELIVERABLE — Full Automated Platform Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FULL AUTOMATED PLATFORM — DELIVERY REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: CI PIPELINE STAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Application Pipeline (app-repo):
  Stage 1: Lint
    Tools: hadolint, yamllint, shellcheck
    Runs in: ~30 seconds
    Blocks: syntax errors, anti-patterns

  Stage 2: Unit Tests
    Coverage threshold: 80%
    Fails if: any test fails OR coverage < 80%
    Runs in: 2-5 minutes

  Stage 3: Secret Detection
    Tools: gitleaks (full history), trufflehog
    Scans: ALL git commits not just current files
    Fails on: any verified secret found

  Stage 4: Security Scanning
    Tools: trivy (filesystem), semgrep, bandit
    Fails on: CRITICAL or HIGH severity issues
    Results uploaded to: GitHub Security tab

  Stage 5: Build and Image Scan
    Tools: docker buildx, trivy (image), cosign
    Image scanned BEFORE pushing to registry
    Image signed AFTER pushing (keyless via Sigstore)
    Fails on: CRITICAL or HIGH CVEs in final image

  Stage 6: Policy Enforcement
    Tools: conftest (OPA), kyverno CLI
    Policies: no root, resource limits required,
              no latest tag, readiness probe required
    Fails on: any policy violation

  Stage 7: GitOps Update
    Updates kustomization.yaml with new image tag
    Creates commit in gitops repo
    Triggers ArgoCD sync

Terraform Pipeline (infra-repo):
  On PR:
    tfsec: catch security misconfigs
    checkov: 1000+ IaC checks
    trivy: IaC scan
    conftest: custom OPA policies
    infracost: cost estimation posted as PR comment
    terraform plan: posted as PR comment (with summary)

  On Merge:
    terraform apply: automatic with OIDC auth
    Notifies Slack: success or failure

SECTION 2: SECURITY GATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gate 1: Secrets    → Gitleaks/TruffleHog    → BLOCK
Gate 2: Code       → Semgrep/Bandit         → BLOCK on HIGH
Gate 3: Container  → Trivy image scan       → BLOCK on CRITICAL/HIGH
Gate 4: IaC        → tfsec/checkov/trivy    → BLOCK on CRITICAL/HIGH
Gate 5: Policies   → Conftest/Kyverno       → BLOCK on violation
Gate 6: Costs      → Infracost              → BLOCK if > $200/month increase
Gate 7: Signature  → Cosign verify          → BLOCK unsigned images at runtime

Result: Code that reaches production has passed 7 security gates.
        No human manually reviews security — automation does it faster.

SECTION 3: GITOPS METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Deployment Frequency:    Multiple times per day (safe to deploy = do deploy)
Lead Time for Changes:   ~8 minutes (push to production)
Mean Time to Recovery:   ~2 minutes (git revert → ArgoCD syncs)
Change Failure Rate:     < 5% (security gates catch most issues)

Drift Detection:
  Method: ArgoCD continuous reconciliation
  Frequency: Every 3 min (polling) or instant (webhook)
  selfHeal: enabled — drift auto-corrected
  prune: enabled — unauthorized resources removed
  Alert: Slack notification on any sync failure

SECTION 4: DRIFT RECOVERY SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Manual Scale:         ArgoCD reverts in < 30 seconds
Wrong Image Applied:  ArgoCD reverts in < 30 seconds
ConfigMap Deleted:    ArgoCD recreates in < 30 seconds
Unauthorized Resource: ArgoCD prunes in next sync cycle
Bad YAML in Git:      Old pods keep running, sync fails with alert
Git Unreachable:      Cluster unchanged, alert fires, no risk
ArgoCD Down:          Cluster runs as-is, no changes applied (safe)

KEY INSIGHT: Failures are SAFE.
  Bad commit → sync fails → old version keeps running → alert fires → fix
  ArgoCD down → nothing changes → no risk → fix and recover
  The system fails CONSERVATIVELY — it never breaks what was working.

SECTION 5: PLATFORM RUNBOOK COMMANDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Emergency rollback (< 2 minutes):
  git revert HEAD --no-edit && git push
  OR: argocd app rollback api-production

Force sync now:
  argocd app sync api-production

Disable auto-sync temporarily (maintenance):
  argocd app set api-production --sync-policy none

Re-enable auto-sync:
  argocd app set api-production --sync-policy automated

Check what's out of sync across ALL apps:
  argocd app list | grep OutOfSync

Diff cluster vs Git for any app:
  argocd app diff api-production

Hard refresh (ignore cache, re-fetch Git):
  argocd app get api-production --hard-refresh

See all sync history:
  argocd app history api-production
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR COMPLETE CHECKLIST
CONCEPTS — explain without notes:
□ Explain what lint catches that tests don't
□ Explain why secrets are scanned across ALL git history
□ Explain the difference between tfsec and checkov
□ Explain what OPA conftest does and how Rego policies work
□ Explain why image is scanned before pushing to registry
□ Explain cosign keyless signing with OIDC
□ Explain the difference between prune and selfHeal in ArgoCD
□ Explain sync waves and why order of deployment matters
□ Explain why ArgoCD down is a SAFE failure mode
□ Explain ArgoCD hooks: PreSync, Sync, PostSync, SyncFail
□ Explain how gitops rollback works vs imperative rollback

LABS — done with your own hands:
□ CI pipeline: all 7 stages run on a real push
□ Linting failure: intentionally fail hadolint → pipeline blocks
□ Secret detected: add a fake AWS key → gitleaks blocks it
□ Security scan: image with CVEs → trivy blocks it
□ Policy violation: deploy without resource limits → conftest blocks
□ Cost check: add expensive resource → infracost blocks it
□ Terraform plan: posted as PR comment with change summary
□ Terraform apply: runs automatically on merge to main
□ ArgoCD: selfHeal: manual scale reverted automatically
□ ArgoCD: prune: manual ConfigMap removed automatically
□ ArgoCD: broken YAML pushed → old version keeps running
□ ArgoCD: git revert → sync succeeds → cluster recovers
□ Full workflow: git push → 8 min later → production updated
□ Sync waves: cert-manager deploys before app uses its CRDs

PRODUCTION HABITS:
□ NEVER manually kubectl apply in production
□ NEVER bypass the pipeline (even for "urgent" fixes — git revert is faster)
□ ALWAYS check argocd app list before assuming cluster state
□ ALWAYS use git revert not git reset for production fixes (history matters)
□ ALWAYS have Slack notifications — know before users report
□ ALWAYS test pipeline changes on staging branch first
□ NEVER store secrets in Git — use External Secrets Operator
□ ALWAYS sign your images — verify signatures in admission controller
□ NEVER set prune: false in production — unauthorized resources are risk
□ ALWAYS review the infracost comment before approving IaC PRs
Ten modules in. The platform now builds itself, secures itself, deploys itself, and heals itself.
A developer pushes code. Linting catches the style error they missed. Security scanning finds the outdated dependency before it reaches production. Policy enforcement blocks the deployment that was missing resource limits. The cost estimator shows the PR would add $47 a month — someone updates the instance size. The plan is reviewed as a comment on the PR. It merges. Terraform applies. The image is built, scanned for vulnerabilities, and signed with a cryptographic key. The gitops repo is updated. ArgoCD sees the change in Git and syncs the cluster. The rolling update completes in 45 seconds. Slack says deployment succeeded.
Someone manually scales the deployment to 1 pod. ArgoCD notices in 15 seconds and scales it back to 3. The cluster always reflects Git. Git is the only truth.
This is what a senior platform engineer builds. This is how teams of 200 deploy safely 50 times a day. This is what "fully automated platform" means.
Everything from every module connects here. Linux from Module 1 runs the containers the pipeline builds. Networking from Module 2 routes the webhook to ArgoCD. IAM from Module 3 gives GitHub Actions OIDC access to AWS without keys. EKS from Module 8 runs the cluster ArgoCD syncs. Autoscaling from Module 9 scales what ArgoCD deploys. Terraform from Module 10 provisions what ArgoCD manages.
You now know the entire stack. Build it. Own it. Come back when the pipeline runs green and the cluster never drifts.





















Cost Domination 💰
Your Senior DevSecOps Mentor Speaking
Every engineer can spend money on cloud. Junior engineers spend a lot of it. Senior engineers spend the minimum required to maintain reliability. The engineers who get promoted are the ones who can cut a $50,000/month AWS bill to $22,000 without breaking a single production service.
This module is about becoming that engineer.
Cost optimization is not about being cheap. It is about being precise. You pay for exactly what delivers value. You eliminate everything that does not. You understand every dollar on the AWS bill and you make a conscious decision about each one.
By the end of this module you will look at an AWS bill the way a surgeon looks at an X-ray. You will see exactly what is wrong, exactly what to cut, and exactly how to do it without killing the patient.
THE MASTER MENTAL MODEL FIRST
THE COST OPTIMIZATION MINDSET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WRONG WAY — most engineers think this:
"Cloud is expensive. We need a bigger budget."

RIGHT WAY — senior engineers think this:
"Every dollar we waste is a dollar we can't spend
 on engineers, features, or reliability.
 Show me the bill. I'll find the waste."

THE FOUR CATEGORIES OF CLOUD WASTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. IDLE RESOURCES (worst offender)
   Running 24/7 but not working 24/7
   Examples: dev environments at night
             test clusters on weekends
             bastion hosts nobody SSHes to
             oversized EC2 instances at 3% CPU average

2. OVER-PROVISIONED RESOURCES
   "I'll request 4 CPU to be safe" for a pod using 0.2 CPU
   "t3.xlarge" for a service that needs t3.small
   Reserved 100GB EBS volumes with 15GB used

3. PAYING FULL PRICE FOR INTERRUPTIBLE WORK
   Batch jobs running on On-Demand
   Stateless web pods on On-Demand when Spot = 70% cheaper
   No Savings Plans despite stable baseline workload

4. INEFFICIENT DATA MOVEMENT
   Every GB through NAT Gateway costs money
   S3 without VPC endpoint = NAT GW charges
   Inter-AZ data transfer charging $0.02/GB round trip
   CloudFront would have been free but you didn't use it

THE GOAL OF THIS MODULE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Identify waste in each category.
Eliminate it systematically.
Document before and after.
Prove the savings with numbers.

Target: 40-60% cost reduction with ZERO reliability regression.
That is not aggressive. That is standard for an unoptimized cloud account.
PART 1: THE AUDIT — Find Every Dollar
Step 1: Read the Bill Like a Doctor
# ════════════════════════════════════════════════
# AWS COST EXPLORER — your diagnostic tool
# Run all of these before touching anything
# ════════════════════════════════════════════════

START_DATE=$(date -d '90 days ago' +%Y-%m-%d)
END_DATE=$(date +%Y-%m-%d)

# TOTAL SPEND by service — the big picture
echo "=== TOTAL SPEND BY SERVICE (Last 90 days) ==="
aws ce get-cost-and-usage \
  --time-period Start=$START_DATE,End=$END_DATE \
  --granularity MONTHLY \
  --metrics UnblendedCost \
  --group-by Type=DIMENSION,Key=SERVICE \
  --query 'ResultsByTime[*].Groups[*].{
    Service:Keys[0],
    Cost:Metrics.UnblendedCost.Amount
  }' \
  --output table | sort -t'|' -k3 -rn

# ════════════════════════════════════════════════
# COMPUTE ANALYSIS — where most money goes
# ════════════════════════════════════════════════

# Find all running EC2 instances with their types
echo "=== ALL RUNNING EC2 INSTANCES ==="
aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query 'Reservations[*].Instances[*].{
    ID:InstanceId,
    Type:InstanceType,
    AZ:Placement.AvailabilityZone,
    Name:Tags[?Key==`Name`].Value|[0],
    LaunchTime:LaunchTime
  }' \
  --output table

# CPU utilization for each instance (last 14 days)
echo "=== EC2 CPU UTILIZATION (last 14 days) ==="
for INSTANCE in $(aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query 'Reservations[*].Instances[*].InstanceId' \
  --output text); do

  AVG_CPU=$(aws cloudwatch get-metric-statistics \
    --namespace AWS/EC2 \
    --metric-name CPUUtilization \
    --dimensions Name=InstanceId,Value=$INSTANCE \
    --start-time $(date -u -d '14 days ago' +%Y-%m-%dT%H:%M:%S) \
    --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
    --period 1209600 \
    --statistics Average \
    --query 'Datapoints[0].Average' \
    --output text 2>/dev/null || echo "0")

  MAX_CPU=$(aws cloudwatch get-metric-statistics \
    --namespace AWS/EC2 \
    --metric-name CPUUtilization \
    --dimensions Name=InstanceId,Value=$INSTANCE \
    --start-time $(date -u -d '14 days ago' +%Y-%m-%dT%H:%M:%S) \
    --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
    --period 1209600 \
    --statistics Maximum \
    --query 'Datapoints[0].Maximum' \
    --output text 2>/dev/null || echo "0")

  NAME=$(aws ec2 describe-instances \
    --instance-ids $INSTANCE \
    --query 'Reservations[0].Instances[0].Tags[?Key==`Name`].Value|[0]' \
    --output text)

  TYPE=$(aws ec2 describe-instances \
    --instance-ids $INSTANCE \
    --query 'Reservations[0].Instances[0].InstanceType' \
    --output text)

  # Flag instances with low CPU
  FLAG=""
  if (( $(echo "$AVG_CPU < 10" | bc -l) )); then
    FLAG="⚠️  UNDERUTILIZED"
  fi

  printf "%-20s %-15s %-8s Avg:%-6s Max:%-6s %s\n" \
    "$NAME" "$INSTANCE" "$TYPE" \
    "${AVG_CPU}%" "${MAX_CPU}%" "$FLAG"
done

# ════════════════════════════════════════════════
# KUBERNETES POD ANALYSIS — the hidden waste
# ════════════════════════════════════════════════

echo "=== POD RESOURCE REQUESTS vs ACTUAL USAGE ==="
echo "This shows where you're OVERPAYING for pods"

# For each namespace, compare requested vs actual
for NS in $(kubectl get namespaces -o jsonpath='{.items[*].metadata.name}'); do
  echo ""
  echo "--- Namespace: $NS ---"
  kubectl top pods -n $NS --no-headers 2>/dev/null | \
    while read POD CPU MEM; do
      # Get requests
      REQ_CPU=$(kubectl get pod $POD -n $NS \
        -o jsonpath='{.spec.containers[0].resources.requests.cpu}' \
        2>/dev/null | sed 's/m//')
      REQ_MEM=$(kubectl get pod $POD -n $NS \
        -o jsonpath='{.spec.containers[0].resources.requests.memory}' \
        2>/dev/null | sed 's/Mi//')

      ACTUAL_CPU=$(echo $CPU | sed 's/m//')
      ACTUAL_MEM=$(echo $MEM | sed 's/Mi//')

      if [ -n "$REQ_CPU" ] && [ -n "$ACTUAL_CPU" ]; then
        # Calculate utilization
        CPU_PCT=$(echo "scale=0; $ACTUAL_CPU * 100 / $REQ_CPU" | bc 2>/dev/null || echo "0")

        if [ "$CPU_PCT" -lt 30 ] 2>/dev/null; then
          echo "  ⚠️  $POD: CPU using ${CPU_PCT}% of requested (${ACTUAL_CPU}m of ${REQ_CPU}m)"
        fi
      fi
    done
done

# ════════════════════════════════════════════════
# EBS VOLUME ANALYSIS
# ════════════════════════════════════════════════

echo "=== EBS VOLUME WASTE ==="

# Unattached volumes (pure waste)
echo "Unattached EBS volumes (paying for nothing):"
aws ec2 describe-volumes \
  --filters "Name=status,Values=available" \
  --query 'Volumes[*].{
    ID:VolumeId,
    SizeGB:Size,
    Type:VolumeType,
    Created:CreateTime,
    MonthlyCostEst:Size
  }' \
  --output table

WASTED_GB=$(aws ec2 describe-volumes \
  --filters "Name=status,Values=available" \
  --query 'sum(Volumes[*].Size)' \
  --output text)

echo "Total wasted GB: $WASTED_GB"
echo "Monthly waste: \$$(echo "scale=2; $WASTED_GB * 0.08" | bc)/month (gp3 rate)"

# gp2 volumes (should all be gp3)
echo ""
echo "gp2 volumes (should be gp3 - 20% cheaper):"
aws ec2 describe-volumes \
  --filters "Name=volume-type,Values=gp2" \
  --query 'Volumes[*].{ID:VolumeId,SizeGB:Size,Name:Tags[?Key==`Name`].Value|[0]}' \
  --output table

# Old snapshots
echo ""
echo "EBS snapshots older than 90 days:"
aws ec2 describe-snapshots \
  --owner-ids self \
  --query "Snapshots[?StartTime<='$(date -d '90 days ago' +%Y-%m-%d)'].{
    ID:SnapshotId,
    SizeGB:VolumeSize,
    Date:StartTime,
    Description:Description
  }" \
  --output table

# ════════════════════════════════════════════════
# NAT GATEWAY ANALYSIS
# ════════════════════════════════════════════════

echo "=== NAT GATEWAY COST ANALYSIS ==="

# List all NAT gateways
aws ec2 describe-nat-gateways \
  --filter "Name=state,Values=available" \
  --query 'NatGateways[*].{
    ID:NatGatewayId,
    VPC:VpcId,
    Subnet:SubnetId,
    State:State
  }' \
  --output table

# Cost per NAT GW: $0.045/hr = $32.85/month just existing
NAT_COUNT=$(aws ec2 describe-nat-gateways \
  --filter "Name=state,Values=available" \
  --query 'length(NatGateways)' \
  --output text)

echo "NAT Gateways running: $NAT_COUNT"
echo "Fixed monthly cost: \$$(echo "scale=2; $NAT_COUNT * 32.85" | bc)"

# Check NAT GW data processing (the variable cost)
for NAT in $(aws ec2 describe-nat-gateways \
  --filter "Name=state,Values=available" \
  --query 'NatGateways[*].NatGatewayId' \
  --output text); do

  BYTES_OUT=$(aws cloudwatch get-metric-statistics \
    --namespace AWS/NATGateway \
    --metric-name BytesOutToDestination \
    --dimensions Name=NatGatewayId,Value=$NAT \
    --start-time $(date -u -d '30 days ago' +%Y-%m-%dT%H:%M:%S) \
    --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
    --period 2592000 \
    --statistics Sum \
    --query 'Datapoints[0].Sum' \
    --output text 2>/dev/null || echo "0")

  GB=$(echo "scale=2; ${BYTES_OUT:-0} / 1073741824" | bc 2>/dev/null || echo "0")
  COST=$(echo "scale=2; $GB * 0.045" | bc 2>/dev/null || echo "0")

  echo "NAT $NAT: ${GB}GB processed = \$$COST/month processing cost"
done

# ════════════════════════════════════════════════
# S3 ANALYSIS
# ════════════════════════════════════════════════

echo "=== S3 STORAGE CLASS ANALYSIS ==="
aws s3api list-buckets --query 'Buckets[*].Name' --output text | \
  tr '\t' '\n' | while read BUCKET; do
    echo "Bucket: $BUCKET"
    aws s3api list-objects-v2 \
      --bucket $BUCKET \
      --query 'Contents[*].{Size:Size,Class:StorageClass}' \
      --output json 2>/dev/null | \
      python3 -c "
import json,sys
data = json.load(sys.stdin)
if not data: print('  (empty)'); exit()
classes = {}
for obj in data:
    cls = obj.get('StorageClass','STANDARD')
    classes[cls] = classes.get(cls, 0) + obj.get('Size', 0)
for cls, size in sorted(classes.items()):
    gb = size / (1024**3)
    prices = {'STANDARD':0.023,'STANDARD_IA':0.0125,'GLACIER':0.004,
              'DEEP_ARCHIVE':0.00099,'INTELLIGENT_TIERING':0.023}
    cost = gb * prices.get(cls, 0.023)
    print(f'  {cls}: {gb:.2f}GB = \${cost:.2f}/month')
" 2>/dev/null
  done
PART 2: SPOT INSTANCES — 70% Savings on Compute
The Complete Spot Strategy
SPOT INSTANCE ECONOMICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On-Demand m5.large:  $0.096/hr  = $70.08/month
Spot m5.large:       $0.028/hr  = $20.44/month (typical)
Savings:             71%

On-Demand t3.medium: $0.0416/hr = $30.37/month
Spot t3.medium:      $0.0125/hr = $9.13/month (typical)
Savings:             70%

FOR A 10-NODE CLUSTER (all m5.large):
On-Demand: 10 × $70.08 = $700.80/month
Spot only: 10 × $20.44 = $204.40/month
Mixed (2 OD + 8 Spot): 2×$70.08 + 8×$20.44 = $303.68/month

SAVINGS: $397.12/month = $4,765/year from ONE change

THE SPOT STRATEGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Baseline (On-Demand): 2-3 nodes minimum
  → System workloads, monitoring, ArgoCD
  → Never interrupted — cluster always healthy

Burst (Spot): everything else
  → Application pods (stateless)
  → Batch jobs
  → Development workloads

Interruption handling:
  → AWS Node Termination Handler (NTH) installed
  → 2-minute warning → graceful drain
  → New Spot node provisions → pods reschedule

SPOT DIVERSIFICATION — THE MOST IMPORTANT RULE:
Do NOT use a single instance type.
Use 6-10 similar instance types across 2+ AZs.
Larger pool = more stable = fewer interruptions.
Implement Spot in Terraform
# modules/eks/spot-node-group.tf
# Add this to your existing EKS module

locals {
  # Instance types with similar CPU/memory to m5.large
  # Spread across pools for maximum availability
  spot_instance_types = [
    "m5.large",    "m5a.large",   "m5n.large",
    "m5d.large",   "m4.large",    "m6i.large",
    "m6a.large",   "t3.large",    "t3a.large",
    "r5.large"     # Higher memory option for memory-heavy pods
  ]
}

resource "aws_eks_node_group" "spot" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "spot-workers"
  node_role_arn   = var.node_role_arn

  # Use BOTH private subnets for AZ diversification
  subnet_ids = var.private_subnet_ids

  # This is what makes it Spot
  capacity_type  = "SPOT"
  instance_types = local.spot_instance_types

  scaling_config {
    min_size     = 0    # Can scale to zero — CA manages this
    max_size     = 50   # Your maximum burst capacity
    desired_size = 3    # Starting point
  }

  labels = {
    "workload-type"          = "spot-worker"
    "capacity-type"          = "spot"
    "node.kubernetes.io/lifecycle" = "spot"
  }

  taint {
    key    = "capacity-type"
    value  = "spot"
    effect = "NO_SCHEDULE"
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-spot-workers"
    "k8s.io/cluster-autoscaler/${var.cluster_name}" = "owned"
    "k8s.io/cluster-autoscaler/enabled"             = "true"
    "k8s.io/cluster-autoscaler/node-template/label/workload-type" = "spot-worker"
  })

  lifecycle {
    ignore_changes = [scaling_config[0].desired_size]
  }
}

# Separate on-demand node group for system workloads
resource "aws_eks_node_group" "on_demand_system" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "on-demand-system"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.private_subnet_ids
  capacity_type   = "ON_DEMAND"
  instance_types  = ["t3.medium"]

  scaling_config {
    min_size     = 2    # Always 2 for HA
    max_size     = 4
    desired_size = 2
  }

  labels = {
    "workload-type"     = "system"
    "capacity-type"     = "on-demand"
    "node.kubernetes.io/lifecycle" = "on-demand"
  }

  taint {
    key    = "workload-type"
    value  = "system"
    effect = "NO_SCHEDULE"
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-on-demand-system"
  })

  lifecycle {
    ignore_changes = [scaling_config[0].desired_size]
  }
}
Configure Pods for Spot
# The Deployment configuration for Spot-tolerating apps
# Apply this to ALL stateless workloads

apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      # SPOT CONFIGURATION
      # ════════════════════════════════════
      # Accept the spot taint
      tolerations:
      - key: "capacity-type"
        operator: "Equal"
        value: "spot"
        effect: "NoSchedule"
      # Also tolerate NTH draining taint
      - key: "aws-node-termination-handler/spot-itn"
        operator: "Exists"
        effect: "NoSchedule"

      # Prefer spot, fall back to on-demand
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            preference:
              matchExpressions:
              - key: "node.kubernetes.io/lifecycle"
                operator: In
                values: ["spot"]

      # GRACEFUL SHUTDOWN for spot interruptions
      # Must be LESS than 120 seconds (the spot warning window)
      terminationGracePeriodSeconds: 90

      containers:
      - name: api
        image: ghcr.io/myorg/api:v1.0.0

        # Drain connections before shutdown
        lifecycle:
          preStop:
            exec:
              command:
              - /bin/sh
              - -c
              # Stop accepting new connections
              # Wait for in-flight to complete
              - "nginx -s quit; sleep 15"

        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"
# Install AWS Node Termination Handler via Terraform/Helm
helm install aws-node-termination-handler \
  eks/aws-node-termination-handler \
  --namespace kube-system \
  --set enableSpotInterruptionDraining=true \
  --set enableScheduledEventDraining=true \
  --set enableRebalanceMonitoring=true \
  --set enableRebalanceDraining=true \
  --set nodeTerminationGracePeriod=120 \
  --set podTerminationGracePeriod=90 \
  --set emitKubernetesEvents=true

# Verify NTH is running on ALL nodes (it's a DaemonSet)
kubectl get pods -n kube-system -l app.kubernetes.io/name=aws-node-termination-handler -o wide

# Test Spot interruption simulation
# This simulates what happens when AWS reclaims your spot instance
aws ec2 spot-instance-request \
  --instance-id i-SPOT_INSTANCE_ID \
  --spot-instance-request-type "one-time"

# Watch NTH cordon the node and drain pods
kubectl get pods -n production -w
kubectl get nodes -w

PART 3: GRAVITON MIGRATION — 20% More for 20% Less
Mental Model — ARM Architecture
GRAVITON = AWS-designed ARM processor
x86 (Intel/AMD) = Traditional processor family

WHY GRAVITON IS CHEAPER AND FASTER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AWS designed Graviton for cloud workloads specifically.
Not repurposing desktop/laptop chips.
Custom-built for: high throughput, low latency, efficiency.

Performance: 20-40% BETTER than comparable x86 at same price
Price: 20% CHEAPER than comparable x86 generation

COMBINED EFFECT:
m5.large (x86):   $0.096/hr for 2 vCPU, 8GB RAM
m6g.large (Grav): $0.077/hr for 2 vCPU, 8GB RAM (20% cheaper)

PLUS: Graviton gives 20-40% better performance
So you can often DOWNSIZE one instance class:
m6g.medium: $0.0385/hr for 1 vCPU, 4GB RAM
= does the same work as m5.large for HALF the price

WHAT RUNS ON GRAVITON WITHOUT CHANGES:
→ Any Docker container built for linux/arm64
→ Java, Python, Go, Node.js, Ruby apps (language runtime is arm64)
→ Most managed services already support it

WHAT NEEDS RECOMPILATION:
→ C/C++ native code compiled for x86
→ Custom compiled binaries
→ Some older/obscure packages
→ Nothing significant in 95% of modern apps

HOW TO CHECK IF YOUR APP RUNS ON ARM:
→ Build multi-arch Docker image
→ Test on Graviton node
→ Benchmark: usually 10-30% faster per dollar
Build Multi-Architecture Images
# Dockerfile — no changes needed for most apps
# The build command changes, not the Dockerfile

FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app.py"]
# GitHub Actions: build for both x86 AND ARM
# .github/workflows/multi-arch-build.yaml

name: Multi-Architecture Build

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    # Setup QEMU for ARM emulation
    - name: Set up QEMU
      uses: docker/setup-qemu-action@v3

    # BuildKit supports multi-platform
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Login to GHCR
      uses: docker/login-action@v3
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Build and push multi-arch
      uses: docker/build-push-action@v5
      with:
        context: .
        # Build for BOTH architectures in one command
        platforms: linux/amd64,linux/arm64
        push: true
        tags: |
          ghcr.io/myorg/api:latest
          ghcr.io/myorg/api:${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
Graviton Node Group in Terraform
# Add to your EKS module

resource "aws_eks_node_group" "graviton_spot" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "graviton-spot"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.private_subnet_ids

  # Graviton + Spot = maximum savings
  capacity_type = "SPOT"

  # Graviton instance types (m6g = Graviton2, m7g = Graviton3)
  instance_types = [
    "m6g.large",   "m6g.xlarge",
    "m7g.large",   "m7g.xlarge",
    "c6g.large",   "c6g.xlarge",   # Compute optimized
    "c7g.large",   "c7g.xlarge",
    "r6g.large",               # Memory optimized
    "t4g.large",   "t4g.xlarge",  # Burstable
  ]

  scaling_config {
    min_size     = 0
    max_size     = 30
    desired_size = 3
  }

  labels = {
    "kubernetes.io/arch"     = "arm64"
    "workload-type"          = "graviton-spot"
    "capacity-type"          = "spot"
    "node.kubernetes.io/lifecycle" = "spot"
  }

  taint {
    key    = "capacity-type"
    value  = "spot"
    effect = "NO_SCHEDULE"
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-graviton-spot"
    "k8s.io/cluster-autoscaler/${var.cluster_name}" = "owned"
    "k8s.io/cluster-autoscaler/enabled"             = "true"
  })

  lifecycle {
    ignore_changes = [scaling_config[0].desired_size]
  }
}

# Graviton On-Demand for system workloads (replace existing on-demand)
resource "aws_eks_node_group" "graviton_on_demand" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "graviton-on-demand"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.private_subnet_ids
  capacity_type   = "ON_DEMAND"

  # Graviton On-Demand — 20% cheaper than x86 On-Demand
  instance_types  = ["m7g.medium", "m6g.medium"]

  scaling_config {
    min_size     = 2
    max_size     = 4
    desired_size = 2
  }

  labels = {
    "kubernetes.io/arch" = "arm64"
    "workload-type"      = "system"
    "capacity-type"      = "on-demand"
  }

  taint {
    key    = "workload-type"
    value  = "system"
    effect = "NO_SCHEDULE"
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-graviton-on-demand"
  })
}
Migration Playbook
# ════════════════════════════════════════════════
# GRAVITON MIGRATION — step by step, zero downtime
# ════════════════════════════════════════════════

# STEP 1: Build multi-arch image and push to registry
# (done by CI pipeline above)

# STEP 2: Verify image is multi-arch
docker buildx imagetools inspect ghcr.io/myorg/api:latest

# Output should show:
# Platform: linux/amd64
# Platform: linux/arm64  ← Must see this

# STEP 3: Add Graviton node group via Terraform (done above)
terraform apply -target=aws_eks_node_group.graviton_spot

# STEP 4: Test one pod on Graviton first
kubectl apply -n production - << 'EOF'
apiVersion: v1
kind: Pod
metadata:
  name: graviton-test
  namespace: production
spec:
  nodeSelector:
    kubernetes.io/arch: arm64
  containers:
  - name: api
    image: ghcr.io/myorg/api:latest
    resources:
      requests:
        cpu: "100m"
        memory: "128Mi"
  restartPolicy: Never
EOF

# Check which node it landed on
kubectl get pod graviton-test -n production -o wide

# Check it's actually running on Graviton
NODE=$(kubectl get pod graviton-test -n production \
  -o jsonpath='{.spec.nodeName}')
kubectl get node $NODE -o jsonpath='{.status.nodeInfo.architecture}'
# Should output: arm64

# Check the app works
kubectl logs graviton-test -n production

# STEP 5: Gradual migration — update Deployment
kubectl patch deployment api -n production --type=json -p='[
  {
    "op": "add",
    "path": "/spec/template/spec/tolerations",
    "value": [
      {"key": "capacity-type", "operator": "Equal", "value": "spot", "effect": "NoSchedule"}
    ]
  },
  {
    "op": "add",
    "path": "/spec/template/spec/affinity",
    "value": {
      "nodeAffinity": {
        "preferredDuringSchedulingIgnoredDuringExecution": [
          {
            "weight": 100,
            "preference": {
              "matchExpressions": [
                {"key": "kubernetes.io/arch", "operator": "In", "values": ["arm64"]}
              ]
            }
          }
        ]
      }
    }
  }
]'

# Rolling update happens automatically
kubectl rollout status deployment/api -n production

# STEP 6: Verify all pods are on Graviton
kubectl get pods -n production -l app=api -o wide

# STEP 7: Run benchmark — prove performance improvement
kubectl run benchmark \
  --image=ghcr.io/myorg/api:latest \
  --restart=Never \
  -n production \
  --overrides='{"spec":{"nodeSelector":{"kubernetes.io/arch":"arm64"}}}' \
  -- sh -c "ab -n 10000 -c 50 http://api-svc/"

# Compare to x86 benchmark
kubectl run benchmark-x86 \
  --image=ghcr.io/myorg/api:latest \
  --restart=Never \
  -n production \
  --overrides='{"spec":{"nodeSelector":{"kubernetes.io/arch":"amd64"}}}' \
  -- sh -c "ab -n 10000 -c 50 http://api-svc/"

# STEP 8: Clean up old x86 node group
# Wait until all pods are on Graviton nodes
# Then cordon and drain x86 nodes
kubectl cordon $(kubectl get nodes -l kubernetes.io/arch=amd64 \
  -o jsonpath='{.items[*].metadata.name}')

# Remove x86 node group from Terraform
# (comment out or delete aws_eks_node_group.x86 resource)
terraform apply   # Removes x86 node group via ASG

# Cleanup
kubectl delete pod graviton-test benchmark benchmark-x86 -n production
PART 4: RIGHTSIZING — Pay for What You Use
Finding Overprovisioned Resources
# ════════════════════════════════════════════════
# KUBERNETES RIGHTSIZE ANALYSIS
# The most common source of waste
# ════════════════════════════════════════════════

# Install VPA (Vertical Pod Autoscaler) in recommendation mode
# VPA watches pod usage and recommends right-sized requests/limits
# We run it in OFF mode — gives recommendations WITHOUT changing pods

kubectl apply -f https://github.com/kubernetes/autoscaler/releases/latest/download/vertical-pod-autoscaler.crds.yaml

helm install vpa fairwinds-stable/vpa \
  --namespace kube-system \
  --set updater.enabled=false \  # Don't auto-update — just recommend
  --set recommender.enabled=true \
  --set admission-controller.enabled=false

# Create VPA objects in RECOMMENDATION mode for each deployment
for DEPLOY in $(kubectl get deployments -n production \
  -o jsonpath='{.items[*].metadata.name}'); do

  kubectl apply -n production - << EOF
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: ${DEPLOY}-vpa
  namespace: production
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ${DEPLOY}
  updatePolicy:
    updateMode: "Off"   # RECOMMENDATION ONLY — don't change pods
EOF
done

# Wait 24-48 hours for VPA to gather data, then check recommendations:
kubectl get vpa -n production -o yaml | \
  python3 -c "
import yaml,sys
data = yaml.safe_load_all(sys.stdin)
for item in data:
    if not item: continue
    name = item.get('metadata',{}).get('name','unknown')
    recs = item.get('status',{}).get('recommendation',{})
    containers = recs.get('containerRecommendations',[])
    for c in containers:
        cname = c.get('containerName','?')
        target = c.get('target',{})
        lower = c.get('lowerBound',{})
        upper = c.get('upperBound',{})
        print(f'{name}/{cname}:')
        print(f'  Recommended CPU: {target.get(\"cpu\",\"?\")}')
        print(f'  Recommended Mem: {target.get(\"memory\",\"?\")}')
        print(f'  Range: {lower.get(\"cpu\",\"?\")} - {upper.get(\"cpu\",\"?\")} CPU')
        print()
"

# ════════════════════════════════════════════════
# AWS COMPUTE OPTIMIZER — EC2 rightsize recommendations
# ════════════════════════════════════════════════

# Opt in to Compute Optimizer (free service)
aws compute-optimizer update-enrollment-status \
  --status Active

# Get EC2 recommendations (run after 24-48 hours of data)
aws compute-optimizer get-ec2-instance-recommendations \
  --query 'instanceRecommendations[*].{
    Instance: instanceArn,
    Finding: finding,
    Current: currentInstanceType,
    Recommended: recommendationOptions[0].instanceType,
    SavingsPercent: recommendationOptions[0].estimatedMonthlySavings.value,
    Risk: recommendationOptions[0].performanceRisk
  }' \
  --output table

# Get EBS recommendations
aws compute-optimizer get-ebs-volume-recommendations \
  --query 'volumeRecommendationGroups[*].{
    Volume: volumeArn,
    Finding: finding,
    CurrentType: currentConfiguration.volumeType,
    CurrentGB: currentConfiguration.volumeSize,
    RecommendedType: volumeRecommendationOptions[0].configuration.volumeType,
    RecommendedGB: volumeRecommendationOptions[0].configuration.volumeSize,
    Savings: volumeRecommendationOptions[0].estimatedMonthlySavings.value
  }' \
  --output table

# ════════════════════════════════════════════════
# RIGHTSIZE IMPLEMENTATION
# ════════════════════════════════════════════════

# Based on VPA recommendations and actual usage data:
# If pod is using 50m CPU but requesting 500m → set request to 100m (2x buffer)
# If pod is using 100Mi RAM but requesting 1Gi → set request to 200Mi

# Update via Kustomize patch (goes in gitops repo)
cat << 'EOF'
# applications/api/overlays/production/resource-patch.yaml
# RIGHT-SIZED based on 14-day average metrics
# Old: cpu request 500m, limit 2000m (massive over-provision)
# New: cpu request 100m, limit 500m (based on actual usage)

apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  template:
    spec:
      containers:
      - name: api
        resources:
          requests:
            cpu: "100m"     # Was: 500m — actual avg: 45m
            memory: "128Mi" # Was: 512Mi — actual avg: 95Mi
          limits:
            cpu: "500m"     # Was: 2000m — max ever seen: 380m
            memory: "256Mi" # Was: 1Gi  — max ever seen: 190Mi
EOF

# The effect on the cluster:
# Scheduler now sees LESS requested resource
# More pods fit on the same nodes
# Cluster Autoscaler provisions FEWER nodes
# DIRECT cost reduction — fewer nodes needed


PART 5: ELIMINATE IDLE PODS
Scale to Zero for Non-Production
# ════════════════════════════════════════════════
# KEDA — Kubernetes Event-Driven Autoscaling
# Scale deployments to ZERO when not in use
# Wake them up when traffic arrives
# ════════════════════════════════════════════════

helm repo add kedacore https://kedacore.github.io/charts
helm repo update

helm install keda kedacore/keda \
  --namespace keda \
  --create-namespace

# KEDA ScaledObject: scale to 0 at night, wake on HTTP request
kubectl apply -n staging - << 'EOF'
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: api-scaledobject
  namespace: staging
spec:
  scaleTargetRef:
    name: api
  minReplicaCount: 0       # Scale ALL THE WAY to zero at night
  maxReplicaCount: 10
  cooldownPeriod: 300      # Wait 5 min before scaling down to 0
  triggers:
  # Scale based on HTTP requests
  - type: prometheus
    metadata:
      serverAddress: http://prometheus.monitoring:9090
      metricName: http_requests_total
      query: sum(rate(http_requests_total{namespace="staging"}[2m]))
      threshold: "1"       # 1 request = wake up
      # 0 requests for 5 min → scale to zero
EOF

# Schedule-based scaling (dev environments)
kubectl apply -n development - << 'EOF'
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: api-scheduled-scale
  namespace: development
spec:
  scaleTargetRef:
    name: api
  minReplicaCount: 0
  maxReplicaCount: 3
  triggers:
  # Scale UP Mon-Fri 8am-6pm UTC
  - type: cron
    metadata:
      timezone: "UTC"
      start: "0 8 * * 1-5"   # 8am weekdays
      end: "0 18 * * 1-5"    # 6pm weekdays
      desiredReplicas: "2"
  # Zero replicas outside business hours
EOF

# ════════════════════════════════════════════════
# STOP DEV/STAGING CLUSTERS OVERNIGHT
# ════════════════════════════════════════════════

# EventBridge rule to scale down dev node group at 7pm
cat << 'EOF'
# Lambda function triggered by EventBridge
# Scales EKS node group to 0 at night

import boto3

def scale_down_dev(event, context):
    eks = boto3.client('eks')
    eks.update_nodegroup_config(
        clusterName='dev-eks',
        nodegroupName='app-nodes',
        scalingConfig={
            'minSize': 0,
            'maxSize': 10,
            'desiredSize': 0   # ZERO nodes overnight
        }
    )
    print("Dev cluster scaled to 0 nodes")

def scale_up_dev(event, context):
    eks = boto3.client('eks')
    eks.update_nodegroup_config(
        clusterName='dev-eks',
        nodegroupName='app-nodes',
        scalingConfig={
            'minSize': 0,
            'maxSize': 10,
            'desiredSize': 3   # Back to 3 at 8am
        }
    )
    print("Dev cluster scaled to 3 nodes")
EOF

# In Terraform — schedule this automatically:
resource "aws_cloudwatch_event_rule" "scale_down_dev" {
  name                = "scale-down-dev-cluster"
  description         = "Scale down dev EKS at night"
  schedule_expression = "cron(0 19 ? * MON-FRI *)"  # 7pm UTC weekdays
}

resource "aws_cloudwatch_event_rule" "scale_up_dev" {
  name                = "scale-up-dev-cluster"
  description         = "Scale up dev EKS in morning"
  schedule_expression = "cron(0 8 ? * MON-FRI *)"   # 8am UTC weekdays
}

# For weekends — leave at 0 all weekend
# This saves 128 hours/week × node cost × node count

# SAVINGS CALCULATION:
# Dev cluster: 3 × t3.medium = 3 × $30.37 = $91/month
# With schedule (nights + weekends = 128 hrs off out of 168):
# Active hours: 40/week × 4.33 weeks = 173 hrs/month
# Savings: (730 - 173) / 730 = 76% of dev compute cost
# Monthly saving: $91 × 76% = $69/month just from scheduling
PART 6: ELIMINATE UNNECESSARY NAT GATEWAY COSTS
The NAT Gateway Cost Elimination Plan
NAT GATEWAY COST BREAKDOWN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FIXED COST: $0.045/hour per NAT GW
  1 NAT GW:  $32.85/month just existing
  2 NAT GWs: $65.70/month (HA setup)

VARIABLE COST: $0.045/GB processed
  100GB/month through NAT: $4.50
  1TB/month through NAT: $45.00
  10TB/month through NAT: $450.00

BIGGEST NAT TRAFFIC SOURCES:
1. S3 API calls (without VPC endpoint) → FIX: VPC Gateway Endpoint (FREE)
2. ECR image pulls (without VPC endpoint) → FIX: Interface Endpoint ($7/month)
3. DynamoDB calls → FIX: VPC Gateway Endpoint (FREE)
4. CloudWatch metrics/logs → FIX: Interface Endpoint ($7/month)
5. SSM agent → FIX: Interface Endpoint ($7/month)
6. Package downloads (yum/apt during AMI build) → FIX: Bake into AMI

VPC ENDPOINT MATH:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

S3 Gateway Endpoint: $0 (FREE)
  If 500GB/month goes to S3 through NAT:
  NAT cost: 500 × $0.045 = $22.50/month saved for $0

ECR Interface Endpoint: $14.40/month (2 endpoints needed)
  If 200GB/month of image pulls:
  NAT cost: 200 × $0.045 = $9/month
  Endpoint cost: $14.40/month
  Net: -$5.40 (endpoint costs MORE for low traffic)
  If 500GB/month: saves $22.50 - $14.40 = $8.10/month
  Break-even: ~320GB/month through ECR

DECISION RULE:
  Gateway endpoints (S3, DynamoDB): ALWAYS add — they're FREE
  Interface endpoints: add when data transfer cost > endpoint cost
Implement All VPC Endpoints
# modules/vpc/vpc-endpoints.tf
# Add ALL of these — free ones save money immediately

locals {
  gateway_endpoints = {
    s3 = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.s3"
    }
    dynamodb = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.dynamodb"
    }
  }

  # Interface endpoints — evaluate cost vs savings before enabling
  interface_endpoints = {
    ecr_api = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.ecr.api"
    }
    ecr_dkr = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.ecr.dkr"
    }
    logs = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.logs"
    }
    ssm = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.ssm"
    }
    ssmmessages = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.ssmmessages"
    }
    ec2messages = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.ec2messages"
    }
    sts = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.sts"
    }
    secretsmanager = {
      service_name = "com.amazonaws.${data.aws_region.current.name}.secretsmanager"
    }
  }
}

# FREE gateway endpoints — always create these
resource "aws_vpc_endpoint" "gateway" {
  for_each = local.gateway_endpoints

  vpc_id            = aws_vpc.main.id
  service_name      = each.value.service_name
  vpc_endpoint_type = "Gateway"
  route_table_ids   = aws_route_table.private[*].id

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-${each.key}-endpoint"
    Type = "Gateway"
    Cost = "Free"
  })
}

# Interface endpoints — add based on traffic analysis
resource "aws_security_group" "vpc_endpoints" {
  name        = "${var.cluster_name}-vpc-endpoints"
  description = "Security group for VPC interface endpoints"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
    description = "HTTPS from VPC"
  }

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-vpc-endpoints-sg"
  })
}

resource "aws_vpc_endpoint" "interface" {
  for_each = var.enable_interface_endpoints ? local.interface_endpoints : {}

  vpc_id              = aws_vpc.main.id
  service_name        = each.value.service_name
  vpc_endpoint_type   = "Interface"
  subnet_ids          = aws_subnet.private[*].id
  security_group_ids  = [aws_security_group.vpc_endpoints.id]
  private_dns_enabled = true

  tags = merge(var.tags, {
    Name = "${var.cluster_name}-${each.key}-endpoint"
    Type = "Interface"
    Cost = "$7.20/month"
  })
}

variable "enable_interface_endpoints" {
  description = "Enable interface VPC endpoints (adds ~$50/month but saves NAT costs)"
  type        = bool
  default     = true
}
Eliminate Inter-AZ Data Transfer
# ════════════════════════════════════════════════
# INTER-AZ TRANSFER ANALYSIS
# The invisible $0.02/GB per round trip
# ════════════════════════════════════════════════

# Enable VPC Flow Logs to see inter-AZ traffic
aws ec2 create-flow-logs \
  --resource-type VPC \
  --resource-ids $VPC_ID \
  --traffic-type ALL \
  --log-destination-type cloud-watch-logs \
  --log-group-name "/aws/vpc/flowlogs" \
  --deliver-logs-permission-arn $FLOW_LOGS_ROLE_ARN

# Query inter-AZ traffic (after 24 hours of logs)
aws logs start-query \
  --log-group-name "/aws/vpc/flowlogs" \
  --start-time $(date -d '24 hours ago' +%s) \
  --end-time $(date +%s) \
  --query-string '
    fields @timestamp, srcAddr, dstAddr, bytes, action
    | filter srcAddr like /^10\.0\.1\./ and dstAddr like /^10\.0\.3\./
    | stats sum(bytes) as totalBytes by srcAddr, dstAddr
    | sort totalBytes desc
    | limit 20
  '

# WHAT TO DO WITH INTER-AZ TRAFFIC:
# 1. App to Database: deploy read replica in same AZ
#    Write to primary (1 AZ), read from replica (same AZ as app)
#
# 2. Service to service: use topology-aware routing
#    Kubernetes routes to pods in SAME AZ first

# TOPOLOGY AWARE ROUTING — prefer same-AZ pods
kubectl apply -n production - << 'EOF'
apiVersion: v1
kind: Service
metadata:
  name: api-svc
  namespace: production
  annotations:
    # This tells kube-proxy to prefer pods in same AZ
    service.kubernetes.io/topology-mode: Auto
spec:
  selector:
    app: api
  ports:
  - port: 80
    targetPort: 8080
EOF

# TopologySpreadConstraints — ensure pods exist in each AZ
# (so same-AZ routing always has a pod to go to)
kubectl patch deployment api -n production --type=json -p='[{
  "op": "add",
  "path": "/spec/template/spec/topologySpreadConstraints",
  "value": [{
    "maxSkew": 1,
    "topologyKey": "topology.kubernetes.io/zone",
    "whenUnsatisfiable": "DoNotSchedule",
    "labelSelector": {
      "matchLabels": {"app": "api"}
    }
  }]
}]'

# Effect: requests from us-east-1a pods go to us-east-1a pods
# Zero inter-AZ transfer for service-to-service calls
# Saves $0.02/GB × all internal traffic




PART 7: DATA TRANSFER OPTIMIZATION
CloudFront — Eliminate Egress Costs
WITHOUT CLOUDFRONT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User in London → request → AWS us-east-1 EC2
Response: JS bundle (500KB) → travels from US to UK
Cost: $0.09/GB for data out to internet

If 1 million users download 500KB bundle daily:
1,000,000 × 500KB = 500GB/day = 15TB/month
Cost: 15,000 × $0.09 = $1,350/month

WITH CLOUDFRONT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Origin → CloudFront (FREE transfer from origin)
User in London → nearest CloudFront edge (London)
First request: CloudFront fetches from origin (once)
All subsequent: CloudFront serves from edge (cached)

CloudFront egress: $0.0085/GB (US) to $0.12/GB (South America)
Average: ~$0.02/GB (vs $0.09 direct)
PLUS: cache hit rate 80-95% = most traffic never touches origin

Effective cost: 0.02 × 0.20 (cache miss) = $0.004/GB equivalent
vs $0.09 direct = 95% savings on CDN-eligible content
# CloudFront distribution in Terraform

resource "aws_cloudfront_distribution" "app" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["app.yourdomain.com"]
  price_class         = "PriceClass_100"  # US, Canada, Europe only (cheapest)

  # Origin: your ALB
  origin {
    domain_name = var.alb_dns_name
    origin_id   = "alb-origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }

    # Pass real IP to origin
    custom_header {
      name  = "X-Forwarded-For"
      value = "CloudFront"
    }
  }

  # Default: cache static assets aggressively
  default_cache_behavior {
    target_origin_id       = "alb-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true   # Gzip/Brotli compression

    cache_policy_id            = aws_cloudfront_cache_policy.static.id
    origin_request_policy_id   = aws_cloudfront_origin_request_policy.default.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id
  }

  # API calls: don't cache, but still use CloudFront for global routing
  ordered_cache_behavior {
    path_pattern           = "/api/*"
    target_origin_id       = "alb-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    cache_policy_id = data.aws_cloudfront_cache_policy.caching_disabled.id
    origin_request_policy_id = aws_cloudfront_origin_request_policy.api.id
  }

  # Health check path: don't cache
  ordered_cache_behavior {
    path_pattern           = "/health"
    target_origin_id       = "alb-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    cache_policy_id        = data.aws_cloudfront_cache_policy.caching_disabled.id
  }

  viewer_certificate {
    acm_certificate_arn      = var.certificate_arn   # us-east-1 cert
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = var.tags
}

resource "aws_cloudfront_cache_policy" "static" {
  name        = "${var.cluster_name}-static-cache"
  min_ttl     = 0
  default_ttl = 86400    # 1 day default cache
  max_ttl     = 31536000 # 1 year maximum

  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"  # Don't include cookies in cache key
    }
    headers_config {
      header_behavior = "none"  # Don't include headers in cache key
    }
    query_strings_config {
      query_string_behavior = "whitelist"
      query_strings {
        items = ["v", "version"]  # Cache-busting version param only
      }
    }
  }
}

# S3 Static Assets — even cheaper than CloudFront + ALB
resource "aws_s3_bucket" "static_assets" {
  bucket = "${var.cluster_name}-static-assets"
  tags   = var.tags
}

resource "aws_cloudfront_origin_access_control" "s3" {
  name                              = "${var.cluster_name}-s3-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# This is the CHEAPEST possible setup for static content:
# S3 ($0.023/GB storage) + CloudFront (free origin transfer)
# = pay only for CloudFront edge egress ($0.0085/GB)
S3 Lifecycle Policies — Stop Paying for Old Data
# Lifecycle rules in Terraform

resource "aws_s3_bucket_lifecycle_configuration" "logs" {
  bucket = aws_s3_bucket.logs.id

  rule {
    id     = "transition-to-cheap-storage"
    status = "Enabled"
    filter { prefix = "logs/" }

    # After 30 days: Standard ($0.023/GB) → Standard-IA ($0.0125/GB)
    transition {
      days          = 30
      storage_class = "STANDARD_IA"
    }

    # After 90 days: Standard-IA → Glacier ($0.004/GB)
    transition {
      days          = 90
      storage_class = "GLACIER"
    }

    # After 365 days: Glacier → Glacier Deep Archive ($0.00099/GB)
    transition {
      days          = 365
      storage_class = "DEEP_ARCHIVE"
    }

    # After 7 years: DELETE (compliance often requires 7yr retention)
    expiration {
      days = 2555  # 7 years
    }
  }

  rule {
    id     = "delete-incomplete-multipart"
    status = "Enabled"
    filter {}
    abort_incomplete_multipart_upload {
      days_after_initiation = 7  # Clean up failed uploads
    }
  }

  rule {
    id     = "expire-old-versions"
    status = "Enabled"
    filter {}
    noncurrent_version_transition {
      noncurrent_days = 30
      storage_class   = "GLACIER"
    }
    noncurrent_version_expiration {
      noncurrent_days = 90
    }
  }
}

# Cost impact of lifecycle:
# 1TB of logs stored for 1 year:
# Without lifecycle: 1000GB × $0.023 × 12 = $276/year
# With lifecycle:
#   Month 1: 1000 × $0.023 = $23
#   Month 2-3: 1000 × $0.0125 = $12.50
#   Month 4-12: 1000 × $0.004 = $4
#   TOTAL: $23 + 2×$12.50 + 9×$4 = $84/year
#   SAVINGS: 70% on storage cost


PART 8: SAVINGS PLANS + RESERVED INSTANCES
Commit to What You Always Run
# ════════════════════════════════════════════════
# SAVINGS PLANS — commit to spend, not instance type
# ════════════════════════════════════════════════

# STEP 1: Analyze your baseline compute spend (last 3 months)
aws ce get-cost-and-usage \
  --time-period Start=$(date -d '90 days ago' +%Y-%m-%d),End=$(date +%Y-%m-%d) \
  --granularity MONTHLY \
  --metrics UnblendedCost \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["Amazon Elastic Compute Cloud - Compute"]}}' \
  --query 'ResultsByTime[*].{Month:TimePeriod.Start,Cost:Total.UnblendedCost.Amount}' \
  --output table

# STEP 2: Find your MINIMUM monthly compute spend
# That's your safe commitment level
# Example: lowest month was $800 → commit to $800/month

# STEP 3: Get Savings Plan recommendations
aws ce get-savings_plans_purchase_recommendation \
  --savings-plans-type COMPUTE_SP \
  --term-in-years ONE_YEAR \
  --payment-option NO_UPFRONT \
  --lookback-period-in-days SIXTY_DAYS \
  --query 'SavingsPlansPurchaseRecommendation.{
    EstimatedROI: SavingsPlansPurchaseRecommendationSummary.EstimatedROI,
    HourlyCommitment: SavingsPlansPurchaseRecommendationSummary.HourlyCommitmentToPurchase,
    MonthlySavings: SavingsPlansPurchaseRecommendationSummary.EstimatedMonthlySavingsAmount
  }'

# TYPES OF SAVINGS PLANS:
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Compute Savings Plan (BEST):
#   - Applies to any EC2 family, size, region, OS, tenancy
#   - Applies to Fargate and Lambda too
#   - Discount: up to 66% vs On-Demand
#   - MOST flexible — use this

# EC2 Instance Savings Plan:
#   - Specific instance family in specific region
#   - Larger discount (up to 72%) but LESS flexible
#   - Use ONLY if you're certain about instance family/region

# PAYMENT OPTIONS:
# No Upfront:   Pay monthly — lowest commitment, ~30% discount
# Partial Upfront: Pay some now — medium discount
# All Upfront:  Pay all now — highest discount (~40%)

# FOR EKS (Spot + Savings Plan combined):
# EKS On-Demand for system nodes (2 nodes always running):
#   → Buy Savings Plan for 2 × t3.medium baseline
# EKS Spot for app nodes (variable):
#   → No Savings Plan needed — Spot discount applies

# Savings Plan purchase in AWS Console:
# → AWS Cost Management → Savings Plans → Purchase Savings Plans
# → Type: Compute Savings Plans
# → Term: 1 Year
# → Payment: No Upfront
# → Commitment: $0.80/hour (your baseline hourly spend)

# EXPECTED RESULT:
# Without SP: $800/month on-demand
# With SP (1yr no upfront): $560/month = 30% saving
# Annual saving: $2,880/year from baseline commitment

# ════════════════════════════════════════════════
# RDS RESERVED INSTANCES
# Database is always on — commit to it
# ════════════════════════════════════════════════

aws rds describe-reserved-db-instances-offerings \
  --product-description "postgresql" \
  --db-instance-class "db.t3.medium" \
  --duration 31536000 \
  --multi-az \
  --query 'ReservedDBInstancesOfferings[*].{
    OfferingID:ReservedDBInstancesOfferingId,
    Usage:ProductDescription,
    FixedPrice:FixedPrice,
    UsagePrice:UsagePrice,
    MultiAZ:MultiAZ
  }' \
  --output table

# Purchase RDS Reserved Instance:
aws rds purchase-reserved-db-instances-offering \
  --reserved-db-instances-offering-id <OFFERING-ID> \
  --reserved-db-instance-id "prod-postgres-reserved" \
  --db-instance-count 1

# RDS savings:
# db.t3.medium Multi-AZ On-Demand: $0.136/hr = $99.28/month
# db.t3.medium Multi-AZ 1yr RI:    $0.082/hr = $59.86/month
# Savings: 40% = $39.42/month = $473/year
PART 9: THE COMPLETE BEFORE vs AFTER REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COST DOMINATION REPORT
Infrastructure: Production EKS + RDS + S3 + CloudFront
Period: Monthly Baseline
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: BEFORE STATE — The Unoptimized Bill
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPUTE (EKS Node Groups):
  System nodes:  2 × m5.large On-Demand  = $140.16/month
  App nodes:     6 × m5.large On-Demand  = $420.48/month
  Dev cluster:   3 × t3.medium On-Demand = $91.11/month
  Bastion host:  1 × t3.micro On-Demand  = $ 7.59/month
  TOTAL COMPUTE:                           $659.34/month

DATABASE:
  RDS db.t3.medium Multi-AZ On-Demand    = $ 99.28/month
  RDS storage: 100GB gp2                 = $ 23.00/month
  RDS backups: 100GB                     = $  9.50/month
  TOTAL DATABASE:                         $131.78/month

NETWORKING:
  NAT Gateway × 2 (hourly):             = $ 65.70/month
  NAT Gateway data processing (1TB):     = $ 45.00/month
  Data transfer out (500GB):             = $ 45.00/month
  Inter-AZ transfer (200GB):             = $  4.00/month
  TOTAL NETWORKING:                       $159.70/month

STORAGE:
  EBS volumes: 500GB gp2 attached        = $ 50.00/month
  EBS volumes: 200GB unattached (waste)  = $ 20.00/month
  EBS snapshots: 150GB old              = $ 14.25/month
  S3 logs: 2TB Standard class           = $ 46.00/month
  TOTAL STORAGE:                          $130.25/month

LOAD BALANCING:
  ALB: fixed + LCU charges              = $ 25.00/month

MONITORING:
  CloudWatch metrics/logs               = $ 15.00/month

──────────────────────────────────────────────────────
TOTAL BEFORE:                             $1,121.07/month
ANNUAL BEFORE:                            $13,452.84/year
──────────────────────────────────────────────────────

SECTION 2: OPTIMIZATIONS APPLIED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPT 1: Spot Instances for App Nodes
  BEFORE: 6 × m5.large On-Demand = $420.48
  AFTER:  6 × mixed Spot (avg)   = $126.14
  SAVING: $294.34/month          = -70%
  RISK:   Low — stateless pods, NTH installed, 6 instance types
  TIME:   2 hours to implement

OPT 2: Graviton Migration (system nodes + app nodes)
  BEFORE: m5.large = $0.096/hr
  AFTER:  m6g.large = $0.077/hr (Spot: avg $0.022/hr)
  System nodes: 2×m6g.medium = $56.21 (was $140.16)
  SAVING: $83.95/month          = -60% on system nodes
  RISK:   Low — multi-arch images built, tested on ARM
  TIME:   4 hours (image rebuild + node migration)

OPT 3: Dev Cluster Scheduled Scaling
  BEFORE: 3 × t3.medium 24/7   = $91.11
  AFTER:  3 × t3.medium 40hrs/wk = $21.00 (scaled to 0 nights/weekends)
  SAVING: $70.11/month          = -77%
  RISK:   None — dev only, no SLA
  TIME:   1 hour

OPT 4: RDS Reserved Instance (1yr no upfront)
  BEFORE: db.t3.medium On-Demand Multi-AZ = $99.28
  AFTER:  db.t3.medium 1yr RI            = $59.86
  SAVING: $39.42/month                   = -40%
  RISK:   None — database always running
  TIME:   10 minutes (purchase in console)

OPT 5: RDS gp2 → gp3 + rightsize storage
  BEFORE: 100GB gp2 = $23.00
  AFTER:  80GB gp3  = $12.40 (rightsize + cheaper type)
  SAVING: $10.60/month                   = -46%
  RISK:   None — live migration
  TIME:   30 minutes

OPT 6: VPC Endpoints for S3 + DynamoDB (FREE)
  BEFORE: 500GB S3 traffic through NAT = $22.50 NAT processing
  AFTER:  500GB S3 via VPC endpoint    = $0.00
  SAVING: $22.50/month                 = -100% on S3 NAT traffic
  RISK:   None
  TIME:   30 minutes (terraform apply)

OPT 7: NAT Gateway reduction (2→1 NAT GW)
  BEFORE: 2 NAT GWs = $65.70/month fixed
  AFTER:  1 NAT GW  = $32.85/month fixed
  SAVING: $32.85/month                 = -50%
  RISK:   LOW — single NAT GW = single point of failure for outbound
          Acceptable: if NAT GW fails, pods can't reach internet
          but pods keep running (ingress not affected)
          Auto-heals in minutes when NAT GW recovers
  TIME:   45 minutes (with node group subnet migration)

OPT 8: CloudFront for static assets
  BEFORE: 500GB direct EC2 egress = $45.00
  AFTER:  500GB via CloudFront    = $8.50 (cache hit rate 85%)
  SAVING: $36.50/month            = -81%
  RISK:   None
  TIME:   2 hours

OPT 9: Delete unattached EBS volumes
  BEFORE: 200GB unattached = $20.00 (pure waste)
  AFTER:  $0.00
  SAVING: $20.00/month            = -100%
  RISK:   None (verified unattached, snapshotted before delete)
  TIME:   1 hour

OPT 10: S3 Lifecycle Policies
  BEFORE: 2TB Standard = $46.00
  AFTER:  2TB mixed tiers:
           200GB Standard (last 30 days): $4.60
           600GB Standard-IA (30-90 days): $7.50
           1.2TB Glacier (90+ days): $4.80
           = $16.90/month
  SAVING: $29.10/month            = -63%
  RISK:   None — retrieval cost for Glacier (rare)
  TIME:   1 hour

OPT 11: gp2 → gp3 EBS volumes (all)
  BEFORE: 500GB gp2 = $50.00
  AFTER:  500GB gp3 = $40.00
  SAVING: $10.00/month            = -20%
  RISK:   None — live migration, no downtime
  TIME:   30 minutes

OPT 12: Compute Savings Plan (system nodes baseline)
  Commit to $0.05/hr ($36.50/month) in Compute SP
  Applied to 2 system nodes (always running)
  SAVING: ~$10.95/month on baseline = -30%
  RISK:   None — 1yr commitment on nodes we always run
  TIME:   10 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: AFTER STATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPUTE (EKS Node Groups):
  System nodes: 2 × m6g.medium Graviton On-Demand + SP = $ 45.26
  App nodes:    6 × mixed Graviton Spot                = $ 95.00
  Dev cluster:  3 × t3.medium Spot (scheduled)         = $ 21.00
  Bastion:      t3.nano (downsized) or use SSM          = $  2.34
  TOTAL COMPUTE:                                         $163.60/month

DATABASE:
  RDS db.t3.medium Multi-AZ Reserved (1yr)             = $ 59.86
  RDS storage: 80GB gp3                                = $ 12.40
  RDS backups: 80GB (reduced from 7→7 days)            = $  7.60
  TOTAL DATABASE:                                        $ 79.86/month

NETWORKING:
  NAT Gateway × 1 (single AZ)                          = $ 32.85
  NAT Gateway data processing (reduced to 200GB)        = $  9.00
  Data transfer out via CloudFront (reduced)            = $  8.50
  Inter-AZ transfer (reduced via topology routing)      = $  1.50
  VPC Endpoints (S3/DynamoDB free, interfaces $50/mo)  = $ 50.00
  TOTAL NETWORKING:                                      $101.85/month

STORAGE:
  EBS volumes: 500GB gp3 attached                      = $ 40.00
  EBS unattached: DELETED                              = $  0.00
  EBS snapshots: 90 days cleanup policy                = $  4.75
  S3 logs: 2TB tiered                                  = $ 16.90
  TOTAL STORAGE:                                         $ 61.65/month

LOAD BALANCING:
  ALB (same)                                           = $ 25.00

MONITORING:
  CloudWatch (same)                                    = $ 15.00

──────────────────────────────────────────────────────
TOTAL AFTER:                             $446.96/month
ANNUAL AFTER:                            $5,363.52/year

TOTAL MONTHLY SAVING:   $674.11  (-60.1%)
TOTAL ANNUAL SAVING:    $8,089.32
──────────────────────────────────────────────────────

SECTION 4: SAVINGS BREAKDOWN BY CATEGORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Category          Before      After       Saving    %
──────────────────────────────────────────────────────
Compute           $659.34     $163.60     $495.74   -75%
Database          $131.78     $79.86      $51.92    -39%
Networking        $159.70     $101.85     $57.85    -36%
Storage           $130.25     $61.65      $68.60    -53%
LB + Monitoring   $40.00      $40.00      $0.00     0%
──────────────────────────────────────────────────────
TOTAL             $1,121.07   $446.96     $674.11   -60.1%

SECTION 5: RISK ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HIGH SAVINGS, LOW RISK:
  Spot Instances      → NTH handles interruptions gracefully
                        6 instance types × 2 AZs = 12 pools
                        Stateless pods reschedule in 60s
                        Zero user impact measured in testing

  Graviton Migration  → Multi-arch images tested in staging
                        Performance EQUAL or BETTER
                        Easy rollback: kubectl cordon Graviton nodes

  Dev Scheduling      → Dev only, no production SLA
                        Engineers don't need it at 2am

  VPC Endpoints       → Free gateway endpoints, no risk
                        Interface endpoints: standard AWS service

  S3 Lifecycle        → Retrieval cost from Glacier is rare
                        Set lifecycle only on logs not app data

MEDIUM SAVINGS, MEDIUM RISK:
  Single NAT GW       → Single point of failure for OUTBOUND
                        Ingress (ALB → pods) is unaffected
                        If NAT GW fails: pods can't reach external APIs
                        MITIGATION: CloudWatch alarm on NAT GW health
                        MITIGATION: Interface endpoints for critical AWS services
                        MITIGATION: Application retry logic for transient failures
                        RECOMMENDATION: Accept for cost-sensitive environments
                                        Keep 2 NAT GWs for critical-path applications

  RDS Reserved        → 1-year commitment
                        If instance type changes: can modify via RI modification
                        If cluster is retired: RI can be sold on AWS Marketplace

LOW SAVINGS, NO RISK (but do it anyway):
  gp2 → gp3          → Online migration, no downtime
  Delete unattached   → Snapshot before delete, done
  Old snapshots       → Verify policy, then clean up

SECTION 6: IMPLEMENTATION PRIORITY ORDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEEK 1 — Quick Wins (no risk, $130+/month):
  Day 1:  Add S3 + DynamoDB VPC endpoints (FREE, $22.50 saving)
  Day 1:  gp2 → gp3 EBS volumes ($10/month saving)
  Day 2:  Delete unattached EBS ($20/month saving)
  Day 2:  S3 lifecycle policies ($29/month saving)
  Day 3:  Dev cluster scheduling ($70/month saving)

WEEK 2 — Medium effort, high return ($400+/month):
  Day 6:  Build multi-arch Docker images (CI change)
  Day 7:  Add Graviton + Spot node groups (Terraform apply)
  Day 8:  Migrate app workloads to Graviton Spot (rolling)
  Day 9:  Migrate system nodes to Graviton On-Demand
  Day 10: Verify 14 days, measure Spot interruption rate

WEEK 3 — Commitments and optimization ($90+/month):
  Day 15: Purchase RDS Reserved Instance
  Day 15: Purchase Compute Savings Plan
  Day 16: Deploy CloudFront for static assets
  Day 17: Enable topology-aware routing
  Day 18: Reduce NAT GWs from 2 to 1 (careful change)

TOTAL IMPLEMENTATION TIME: 3 weeks
SAVINGS AFTER WEEK 1: $151/month
SAVINGS AFTER WEEK 2: $547/month
SAVINGS AFTER WEEK 3: $674/month

SECTION 7: ONGOING COST GOVERNANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEEKLY:
  □ Review AWS Cost Explorer for anomalies
  □ Check Spot interruption rate (target < 5%/week)
  □ Review CloudWatch alarm: cost anomaly > $50/day
  □ Check Compute Optimizer for new recommendations

MONTHLY:
  □ Review top 10 cost drivers
  □ Check VPA recommendations → update pod requests if changed
  □ Review unused resources (idle EC2, unattached EBS)
  □ Review data transfer costs for unexpected spikes

QUARTERLY:
  □ Review Savings Plan coverage and renew if needed
  □ Review RDS Reserved Instance (is size still right?)
  □ Benchmark Graviton vs new x86 generation
  □ Review NAT GW → VPC endpoint trade-off

AUTOMATED ALERTS:
  aws budgets create-budget (alert at 80% of monthly budget)
  AWS Cost Anomaly Detection (ML-based spike detection)
  CloudWatch metric: EstimatedCharges > threshold → SNS → Slack

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL RESULT: $1,121/month → $447/month
REDUCTION: 60.1% ($674/month, $8,089/year)
TARGET MET: ✅ (goal was 40-60%)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR COMPLETE CHECKLIST
CONCEPTS — explain without notes:
□ Explain why Spot is safe for stateless workloads
□ Explain what the 2-minute Spot warning means and how NTH handles it
□ Explain why Graviton is cheaper AND faster
□ Explain what a multi-arch Docker image is
□ Explain the difference between Compute SP and EC2 Instance SP
□ Explain NAT Gateway fixed vs variable cost
□ Explain why VPC Gateway endpoints are free but Interface aren't
□ Explain what inter-AZ data transfer costs and how to eliminate it
□ Explain the VPA and why it's in recommendation-only mode
□ Explain CloudFront cache hit rate and how it reduces egress

LABS — done with your own hands:
□ AWS Cost Explorer queried: top 5 cost drivers identified
□ All running EC2 instances listed with 14-day avg CPU
□ All pods checked: requests vs actual usage compared
□ Unattached EBS volumes found and quantified
□ NAT GW monthly data processing queried from CloudWatch
□ Spot node group added to EKS cluster
□ NTH DaemonSet running on all nodes
□ Multi-arch Docker image built for linux/amd64 + linux/arm64
□ Graviton node group added to cluster
□ One pod migrated to Graviton — verified on arm64 node
□ Dev cluster scaling schedule configured (KEDA or EventBridge)
□ S3 VPC Gateway endpoint created (FREE)
□ gp2 EBS volumes converted to gp3
□ Unattached EBS volumes deleted (after snapshot)
□ S3 lifecycle policy applied to log buckets
□ CloudFront distribution created for static assets
□ Before vs After cost calculated with real numbers
□ AWS Cost Anomaly Detection configured

PRODUCTION HABITS:
□ NEVER run x86 On-Demand for stateless workloads (use Spot Graviton)
□ ALWAYS set resource requests based on actual usage (VPA data)
□ ALWAYS tag resources — untagged = untracked = overspending
□ ALWAYS add S3/DynamoDB Gateway endpoints on new VPCs (FREE)
□ REVIEW Cost Explorer every Monday morning (15 min ritual)
□ ALERT on daily spend > threshold (catch runaway instances fast)
□ NEVER launch dev/test resources that run 24/7 (schedule them)
□ SNAPSHOT before deleting any EBS volume
□ MEASURE spot interruption rate — < 5%/week is healthy
□ COMMIT to Savings Plans only for truly baseline workloads
Eleven modules deep. Your platform now builds itself, secures itself, deploys itself, heals itself, scales itself, and costs 60% less than when you started.
The spot instances from this module run on the EKS cluster you built in Module 8. The Graviton nodes run the containers your CI pipeline from Module 11 built as multi-arch images. The VPC endpoints from this module eliminate NAT Gateway costs on the networking you built in Module 2. The Savings Plans commit to the baseline that your autoscaling from Module 9 always maintains. The S3 lifecycle policies manage the data your applications from Module 4 generate.
Cost optimization is not an afterthought. It is what separates engineers who understand their systems from engineers who just use them.
Every technique in this module is a permanent discipline. The audit you just learned to run — run it every month. The VPA recommendations — check them quarterly. The lifecycle policies — set them on every new bucket from day one.
The engineer who cuts a $50,000 AWS bill to $20,000 without breaking production is worth more than three engineers who only know how to spend it.
Go run the audit. Find the waste. Cut it. Document the before and after. Come back with real numbers.























Observability + Chaos Engineering 🔭💥
Your Senior DevSecOps Mentor Speaking
You've built the platform. You've secured it. You've automated it. You've optimized it.
Now comes the most important skill of all — knowing when it's broken before your users do, and proving you can fix it fast.
Every company claims their system is reliable. The ones who actually know are the ones who measure it obsessively, break it on purpose to practice recovery, and document every failure so it never happens twice.
This module turns you from someone who hopes the system works into someone who proves the system works. That proof is called observability. The practice of improving it is called chaos engineering.
Combined they answer the hardest question in production: "How confident are you that your system will be up next Tuesday at 2pm?"
After this module, you will have an answer with numbers.
THE MASTER MENTAL MODEL FIRST
THE THREE PILLARS OF OBSERVABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

METRICS = Numbers over time
"My API served 10,000 requests in the last minute"
"CPU is at 67%"
"P99 latency is 340ms"
→ Tell you WHAT is happening
→ Tool: Prometheus + Grafana

LOGS = Events with context
"2024-01-01 12:00:01 ERROR: database connection failed: timeout"
→ Tell you WHAT HAPPENED at a specific moment
→ Tool: Loki + Grafana, or CloudWatch Logs

TRACES = Request journeys
"This request went: API → Auth Service → DB → Cache → Response"
"It took 340ms. The DB call took 310ms. That's the bottleneck."
→ Tell you WHERE the problem is in a distributed system
→ Tool: Jaeger, Tempo + Grafana

THE RELATIONSHIP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Alert fires → You look at METRICS (what's broken?)
Metrics show API errors spiking → You look at LOGS (why?)
Logs show DB timeouts → You look at TRACES (which call?)
Traces show one slow query → You fix the query

Without observability:
User: "Your site is down"
You: "Uh... let me check things..."
[30 minutes of blind searching]

With observability:
Alert fires: "Error rate > 1% for 5 minutes"
You open Grafana: error rate spiked at 14:32
You check logs: DB connection pool exhausted
You check traces: /api/users endpoint, query taking 45s
You fix: bad query + add index
Time to fix: 8 minutes

THE GOLDEN SIGNALS — The Four Numbers That Matter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Google SRE invented this. Every production system needs exactly
four measurements. If you only measure four things, measure these.

1. LATENCY    → How long do requests take?
   "Good requests should complete in < 200ms"
   Measure: P50, P95, P99 (not average — average lies)

2. TRAFFIC    → How many requests per second?
   "We serve 10,000 RPS at peak"
   Measure: requests/second by endpoint and status

3. ERRORS     → What fraction of requests fail?
   "Less than 0.1% of requests return 5xx"
   Measure: error rate = errors / total requests

4. SATURATION → How full is your system?
   "CPU at 80% = getting close to limit"
   Measure: CPU%, memory%, queue depth, connection pool

WHY THESE FOUR:
If latency is high → users are frustrated
If traffic is zero → something is broken upstream
If errors are high → users are getting failures
If saturation is high → system about to fall over
PART 1: PROMETHEUS — The Data Collector
How Prometheus Works Internally
PROMETHEUS ARCHITECTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every 15 seconds, Prometheus does this:

1. DISCOVER targets (via Kubernetes service discovery)
   "Who should I scrape? Find all pods with prometheus.io/scrape=true"

2. SCRAPE each target
   HTTP GET http://pod-ip:9090/metrics
   Receives text like:
   http_requests_total{method="GET",status="200"} 1847
   http_requests_total{method="GET",status="500"} 3
   http_request_duration_seconds{le="0.1"} 1200
   http_request_duration_seconds{le="0.5"} 1800

3. STORE in time-series database (TSDB)
   Each sample: metric_name{labels} value timestamp
   Compressed, efficient, fast to query

4. EVALUATE rules every 15 seconds
   "Is error_rate > 1%? → fire alert to AlertManager"

THE METRIC TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COUNTER — always goes up, never down
  http_requests_total = 1,847,293
  "Total requests since the app started"
  Use rate() to see requests per second from a counter:
  rate(http_requests_total[5m]) = 234 requests/second

GAUGE — can go up or down
  memory_used_bytes = 234567890
  cpu_utilization = 0.67
  "Current value right now"

HISTOGRAM — distribution of values in buckets
  http_request_duration_seconds_bucket{le="0.1"} 1200
  http_request_duration_seconds_bucket{le="0.5"} 1800
  http_request_duration_seconds_bucket{le="+Inf"} 2000
  "How many requests completed within each time threshold"
  Use histogram_quantile() to get P99:
  histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))

SUMMARY — pre-computed quantiles (rarely used, prefer histogram)

THE RULE: Use histogram_quantile for latency, rate() for counters.
PromQL — The Query Language
# ════════════════════════════════════════════════
# THE PROMQL PATTERNS YOU WILL USE EVERY DAY
# Learn these cold — they answer 90% of questions
# ════════════════════════════════════════════════

# ── TRAFFIC ──
# Requests per second (RPS) for all endpoints
sum(rate(http_requests_total[5m]))

# RPS by endpoint and status code
sum by (path, status) (
  rate(http_requests_total[5m])
)

# ── ERRORS ──
# Error rate (% of requests that are 5xx)
sum(rate(http_requests_total{status=~"5.."}[5m]))
/
sum(rate(http_requests_total[5m]))

# Error rate as percentage
100 * (
  sum(rate(http_requests_total{status=~"5.."}[5m]))
  /
  sum(rate(http_requests_total[5m]))
)

# ── LATENCY ──
# P50, P95, P99 latency (the REAL latency — not average)
histogram_quantile(0.50,
  sum by (le) (rate(http_request_duration_seconds_bucket[5m]))
)

histogram_quantile(0.95,
  sum by (le) (rate(http_request_duration_seconds_bucket[5m]))
)

histogram_quantile(0.99,
  sum by (le) (rate(http_request_duration_seconds_bucket[5m]))
)

# Latency by endpoint
histogram_quantile(0.99,
  sum by (le, path) (rate(http_request_duration_seconds_bucket[5m]))
)

# ── SATURATION ──
# CPU utilization per pod
sum by (pod) (
  rate(container_cpu_usage_seconds_total{
    namespace="production",
    container!=""
  }[5m])
)

# Memory utilization vs limit
container_memory_working_set_bytes{namespace="production"}
/
container_spec_memory_limit_bytes{namespace="production"}

# CPU throttling (the silent killer)
sum by (pod, container) (
  rate(container_cpu_cfs_throttled_seconds_total{
    namespace="production"
  }[5m])
)
/
sum by (pod, container) (
  rate(container_cpu_cfs_periods_total{
    namespace="production"
  }[5m])
)

# ── KUBERNETES HEALTH ──
# Pods not in Running state
kube_pod_status_phase{
  namespace="production",
  phase!~"Running|Succeeded"
}

# Deployment replica mismatch
kube_deployment_spec_replicas{namespace="production"}
!=
kube_deployment_status_replicas_available{namespace="production"}

# Container restart rate (CrashLoopBackOff indicator)
sum by (pod, container) (
  rate(kube_pod_container_status_restarts_total{
    namespace="production"
  }[15m])
) * 60 * 15

# Node memory available %
node_memory_MemAvailable_bytes
/ node_memory_MemTotal_bytes
* 100

# ── SLO TRACKING ──
# Availability over last 30 days
(
  1 - (
    sum(rate(http_requests_total{status=~"5.."}[30d]))
    /
    sum(rate(http_requests_total[30d]))
  )
) * 100

# Error budget remaining (if SLO = 99.9%)
# Error budget = 0.1% of requests = 43.8 minutes/month
(
  (1 - 0.999) - (
    sum(rate(http_requests_total{status=~"5.."}[30d]))
    /
    sum(rate(http_requests_total[30d]))
  )
)
/
(1 - 0.999)
* 100
# Positive = budget remaining, Negative = SLO breached


PART 2: GRAFANA — The Dashboard
The Golden Signals Dashboard
# ════════════════════════════════════════════════
# INSTALL kube-prometheus-stack
# (includes Prometheus, Grafana, AlertManager,
#  kube-state-metrics, node-exporter)
# ════════════════════════════════════════════════

helm repo add prometheus-community \
  https://prometheus-community.github.io/helm-charts
helm repo update

kubectl create namespace monitoring

helm install kube-prometheus-stack \
  prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --version 56.0.0 \
  --set prometheus.prometheusSpec.retention=30d \
  --set prometheus.prometheusSpec.retentionSize="40GB" \
  --set prometheus.prometheusSpec.replicas=2 \
  --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.storageClassName=gp3 \
  --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.resources.requests.storage=50Gi \
  --set prometheus.prometheusSpec.resources.requests.cpu=500m \
  --set prometheus.prometheusSpec.resources.requests.memory=2Gi \
  --set prometheus.prometheusSpec.resources.limits.cpu=2 \
  --set prometheus.prometheusSpec.resources.limits.memory=4Gi \
  --set grafana.adminPassword=change-me-in-production \
  --set grafana.persistence.enabled=true \
  --set grafana.persistence.size=10Gi \
  --set grafana.sidecar.dashboards.enabled=true \
  --set grafana.sidecar.dashboards.label=grafana_dashboard \
  --set alertmanager.alertmanagerSpec.storage.volumeClaimTemplate.spec.resources.requests.storage=10Gi

# Verify everything is running
kubectl get pods -n monitoring
kubectl get pvc -n monitoring

# Access Grafana locally
kubectl port-forward -n monitoring svc/kube-prometheus-stack-grafana 3000:80 &

# Default login: admin / change-me-in-production
The Golden Signals Dashboard — Build It as Code
# Deploy this ConfigMap to add dashboard to Grafana automatically
# ArgoCD will sync it, Grafana sidecar will load it

apiVersion: v1
kind: ConfigMap
metadata:
  name: golden-signals-dashboard
  namespace: monitoring
  labels:
    grafana_dashboard: "1"   # This label makes Grafana load it automatically
data:
  golden-signals.json: |
    {
      "title": "Golden Signals — Production",
      "uid": "golden-signals-prod",
      "tags": ["golden-signals", "production", "slo"],
      "timezone": "UTC",
      "refresh": "30s",
      "time": {"from": "now-1h", "to": "now"},
      "panels": [
        {
          "id": 1,
          "title": "🚦 ERROR RATE — % of requests failing",
          "type": "timeseries",
          "description": "SLO target: < 0.1%. Alert at > 1%.",
          "gridPos": {"x": 0, "y": 0, "w": 12, "h": 8},
          "fieldConfig": {
            "defaults": {
              "unit": "percent",
              "thresholds": {
                "steps": [
                  {"color": "green", "value": 0},
                  {"color": "yellow", "value": 0.1},
                  {"color": "red", "value": 1}
                ]
              }
            }
          },
          "targets": [{
            "expr": "100 * sum(rate(http_requests_total{namespace='production',status=~'5..'}[5m])) / sum(rate(http_requests_total{namespace='production'}[5m]))",
            "legendFormat": "Error Rate %"
          }]
        },
        {
          "id": 2,
          "title": "⚡ LATENCY — P99 response time",
          "type": "timeseries",
          "description": "SLO target: P99 < 500ms. Alert at P99 > 1s.",
          "gridPos": {"x": 12, "y": 0, "w": 12, "h": 8},
          "fieldConfig": {
            "defaults": {
              "unit": "s",
              "thresholds": {
                "steps": [
                  {"color": "green", "value": 0},
                  {"color": "yellow", "value": 0.5},
                  {"color": "red", "value": 1}
                ]
              }
            }
          },
          "targets": [
            {
              "expr": "histogram_quantile(0.99, sum by (le) (rate(http_request_duration_seconds_bucket{namespace='production'}[5m])))",
              "legendFormat": "P99"
            },
            {
              "expr": "histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket{namespace='production'}[5m])))",
              "legendFormat": "P95"
            },
            {
              "expr": "histogram_quantile(0.50, sum by (le) (rate(http_request_duration_seconds_bucket{namespace='production'}[5m])))",
              "legendFormat": "P50"
            }
          ]
        },
        {
          "id": 3,
          "title": "📈 TRAFFIC — Requests per second",
          "type": "timeseries",
          "description": "Total RPS split by success/error",
          "gridPos": {"x": 0, "y": 8, "w": 12, "h": 8},
          "fieldConfig": {"defaults": {"unit": "reqps"}},
          "targets": [
            {
              "expr": "sum(rate(http_requests_total{namespace='production',status!~'5..'}[5m]))",
              "legendFormat": "Success RPS"
            },
            {
              "expr": "sum(rate(http_requests_total{namespace='production',status=~'5..'}[5m]))",
              "legendFormat": "Error RPS"
            }
          ]
        },
        {
          "id": 4,
          "title": "🌡️ SATURATION — CPU + Memory pressure",
          "type": "timeseries",
          "description": "Alert when CPU > 80% or Memory > 85%",
          "gridPos": {"x": 12, "y": 8, "w": 12, "h": 8},
          "fieldConfig": {"defaults": {"unit": "percent", "max": 100}},
          "targets": [
            {
              "expr": "100 * sum(rate(container_cpu_usage_seconds_total{namespace='production',container!=''}[5m])) / sum(kube_pod_container_resource_limits{namespace='production',resource='cpu'})",
              "legendFormat": "CPU %"
            },
            {
              "expr": "100 * sum(container_memory_working_set_bytes{namespace='production',container!=''}) / sum(kube_pod_container_resource_limits{namespace='production',resource='memory'})",
              "legendFormat": "Memory %"
            }
          ]
        },
        {
          "id": 5,
          "title": "🎯 SLO — 30-day Availability",
          "type": "stat",
          "description": "Target: 99.9% (43.8 min downtime budget)",
          "gridPos": {"x": 0, "y": 16, "w": 6, "h": 4},
          "fieldConfig": {
            "defaults": {
              "unit": "percent",
              "thresholds": {
                "steps": [
                  {"color": "red", "value": 0},
                  {"color": "yellow", "value": 99.5},
                  {"color": "green", "value": 99.9}
                ]
              }
            }
          },
          "targets": [{
            "expr": "100 * (1 - sum(rate(http_requests_total{namespace='production',status=~'5..'}[30d])) / sum(rate(http_requests_total{namespace='production'}[30d])))",
            "legendFormat": "30d Availability"
          }]
        },
        {
          "id": 6,
          "title": "💰 ERROR BUDGET — Remaining this month",
          "type": "stat",
          "description": "100% = full budget. 0% = SLO breached.",
          "gridPos": {"x": 6, "y": 16, "w": 6, "h": 4},
          "fieldConfig": {
            "defaults": {
              "unit": "percent",
              "thresholds": {
                "steps": [
                  {"color": "red", "value": 0},
                  {"color": "yellow", "value": 25},
                  {"color": "green", "value": 50}
                ]
              }
            }
          },
          "targets": [{
            "expr": "100 * ((1 - 0.999) - (sum(rate(http_requests_total{namespace='production',status=~'5..'}[30d])) / sum(rate(http_requests_total{namespace='production'}[30d])))) / (1 - 0.999)",
            "legendFormat": "Budget Remaining"
          }]
        },
        {
          "id": 7,
          "title": "🔄 POD RESTARTS — Last 15 minutes",
          "type": "stat",
          "description": "Alert if any pod restarts > 3 times",
          "gridPos": {"x": 12, "y": 16, "w": 6, "h": 4},
          "fieldConfig": {
            "defaults": {
              "thresholds": {
                "steps": [
                  {"color": "green", "value": 0},
                  {"color": "yellow", "value": 1},
                  {"color": "red", "value": 3}
                ]
              }
            }
          },
          "targets": [{
            "expr": "sum(increase(kube_pod_container_status_restarts_total{namespace='production'}[15m]))",
            "legendFormat": "Restarts"
          }]
        },
        {
          "id": 8,
          "title": "📦 DEPLOYMENT STATUS",
          "type": "stat",
          "description": "Deployments with fewer replicas than desired",
          "gridPos": {"x": 18, "y": 16, "w": 6, "h": 4},
          "fieldConfig": {
            "defaults": {
              "thresholds": {
                "steps": [
                  {"color": "green", "value": 0},
                  {"color": "red", "value": 1}
                ]
              }
            }
          },
          "targets": [{
            "expr": "sum(kube_deployment_spec_replicas{namespace='production'} != kube_deployment_status_replicas_available{namespace='production'})",
            "legendFormat": "Degraded Deployments"
          }]
        }
      ]
    }
PART 3: SLO DEFINITIONS — The Contract With Your Users
Mental Model — SLI, SLO, SLA, Error Budget
FOUR CONCEPTS — understand ALL of them:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SLI (Service Level Indicator) = The measurement
"What we actually measure"
Example: "The fraction of HTTP requests that return 2xx"
         "P99 latency of POST /api/checkout"

SLO (Service Level Objective) = The target
"What we commit to internally"
Example: "99.9% of requests will return 2xx"
         "P99 latency < 500ms, 99.5% of the time"

SLA (Service Level Agreement) = The legal contract
"What we promise customers, with penalties if broken"
Example: "99.5% uptime or we give you service credits"
Note: SLO should be stricter than SLA
      SLO = 99.9% means you have buffer before violating SLA (99.5%)

ERROR BUDGET = The allowed failure amount
"How much can go wrong before we breach the SLO?"
Calculation: 100% - SLO = error budget percentage
             99.9% SLO = 0.1% error budget
             0.1% of 30 days = 43.8 minutes of downtime allowed

ERROR BUDGET USE:
  Full budget available → engineers can take risks, ship fast
  50% budget consumed → caution, review risky changes
  10% budget remaining → freeze non-critical deployments
  0% budget → SLO breached → incident response, no new features

THE PHILOSOPHY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reliability has a cost. Perfect reliability = infinite cost.
The error budget is the agreement between:
  Product: "Ship features fast"
  Platform: "Keep things stable"

When budget is full: "Ship it. We have room to fail."
When budget is empty: "Freeze features. Fix reliability."

This turns reliability from a conversation about feelings
into a conversation about NUMBERS.
That is the entire point.
Define Your SLOs in Code
# Apply to Kubernetes cluster via ArgoCD
# prometheus-rules/slo-definitions.yaml

apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: slo-definitions
  namespace: monitoring
  labels:
    release: kube-prometheus-stack

spec:
  groups:

  # ════════════════════════════════════════════════
  # SLO 1: AVAILABILITY
  # 99.9% of requests return non-5xx
  # Error budget: 43.8 minutes/month
  # ════════════════════════════════════════════════
  - name: slo.availability
    interval: 30s
    rules:

    # Current error rate (5min window)
    - record: slo:error_rate:5m
      expr: |
        sum(rate(http_requests_total{
          namespace="production",
          status=~"5.."
        }[5m]))
        /
        sum(rate(http_requests_total{
          namespace="production"
        }[5m]))

    # 1-hour error rate
    - record: slo:error_rate:1h
      expr: |
        sum(rate(http_requests_total{
          namespace="production",
          status=~"5.."
        }[1h]))
        /
        sum(rate(http_requests_total{
          namespace="production"
        }[1h]))

    # 24-hour error rate
    - record: slo:error_rate:24h
      expr: |
        sum(rate(http_requests_total{
          namespace="production",
          status=~"5.."
        }[24h]))
        /
        sum(rate(http_requests_total{
          namespace="production"
        }[24h]))

    # 30-day availability (for SLO tracking)
    - record: slo:availability:30d
      expr: |
        1 - (
          sum(rate(http_requests_total{
            namespace="production",
            status=~"5.."
          }[30d]))
          /
          sum(rate(http_requests_total{
            namespace="production"
          }[30d]))
        )

    # Error budget remaining (SLO = 99.9%)
    - record: slo:error_budget_remaining:30d
      expr: |
        (
          (1 - 0.999) - (
            sum(rate(http_requests_total{
              namespace="production",
              status=~"5.."
            }[30d]))
            /
            sum(rate(http_requests_total{
              namespace="production"
            }[30d]))
          )
        )
        /
        (1 - 0.999)

    # ALERT: Fast burn rate (using budget too fast)
    # If error rate is 14x the SLO threshold
    # You'll exhaust the hourly budget in 1 hour
    - alert: SLOErrorBudgetFastBurn
      expr: |
        (
          slo:error_rate:5m > (14 * 0.001)
          and
          slo:error_rate:1h > (14 * 0.001)
        )
      for: 2m
      labels:
        severity: critical
        slo: availability
      annotations:
        summary: "CRITICAL: Fast error budget burn — SLO at risk"
        description: |
          Error rate {{ $value | humanizePercentage }} is 14x the SLO threshold.
          At this rate, you'll exhaust the monthly budget in 1 hour.
          Current budget remaining: {{ printf "%.1f" (query "slo:error_budget_remaining:30d" | first | value | mul 100) }}%

    # ALERT: Slow burn rate (gradual degradation)
    - alert: SLOErrorBudgetSlowBurn
      expr: |
        (
          slo:error_rate:1h > (6 * 0.001)
          and
          slo:error_rate:24h > (6 * 0.001)
        )
      for: 15m
      labels:
        severity: warning
        slo: availability
      annotations:
        summary: "WARNING: Slow error budget burn"
        description: |
          Error rate is consistently 6x the SLO threshold.
          Budget will be exhausted in approximately 5 days.

    # ALERT: SLO BREACHED
    - alert: SLOAvailabilityBreached
      expr: slo:error_budget_remaining:30d < 0
      labels:
        severity: critical
        slo: availability
      annotations:
        summary: "SLO BREACHED: Availability below 99.9%"
        description: |
          30-day availability is {{ printf "%.3f" (query "slo:availability:30d" | first | value | mul 100) }}%
          which is below the 99.9% SLO.
          Error budget is {{ printf "%.1f" (query "slo:error_budget_remaining:30d" | first | value | mul 100) }}% remaining.

  # ════════════════════════════════════════════════
  # SLO 2: LATENCY
  # 99% of requests complete in < 500ms
  # ════════════════════════════════════════════════
  - name: slo.latency
    interval: 30s
    rules:

    # What fraction of requests are "good" (< 500ms)?
    - record: slo:latency_good_requests:5m
      expr: |
        sum(rate(http_request_duration_seconds_bucket{
          namespace="production",
          le="0.5"
        }[5m]))
        /
        sum(rate(http_request_duration_seconds_count{
          namespace="production"
        }[5m]))

    - record: slo:latency_good_requests:30d
      expr: |
        sum(rate(http_request_duration_seconds_bucket{
          namespace="production",
          le="0.5"
        }[30d]))
        /
        sum(rate(http_request_duration_seconds_count{
          namespace="production"
        }[30d]))

    # Latency SLO target: 99% of requests < 500ms
    - alert: SLOLatencyBreached
      expr: slo:latency_good_requests:5m < 0.99
      for: 5m
      labels:
        severity: warning
        slo: latency
      annotations:
        summary: "Latency SLO breached: P99 > 500ms"
        description: |
          Only {{ $value | humanizePercentage }} of requests complete within 500ms.
          SLO requires 99%.
PART 4: ALERT STRATEGY — The Right Alert at the Right Time
The Alert Philosophy
THE PROBLEM WITH BAD ALERTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOO MANY ALERTS:
Alert fires → engineer ignores it → it was a false alarm → next time
alert fires → engineer ignores it → IT WAS REAL → production down
This is called alert fatigue. It kills people.

TOO FEW ALERTS:
User: "Your site has been down for 2 hours"
Engineer: "What? We had no idea"
This is called flying blind. Also bad.

THE RIGHT ALERTS:
Every alert that fires = requires HUMAN action
Every alert that fires = engineer can do something about it
Every alert that fires = something is wrong RIGHT NOW or will be soon
If an alert fires and you look at it and do nothing → it's a bad alert
Delete bad alerts. Treat alert quality like code quality.

ALERT SEVERITY LEVELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL → Page on-call IMMEDIATELY (even at 3am)
           Users are being impacted RIGHT NOW
           Examples: error rate > 5%, service completely down
           Response time: < 5 minutes

WARNING  → Slack notification (check within business hours)
           Something will break if not addressed
           Examples: disk > 80%, error rate > 1%, latency rising
           Response time: < 4 hours

INFO     → Dashboard / ticket (review regularly)
           Informational, no immediate action needed
           Examples: deployment happened, scaling event
           Response time: next business day

DEAD LETTER → Never page. Just log.
           Background noise, expected behavior
           Examples: health check bounces, config reloads
Complete Alert Rules
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: production-alerts
  namespace: monitoring
  labels:
    release: kube-prometheus-stack

spec:
  groups:

  # ════════════════════════════════════════════════
  # APPLICATION ALERTS
  # ════════════════════════════════════════════════
  - name: application.critical
    rules:

    - alert: HighErrorRate
      expr: |
        (
          sum(rate(http_requests_total{
            namespace="production",
            status=~"5.."
          }[5m]))
          /
          sum(rate(http_requests_total{namespace="production"}[5m]))
        ) > 0.05
      for: 2m
      labels:
        severity: critical
        team: platform
      annotations:
        summary: "CRITICAL: Error rate > 5%"
        description: |
          Error rate is {{ $value | humanizePercentage }}.
          Impact: Users receiving errors right now.
          Runbook: https://wiki.mycompany.com/runbooks/high-error-rate
        dashboard: "https://grafana.mycompany.com/d/golden-signals-prod"

    - alert: ServiceDown
      expr: |
        sum(up{namespace="production"}) == 0
      for: 1m
      labels:
        severity: critical
        team: platform
      annotations:
        summary: "CRITICAL: All production targets are DOWN"
        description: "No production pods are reachable by Prometheus."
        runbook: "https://wiki.mycompany.com/runbooks/service-down"

    - alert: HighLatency
      expr: |
        histogram_quantile(0.99,
          sum by (le) (
            rate(http_request_duration_seconds_bucket{
              namespace="production"
            }[5m])
          )
        ) > 2
      for: 5m
      labels:
        severity: critical
        team: platform
      annotations:
        summary: "CRITICAL: P99 latency > 2 seconds"
        description: |
          P99 latency is {{ $value | humanizeDuration }}.
          Users are experiencing very slow responses.

    - alert: PodCrashLooping
      expr: |
        rate(kube_pod_container_status_restarts_total{
          namespace="production"
        }[15m]) * 60 * 15 > 3
      for: 5m
      labels:
        severity: critical
        team: platform
      annotations:
        summary: "CRITICAL: Pod {{ $labels.pod }} is crash looping"
        description: |
          Pod {{ $labels.namespace }}/{{ $labels.pod }}
          container {{ $labels.container }} has restarted
          {{ $value | printf "%.0f" }} times in 15 minutes.

    - alert: OOMKilled
      expr: |
        kube_pod_container_status_last_terminated_reason{
          reason="OOMKilled",
          namespace="production"
        } > 0
      labels:
        severity: critical
        team: platform
      annotations:
        summary: "CRITICAL: Container OOMKilled"
        description: |
          {{ $labels.namespace }}/{{ $labels.pod }}/{{ $labels.container }}
          was OOM killed. Increase memory limits.

  - name: application.warning
    rules:

    - alert: ModerateErrorRate
      expr: |
        (
          sum(rate(http_requests_total{
            namespace="production",
            status=~"5.."
          }[5m]))
          /
          sum(rate(http_requests_total{namespace="production"}[5m]))
        ) > 0.01
      for: 5m
      labels:
        severity: warning
        team: platform
      annotations:
        summary: "WARNING: Error rate > 1%"
        description: "Error rate {{ $value | humanizePercentage }}. Investigate before it gets worse."

    - alert: DeploymentReplicasMismatch
      expr: |
        kube_deployment_spec_replicas{namespace="production"}
        !=
        kube_deployment_status_replicas_available{namespace="production"}
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "WARNING: Deployment {{ $labels.deployment }} has replica mismatch"

    - alert: CPUThrottlingHigh
      expr: |
        sum by (pod, container) (
          rate(container_cpu_cfs_throttled_seconds_total{
            namespace="production"
          }[5m])
        )
        /
        sum by (pod, container) (
          rate(container_cpu_cfs_periods_total{
            namespace="production"
          }[5m])
        ) > 0.25
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: "CPU throttling > 25% on {{ $labels.pod }}/{{ $labels.container }}"
        description: "Increase CPU limits or reduce CPU requests to fix ratio"

  # ════════════════════════════════════════════════
  # INFRASTRUCTURE ALERTS
  # ════════════════════════════════════════════════
  - name: infrastructure.critical
    rules:

    - alert: NodeMemoryPressure
      expr: |
        node_memory_MemAvailable_bytes
        /
        node_memory_MemTotal_bytes < 0.10
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: "CRITICAL: Node {{ $labels.instance }} memory < 10%"

    - alert: NodeDiskPressure
      expr: |
        (
          node_filesystem_size_bytes{fstype!="tmpfs"}
          - node_filesystem_free_bytes{fstype!="tmpfs"}
        )
        /
        node_filesystem_size_bytes{fstype!="tmpfs"} > 0.90
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: "CRITICAL: Node {{ $labels.instance }} disk > 90%"

    - alert: PVCAlmostFull
      expr: |
        kubelet_volume_stats_used_bytes
        /
        kubelet_volume_stats_capacity_bytes > 0.85
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "PVC {{ $labels.namespace }}/{{ $labels.persistentvolumeclaim }} > 85% full"
AlertManager Routing — Who Gets Paged for What
# alertmanager-config.yaml
# Applied via Helm values or directly to AlertManager

apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
  name: production-routing
  namespace: monitoring

spec:
  route:
    # Default: group alerts, wait 30s to batch, repeat every 12h
    groupBy: ['alertname', 'namespace', 'severity']
    groupWait: 30s
    groupInterval: 5m
    repeatInterval: 12h
    receiver: slack-warnings

    routes:
    # CRITICAL → PagerDuty (wakes people up)
    - matchers:
      - name: severity
        value: critical
      receiver: pagerduty-critical
      repeatInterval: 30m    # Re-alert every 30 min if not acknowledged

    # SLO alerts → dedicated channel
    - matchers:
      - name: slo
        matchType: =~
        value: ".+"
      receiver: slack-slo
      groupBy: ['slo', 'alertname']

    # Warning → Slack only
    - matchers:
      - name: severity
        value: warning
      receiver: slack-warnings

  receivers:
  - name: pagerduty-critical
    pagerDutyConfigs:
    - routingKey: $PAGERDUTY_ROUTING_KEY
      severity: critical
      description: |
        {{ range .Alerts }}
        {{ .Annotations.summary }}
        {{ .Annotations.description }}
        {{ end }}
      links:
      - href: "{{ (index .Alerts 0).Annotations.dashboard }}"
        text: "Grafana Dashboard"

  - name: slack-warnings
    slackConfigs:
    - apiURL: $SLACK_WEBHOOK_URL
      channel: '#alerts-warnings'
      sendResolved: true
      color: |
        {{ if eq .Status "firing" }}
          {{ if eq (index .Alerts 0).Labels.severity "critical" }}danger
          {{ else }}warning{{ end }}
        {{ else }}good{{ end }}
      title: |
        {{ if eq .Status "firing" }}🔥 {{ else }}✅ {{ end }}
        [{{ .Status | toUpper }}] {{ (index .Alerts 0).Annotations.summary }}
      text: |
        {{ range .Alerts }}
        *Description:* {{ .Annotations.description }}
        *Namespace:* {{ .Labels.namespace }}
        *Severity:* {{ .Labels.severity }}
        {{ end }}

  - name: slack-slo
    slackConfigs:
    - apiURL: $SLACK_WEBHOOK_URL
      channel: '#slo-tracking'
      sendResolved: true
      title: "📊 SLO Alert: {{ (index .Alerts 0).Annotations.summary }}"
      text: |
        {{ range .Alerts }}
        {{ .Annotations.description }}
        {{ end }}

  inhibitRules:
  # If ServiceDown fires, suppress all other alerts
  # (don't page for symptoms when you know the root cause)
  - sourceMatchers:
    - name: alertname
      value: ServiceDown
    targetMatchers:
    - name: namespace
      value: production
    equal: ['namespace']
PART 5: CHAOS ENGINEERING — Break It on Purpose
Mental Model — The Fire Drill
CHAOS ENGINEERING is like a fire drill for your software.

A fire drill:
→ You set off the alarm on PURPOSE
→ Everyone practices evacuating
→ You find the broken exit door BEFORE a real fire
→ You fix it
→ Real fire comes: evacuation is smooth, lives saved

Chaos engineering:
→ You break the system on PURPOSE
→ Team practices incident response
→ You find the single point of failure BEFORE production breaks
→ You fix it
→ Real failure comes: team handles it smoothly, users barely notice

THE CHAOS MATURITY MODEL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Level 0: We don't test failure
         "It's never failed so it must be fine"
         → You have no idea what will break

Level 1: We test failure in dev/staging
         "We simulate failures in lower environments"
         → Better, but production always surprises you

Level 2: We test failure in production (small scale)
         "We deliberately kill one pod in production"
         → You KNOW the system handles pod failure

Level 3: Continuous chaos
         "Chaos runs automatically every day in production"
         → Netflix Chaos Monkey level. True confidence.

YOU ARE TARGETING LEVEL 2.
Start controlled. Measure everything. Build confidence.

HYPOTHESIS FORMAT:
Before every chaos experiment, write a hypothesis:
"If [failure], then [expected behavior], because [reason]"

"If one pod dies, then error rate stays < 0.1%,
 because we have 3 replicas and HPA will replace it."

If the hypothesis is WRONG → you found a weakness → fix it.
If the hypothesis is RIGHT → you have PROOF of resilience.
Chaos Experiments — Step by Step
# ════════════════════════════════════════════════
# SETUP: Install Chaos Mesh
# Open-source chaos engineering platform for Kubernetes
# ════════════════════════════════════════════════

helm repo add chaos-mesh https://charts.chaos-mesh.org
helm repo update

kubectl create namespace chaos-testing

helm install chaos-mesh chaos-mesh/chaos-mesh \
  --namespace chaos-testing \
  --set chaosDaemon.runtime=containerd \
  --set chaosDaemon.socketPath=/run/containerd/containerd.sock \
  --set dashboard.create=true \
  --set dashboard.securityMode=false

# Verify
kubectl get pods -n chaos-testing

# Access dashboard
kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333 &

# ════════════════════════════════════════════════
# MEASUREMENT SETUP
# Always measure BEFORE and DURING chaos
# ════════════════════════════════════════════════

measure_baseline() {
  echo "=== BASELINE MEASUREMENT at $(date '+%H:%M:%S') ==="

  # Current error rate
  ERROR_RATE=$(kubectl exec -n monitoring \
    $(kubectl get pod -n monitoring -l app=prometheus -o name | head -1) \
    -- wget -qO- 'http://localhost:9090/api/v1/query?query=sum(rate(http_requests_total{namespace="production",status=~"5.."}[2m]))/sum(rate(http_requests_total{namespace="production"}[2m]))*100' \
    | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data']['result'][0]['value'][1] if d['data']['result'] else '0')")

  # Current P99 latency
  P99=$(kubectl exec -n monitoring \
    $(kubectl get pod -n monitoring -l app=prometheus -o name | head -1) \
    -- wget -qO- "http://localhost:9090/api/v1/query?query=histogram_quantile(0.99,sum+by+(le)(rate(http_request_duration_seconds_bucket{namespace='production'}[2m])))" \
    | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data']['result'][0]['value'][1] if d['data']['result'] else '0')")

  echo "Error Rate: ${ERROR_RATE}%"
  echo "P99 Latency: ${P99}s"

  # Pod count
  PODS=$(kubectl get pods -n production --no-headers | grep Running | wc -l)
  echo "Running Pods: $PODS"

  echo ""
}

# ════════════════════════════════════════════════
# EXPERIMENT 1: Pod Kill
# Hypothesis: Killing 1 of 3 pods has zero user impact
# because remaining pods absorb traffic and HPA replaces
# ════════════════════════════════════════════════

echo "=== EXPERIMENT 1: POD KILL ==="
echo "Hypothesis: Killing 1 pod causes < 0.1% error rate increase"
echo "Duration: 5 minutes"
echo ""

measure_baseline

T_START=$(date +%s)

# METHOD A: Direct kubectl (simple, no Chaos Mesh needed)
TARGET_POD=$(kubectl get pods -n production -l app=api \
  --no-headers | head -1 | awk '{print $1}')
echo "CHAOS: Killing pod $TARGET_POD at $(date '+%H:%M:%S')"
kubectl delete pod $TARGET_POD -n production

# METHOD B: Chaos Mesh pod failure
kubectl apply - << 'EOF'
apiVersion: chaos-mesh.org/v1alpha1
kind: PodChaos
metadata:
  name: pod-kill-experiment
  namespace: chaos-testing
spec:
  action: pod-kill
  mode: one        # Kill exactly one pod
  selector:
    namespaces:
    - production
    labelSelectors:
      app: api
  duration: "5m"   # Run for 5 minutes
EOF

# Monitor during chaos
for i in $(seq 1 10); do
  sleep 30
  measure_baseline
done

# Collect results
T_END=$(date +%s)
MTTR=$((T_END - T_START))
echo "Time to recovery: ${MTTR} seconds"
echo "EXPERIMENT 1 COMPLETE"

# Clean up
kubectl delete podchaos pod-kill-experiment -n chaos-testing

# ════════════════════════════════════════════════
# EXPERIMENT 2: Network Latency Injection
# Hypothesis: 500ms added latency causes P99 to breach SLO
# but error rate stays low (requests are slow, not failing)
# ════════════════════════════════════════════════

echo "=== EXPERIMENT 2: NETWORK LATENCY ==="
echo "Hypothesis: Adding 500ms latency → P99 > 1s but error rate < 1%"

measure_baseline

kubectl apply - << 'EOF'
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: latency-injection
  namespace: chaos-testing
spec:
  action: delay
  mode: all         # Apply to all matching pods
  selector:
    namespaces:
    - production
    labelSelectors:
      app: api
  delay:
    latency: "500ms"
    correlation: "50"   # 50% correlation between packets
    jitter: "100ms"     # Random variation ±100ms
  duration: "10m"
  direction: both       # Both inbound and outbound
EOF

echo "Latency injected. Measuring impact..."
for i in $(seq 1 6); do
  sleep 60
  measure_baseline
  echo "--- 1 minute elapsed ---"
done

kubectl delete networkchaos latency-injection -n chaos-testing
echo "EXPERIMENT 2 COMPLETE"

# ════════════════════════════════════════════════
# EXPERIMENT 3: Memory Pressure
# Hypothesis: OOM of one pod causes brief error spike
# then recovery as HPA replaces pod
# ════════════════════════════════════════════════

echo "=== EXPERIMENT 3: MEMORY PRESSURE ==="

kubectl apply - << 'EOF'
apiVersion: chaos-mesh.org/v1alpha1
kind: StressChaos
metadata:
  name: memory-stress
  namespace: chaos-testing
spec:
  mode: one
  selector:
    namespaces:
    - production
    labelSelectors:
      app: api
  stressors:
    memory:
      workers: 4
      size: "256MB"   # Consume 256MB extra memory
  duration: "5m"
EOF

T_STRESS_START=$(date +%s)

for i in $(seq 1 5); do
  sleep 60
  measure_baseline
  # Check if OOM occurred
  OOM=$(kubectl get events -n production \
    --field-selector reason=OOMKilling \
    --sort-by='.lastTimestamp' 2>/dev/null | tail -1)
  if [ -n "$OOM" ]; then
    T_OOM=$(date +%s)
    echo "OOM DETECTED: $OOM"
    echo "Time to OOM: $((T_OOM - T_STRESS_START)) seconds"
  fi
done

kubectl delete stresschaos memory-stress -n chaos-testing

# ════════════════════════════════════════════════
# EXPERIMENT 4: Node Failure (AZ Simulation)
# Hypothesis: Cordoning all pods in AZ-a and deleting them
# causes pods to reschedule in AZ-b with < 30s of impact
# ════════════════════════════════════════════════

echo "=== EXPERIMENT 4: AZ FAILURE SIMULATION ==="

# Get nodes in us-east-1a
AZ_A_NODES=$(kubectl get nodes \
  -l topology.kubernetes.io/zone=us-east-1a \
  -o jsonpath='{.items[*].metadata.name}')

echo "Simulating AZ us-east-1a failure"
echo "Nodes: $AZ_A_NODES"

T_AZ_START=$(date +%s)
measure_baseline

# Cordon all 1a nodes (no new pods)
for NODE in $AZ_A_NODES; do
  kubectl cordon $NODE
done

# Drain pods from 1a nodes (simulate AZ failure)
for NODE in $AZ_A_NODES; do
  kubectl drain $NODE \
    --ignore-daemonsets \
    --delete-emptydir-data \
    --force \
    --timeout=60s &
done
wait

echo "All 1a nodes drained"
T_DRAINED=$(date +%s)
echo "Time to drain: $((T_DRAINED - T_AZ_START)) seconds"

# Measure recovery
for i in $(seq 1 6); do
  sleep 30
  measure_baseline
done

T_RECOVERED=$(date +%s)

# Uncordon nodes
for NODE in $AZ_A_NODES; do
  kubectl uncordon $NODE
done

MTTR=$((T_RECOVERED - T_AZ_START))
echo "AZ RECOVERY TIME: ${MTTR} seconds"
echo "EXPERIMENT 4 COMPLETE"

# ════════════════════════════════════════════════
# EXPERIMENT 5: Database Connection Exhaustion
# Hypothesis: DB connection pool full causes 500 errors
# until PgBouncer pool is cleared or pods restart
# ════════════════════════════════════════════════

echo "=== EXPERIMENT 5: DB CONNECTION EXHAUSTION ==="

# Simulate by connecting to DB many times from bastion
# (requires bastion SSH access — run from bastion)
ssh ec2-user@$BASTION_IP << 'REMOTE_EOF'
for i in $(seq 1 90); do
  PGPASSWORD=$DB_PASS psql -h $RDS_ENDPOINT \
    -U dbadmin -d appdb \
    -c "SELECT pg_sleep(300);" &
  echo "Connection $i opened"
  sleep 0.1
done
echo "90 connections open — DB exhausted"
# Press ctrl+c to release connections when test is done
REMOTE_EOF
PART 6: MEASURE MTTR — The Most Important Number
# ════════════════════════════════════════════════
# MTTR MEASUREMENT FRAMEWORK
# MTTR = Mean Time To Recovery
# The lower the MTTR, the more reliable you are
# ════════════════════════════════════════════════

# For each experiment, record:
# T0 = when failure was INJECTED
# T1 = when alert FIRED (detection time)
# T2 = when engineer ACKNOWLEDGED (response time)
# T3 = when system RECOVERED (recovery time)

# MTTR = T3 - T0 (total time to recovery)
# MTTD = T1 - T0 (time to detect)
# MTTR_response = T2 - T1 (time to respond)
# MTTR_fix = T3 - T2 (time to fix)

calculate_mttr() {
  EXPERIMENT=$1
  T0=$2  # Failure injected (unix timestamp)
  T1=$3  # Alert fired
  T2=$4  # Acknowledged
  T3=$5  # Recovered

  echo "=== MTTR for $EXPERIMENT ==="
  echo "Time to detect:  $((T1 - T0)) seconds"
  echo "Time to respond: $((T2 - T1)) seconds"
  echo "Time to fix:     $((T3 - T2)) seconds"
  echo "TOTAL MTTR:      $((T3 - T0)) seconds ($(((T3-T0)/60)) minutes)"
  echo ""
}

# ════════════════════════════════════════════════
# AUTOMATED MTTR TRACKING VIA PROMETHEUS
# ════════════════════════════════════════════════

# Record when alert fires
kubectl apply - << 'EOF'
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: mttr-tracking
  namespace: monitoring
  labels:
    release: kube-prometheus-stack
spec:
  groups:
  - name: mttr.tracking
    rules:

    # Track how long we've been in "bad" state
    - record: slo:incident_duration_seconds
      expr: |
        (
          sum(rate(http_requests_total{
            namespace="production",
            status=~"5.."
          }[5m]))
          /
          sum(rate(http_requests_total{namespace="production"}[5m]))
        ) > 0.01   # Only when error rate > 1%

    # Alert with timestamp annotation for MTTR tracking
    - alert: IncidentStarted
      expr: |
        (
          sum(rate(http_requests_total{
            namespace="production",
            status=~"5.."
          }[5m]))
          /
          sum(rate(http_requests_total{namespace="production"}[5m]))
        ) > 0.05
      for: 1m
      labels:
        severity: critical
        incident: "true"
      annotations:
        summary: "Incident started"
        fired_at: "{{ .StartsAt }}"
        description: "Error rate {{ $value | humanizePercentage }}"
EOF
PART 7: THE PORTFOLIO REPOSITORY
Repository Structure
This is your professional showcase.
Every company you interview with will look at this.
It demonstrates you can do EVERYTHING.

github.com/yourusername/devops-portfolio/

README.md                    ← The landing page (SELL YOURSELF)
├── architecture/
│   ├── overview.md          ← Full system architecture explanation
│   ├── vpc-architecture.md  ← Network design decisions
│   ├── eks-architecture.md  ← Kubernetes cluster design
│   ├── cicd-architecture.md ← Pipeline design
│   └── diagrams/
│       ├── production-architecture.png
│       ├── cicd-flow.png
│       ├── gitops-flow.png
│       └── network-topology.png
│
├── postmortems/
│   ├── README.md            ← What postmortems are and why they matter
│   ├── 2024-01-15-db-connection-exhaustion.md
│   ├── 2024-01-22-spot-interruption-cascade.md
│   └── 2024-02-01-cert-expiry.md
│
├── cost-optimization/
│   ├── case-study.md        ← Before/after: $1,121 → $447/month
│   ├── methodology.md       ← How to audit and optimize
│   └── savings-by-technique.md
│
├── security/
│   ├── security-analysis.md ← Threat model + controls
│   ├── scan-results/        ← Trivy, tfsec, checkov output
│   └── iam-design.md        ← IRSA architecture
│
├── reliability/
│   ├── chaos-engineering.md ← Experiments + results
│   ├── slo-definitions.md   ← What we measure and why
│   ├── mttr-report.md       ← Benchmark results
│   └── scaling-benchmarks.md
│
└── runbooks/
    ├── high-error-rate.md
    ├── pod-crashloop.md
    ├── node-failure.md
    └── database-issues.md
The README — Your Landing Page
# Production DevSecOps Portfolio

## What This Is

A complete production-grade platform built from scratch demonstrating
modern DevSecOps practices across 12 modules of progressive complexity.

**Core Skills Demonstrated:**
- Kubernetes (EKS) — Operator level, control plane internals
- Infrastructure as Code — Terraform modules, GitOps with ArgoCD
- CI/CD — GitHub Actions with security scanning at every stage
- Observability — Prometheus, Grafana, SLO/SLI tracking
- Chaos Engineering — Controlled failure injection, MTTR measurement
- Cost Optimization — 60% cost reduction methodology
- Security — Zero-trust networking, IRSA, policy-as-code

---

## Architecture Overview

**Production Platform Stack:**
Internet → Route53 → CloudFront → ALB
↓
EKS (Private Cluster)
├── System Nodes (Graviton On-Demand)
│    ├── ArgoCD (GitOps operator)
│    ├── Prometheus + Grafana
│    ├── cert-manager
│    └── AWS Load Balancer Controller
└── App Nodes (Graviton Spot, multi-AZ)
└── Application pods (HPA, PDB, topology spread)
↓
Private RDS PostgreSQL (Multi-AZ)
**Key Design Decisions:**
- Private EKS cluster — no public API endpoint
- IRSA everywhere — zero static AWS credentials
- Graviton + Spot — 60% infrastructure cost reduction
- GitOps — all changes via Git, never kubectl in production
- SLO-driven alerting — pages only on user-impacting issues

---

## Reliability Results

| Metric | Result |
|--------|--------|
| SLO | 99.9% availability |
| MTTR (pod failure) | 45 seconds |
| MTTR (AZ failure) | 3 minutes |
| Deployment frequency | Multiple per day |
| Change failure rate | < 2% |

## Cost Results

| Category | Before | After | Saving |
|----------|--------|-------|--------|
| Compute | $659 | $164 | -75% |
| Database | $132 | $80 | -39% |
| Networking | $160 | $102 | -36% |
| Storage | $130 | $62 | -52% |
| **Total** | **$1,121** | **$447** | **-60%** |

---

## Security Posture

- ✅ Zero static AWS credentials (IRSA + OIDC federation)
- ✅ Container image scanning (Trivy) — blocks CRITICAL CVEs
- ✅ IaC scanning (tfsec, checkov) — prevents misconfigurations
- ✅ Secret scanning (gitleaks) — catches leaked credentials
- ✅ Policy-as-code (OPA Conftest, Kyverno) — enforces standards
- ✅ Network policies — default deny, explicit allow
- ✅ Pod Security Standards — restricted profile enforced
- ✅ Image signing (cosign keyless) — supply chain security

---

## Modules Completed

1. **Linux Under Pressure** — Process lifecycle, signals, cgroups, OOM
2. **Networking First Principles** — TCP, TLS, DNS, NAT, VPC
3. **IAM Deep Dive** — Policy evaluation, IRSA, federation
4. **Production Multi-Tier App** — ALB, ASG, RDS, CloudWatch
5. **Cloud Cost Modeling** — Cost Explorer, optimization techniques
6. **Kubernetes Operator Level** — Full cluster operation
7. **Control Plane Internals** — etcd, scheduler, kubelet, kube-proxy
8. **Production EKS** — Private cluster, IRSA, full observability stack
9. **Autoscaling** — HPA internals, Cluster Autoscaler, Spot nodes
10. **Infrastructure as Code** — Terraform modules, ArgoCD GitOps
11. **CI/CD + GitOps** — Full pipeline, policy enforcement, reconciliation
12. **Cost Domination** — Graviton, rightsizing, 60% reduction
13. **Observability + Chaos** — Golden signals, SLOs, chaos experiments
Postmortem Template
# Postmortem: Database Connection Exhaustion
**Date:** 2024-01-15
**Severity:** SEV-1 (full outage)
**Duration:** 23 minutes
**Author:** [Your Name]
**Status:** Resolved

---

## Summary

A connection leak in the payments service exhausted the PostgreSQL
connection pool (max 100 connections). All API endpoints requiring
database access returned HTTP 500 for 23 minutes affecting 100% of users.

---

## Timeline

| Time | Event |
|------|-------|
| 14:31 | Alert fires: Error rate > 5% |
| 14:33 | On-call engineer acknowledged PagerDuty |
| 14:36 | Root cause identified: DB connections exhausted |
| 14:38 | Emergency mitigation: kill idle connections |
| 14:44 | Error rate returns to 0% |
| 14:54 | Root cause confirmed and permanent fix deployed |

**MTTR: 23 minutes**
**MTTD: 1 minute** (alert fired within 1 minute of first errors)

---

## Root Cause

The payments service v2.3.1 introduced a code path that opened
database connections inside a loop without closing them on exception.
Under normal load, connections were recycled before exhaustion.
A traffic spike at 14:30 triggered the code path at high frequency.

```python
# BUG: connection not closed on exception
def process_payment(payment_id):
    conn = db.connect()   # Opens connection
    try:
        result = conn.execute(query)
        return result
    except Exception as e:
        raise e           # Connection NEVER closed on exception!
        # conn.close() was missing here
Impact
Users affected: 100% (all endpoints requiring DB)
Revenue impact: ~$47,000 in failed transactions
Duration: 23 minutes (14:31 - 14:54)
Detection
CloudWatch alarm fired 62 seconds after first errors.
The alert correctly identified symptom (error rate > 5%)
but did not identify root cause automatically.
What worked:
Alert fired quickly (MTTD: 1 minute)
Dashboard showed DB connections at 100% immediately
Runbook was clear and followed correctly
What didn't work:
No alert for DB connection count approaching maximum
No alert for "connection leak rate" metric
Resolution
Immediate mitigation (T+8min):
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle'
AND state_change < now() - interval '5 minutes';
Permanent fix (T+23min):
Fixed the connection leak (context manager for all DB connections)
Deployed PgBouncer (connection pooler) — 1000 app connections → 20 DB
Added alert: DatabaseConnections > 80
Action Items
Action
Owner
Due Date
Status
Fix connection leak
Dev team
2024-01-15
✅ Done
Deploy PgBouncer
Platform
2024-01-16
✅ Done
Add DB connection alert
Platform
2024-01-15
✅ Done
Code review checklist: DB connections
Dev team
2024-01-22
🔄 In Progress
Chaos test: DB exhaustion
Platform
2024-01-29
📋 Planned
Lessons Learned
Connection limits are silent killers. The connection pool fills
slowly, then all at once. Alert at 80%, not 100%.
Connection pooling is not optional. PgBouncer should have been
standard from day 1. Now it is.
Code review must check resource cleanup. Added DB connection
handling to our code review checklist.
MTTR was acceptable but fixable. 8 minutes to mitigation is
good. With PgBouncer and better alerting, this would auto-recover.
Blameless Culture Note
This postmortem focuses on systems and processes, not individuals.
The engineer who introduced the bug was working under time pressure
with an incomplete understanding of connection lifecycle.
The fix is: better tooling, better reviews, not blame.
## Chaos Engineering Report

```markdown
# Reliability Engineering Report
**Period:** January 2024
**System:** Production EKS Platform
**Engineer:** [Your Name]

---

## Executive Summary

We conducted 5 controlled chaos experiments measuring system resilience
and Mean Time To Recovery (MTTR). The system exceeded expectations on
pod-level failures but revealed a critical gap in AZ-level failure handling.

---

## SLO Status

| SLO | Target | Actual | Status |
|-----|--------|--------|--------|
| Availability (30d) | 99.9% | 99.94% | ✅ Met |
| Latency P99 (30d) | < 500ms | 340ms | ✅ Met |
| Error budget used | < 100% | 43% used | ✅ 57% remaining |

---

## Chaos Experiment Results

### Experiment 1: Pod Kill
**Hypothesis:** Killing 1 of 3 pods causes < 0.1% error rate

| Metric | Expected | Actual | Pass? |
|--------|----------|--------|-------|
| Error rate during failure | < 0.1% | 0.02% | ✅ |
| Time to pod replacement | < 120s | 47s | ✅ |
| P99 latency impact | < 100ms increase | +12ms | ✅ |

**Result:** PASSED. System handled single pod failure transparently.

---

### Experiment 2: Network Latency (+500ms)
**Hypothesis:** Adding 500ms latency causes P99 to breach SLO
but error rate stays below 1%

| Metric | Expected | Actual | Pass? |
|--------|----------|--------|-------|
| P99 latency | > 1s | 847ms | ✅ (worse than expected) |
| Error rate | < 1% | 0.1% | ✅ |
| Timeout errors | Some | 0.08% | ✅ |

**Result:** PASSED with notes. P99 was 847ms, still under 1s SLO threshold.
Retry logic prevented most timeout errors.

---

### Experiment 3: Memory Stress (+256MB)
**Hypothesis:** Consuming 256MB extra causes OOM, then recovery

| Metric | Expected | Actual | Pass? |
|--------|----------|--------|-------|
| OOM event | Within 10min | 7 minutes | ✅ |
| Error rate during OOM | < 2% | 1.8% | ✅ |
| Recovery time | < 60s | 34s | ✅ |

**Result:** PASSED. OOM handling worked correctly.

---

### Experiment 4: AZ Failure Simulation
**Hypothesis:** Losing all us-east-1a nodes causes < 30s of impact

| Metric | Expected | Actual | Pass? |
|--------|----------|--------|-------|
| Error rate spike | < 1% | 4.7% | ❌ |
| Recovery time | < 30s | 4 minutes 12s | ❌ |
| Traffic continuity | Maintained | 47s outage | ❌ |

**Result: FAILED.** Critical gap identified.

**Root Cause:** Pod distribution was uneven — 4 pods in 1a, 2 in 1b.
When 1a failed, the remaining 2 pods in 1b were overwhelmed.
HPA took 4+ minutes to scale up new pods.

**Fix Applied:**
- topologySpreadConstraints: maxSkew=1 (even distribution across AZs)
- minReplicas increased from 3 to 6 (2 per AZ minimum)
- PodDisruptionBudget: minAvailable=4 (always 4 pods minimum)
- Pre-warm balloon pods for faster CA scale-up

**Result after fix:** Re-tested, recovery time: 28 seconds. ✅

---

### Experiment 5: Database Connection Exhaustion
**Hypothesis:** Connection pool full causes 500 errors, PgBouncer prevents cascade

| Metric | Expected | Actual | Pass? |
|--------|----------|--------|-------|
| Error rate | < 5% | 0% | ✅ (better than expected!) |
| DB connections at risk | Protected by PgBouncer | Protected | ✅ |

**Result:** PASSED. PgBouncer (deployed after postmortem) completely
prevented the failure mode that previously caused a 23-minute outage.

---

## MTTR Benchmark Results

| Failure Type | MTTD | MTTR | SLO Impact |
|--------------|------|------|------------|
| Pod kill | 18s | 47s | None |
| Node failure | 41s | 3m 12s | Minor |
| AZ failure (BEFORE fix) | 45s | 4m 12s | 47s outage |
| AZ failure (AFTER fix) | 45s | 28s | None |
| DB exhaustion (BEFORE fix) | 62s | 23m | Full outage |
| DB exhaustion (AFTER fix) | 12s | 0s | None (auto-healed) |
| Network latency | 90s | N/A | Degraded |

---

## Reliability Improvements Made

As a result of chaos experiments:

1. **Topology spread constraints** enforced on all deployments
   → AZ failure impact reduced from 4+ min to 28s

2. **PgBouncer deployed** after DB connection postmortem
   → DB connection exhaustion no longer causes outages

3. **minReplicas increased** from 3 to 6 for critical services
   → Node group failure handled with zero user impact

4. **PodDisruptionBudget** enforced: minAvailable=4
   → Maintenance activities can't cause outages

5. **Balloon pods** added for faster cluster scale-up
   → CA provision latency reduced from 3min to 45s

---

## Conclusion

The chaos engineering program identified 2 critical gaps that would
have caused major outages in a real failure scenario:
- AZ-level failure handling (now fixed)
- Database connection exhaustion (now fixed via PgBouncer)

Current MTTR benchmarks exceed industry standards:
- Pod failure: 47s (industry avg: 5-10min)
- AZ failure: 28s (industry avg: 10-30min)
- Database outage: prevented entirely (industry avg: 20-45min)

Recommended next steps:
1. Run chaos experiments weekly in staging, monthly in production
2. Add chaos tests to CI pipeline (automated chaos gates)
3. Expand experiments: DNS failure, certificate expiry, etcd issues
Scaling Benchmarks Report
# Scaling Benchmarks Report
**System:** Production EKS on AWS
**Date:** January 2024

---

## HPA Scaling Latency

**Test methodology:** Generate load with 10 concurrent workers,
measure time from spike start to new pods serving traffic.

| Phase | Duration |
|-------|----------|
| Load spike start → metrics reflect | 15s |
| HPA detects threshold breach | 30s |
| New pods created by ReplicaSet | 3s |
| Container start + image pull | 12s |
| Readiness probe passes | 15s |
| **Total: Load spike → new pods serving** | **~75 seconds** |

**Scale-down:** 300s stabilization → pods removed gradually

---

## Cluster Autoscaler Latency

**Test methodology:** Create 20 pods requesting 400m CPU each,
exceeding cluster capacity, measure time to all pods Running.

| Phase | Duration |
|-------|----------|
| Pods Pending | 0s |
| CA detects Pending pods | 10s |
| CA calls AWS ASG | 2s |
| EC2 Spot instance starts | 45s |
| kubelet registers node | 30s |
| Node Ready | 15s |
| Pods scheduled and Running | 8s |
| **Total: Pending → All Running** | **~110 seconds** |

**With Balloon pods:** ~45 seconds (buffer capacity eliminates wait)

---

## Spot Interruption Handling

**Test methodology:** Manual spot interruption via AWS CLI,
NTH detects and drains, measure user impact.

| Phase | Duration |
|-------|----------|
| NTH receives interruption notice | 2 min warning |
| NTH cordons node | 0s |
| NTH drains pods (SIGTERM) | 15s |
| Load balancer removes pod | 5s |
| Replacement pods scheduled | 20s |
| **User-facing error window** | **0 seconds** (graceful drain) |

**Spot interruption rate:** 2 interruptions in 30 days (2 of ~180 pod-hours = 1.1%)

---

## Load Test Results

**Tool:** k6 load testing
**Duration:** 30 minutes at each load level

| RPS | Error Rate | P99 Latency | Pods | Nodes |
|-----|------------|-------------|------|-------|
| 100 | 0.00% | 45ms | 3 | 5 |
| 500 | 0.00% | 78ms | 3 | 5 |
| 1,000 | 0.00% | 134ms | 5 | 5 |
| 2,000 | 0.01% | 287ms | 9 | 7 |
| 5,000 | 0.08% | 891ms | 18 | 11 |
| 10,000 | 0.31% | 2,100ms | 32 | 16 |

**Maximum throughput before SLO breach:** ~4,500 RPS (P99 < 1s)
**Scaling efficiency:** Linear up to 5,000 RPS, sub-linear above

---

## Cost Per Request

At peak production load (2,000 RPS):
- Infrastructure cost: $447/month
- Requests served: 2,000 × 60 × 60 × 24 × 30 = 5.2 billion/month
- **Cost per million requests: $0.086**

At baseline (500 RPS):
- Requests served: 1.3 billion/month
- **Cost per million requests: $0.344**
YOUR COMPLETE FINAL CHECKLIST
OBSERVABILITY:
□ kube-prometheus-stack installed and all targets UP
□ Golden signals dashboard deployed via ConfigMap
□ Dashboard shows: error rate, latency, traffic, saturation
□ SLO panel: 30-day availability + error budget remaining
□ Custom PrometheusRule for application metrics
□ SLO definitions in PrometheusRule (availability + latency)
□ AlertManager routing: critical→PagerDuty, warning→Slack
□ Alert inhibition rules (suppress symptoms when root cause known)

CHAOS ENGINEERING:
□ Chaos Mesh installed and dashboard accessible
□ Experiment 1: Pod kill — MTTR measured
□ Experiment 2: Network latency injection — impact measured
□ Experiment 3: Memory stress — OOM handling verified
□ Experiment 4: AZ failure simulation — gap found and fixed
□ Experiment 5: DB exhaustion — prevented by PgBouncer
□ All experiments documented with hypothesis → result → action

PORTFOLIO REPOSITORY:
□ README.md: professional landing page with all metrics
□ architecture/: diagrams showing full system design
□ postmortems/: at least 2 real postmortems from your labs
□ cost-optimization/: before/after case study ($1,121→$447)
□ security/: threat model + scan results + IAM design
□ reliability/: chaos report + SLO definitions + MTTR benchmarks
□ scaling-benchmarks/: HPA + CA + load test results
□ runbooks/: at least 4 operational runbooks

MTTR BENCHMARKS:
□ Pod failure MTTR: < 2 minutes measured
□ Node failure MTTR: < 5 minutes measured
□ AZ failure MTTR: < 5 minutes measured (after topology fix)
□ DB connection MTTR: < 30 minutes measured (or 0 with PgBouncer)
□ All results documented in reliability report
