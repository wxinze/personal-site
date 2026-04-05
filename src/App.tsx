import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Dumbbell, Mail, Sparkles, Waves, ChevronDown, MessageCircle, BriefcaseBusiness, Smartphone } from "lucide-react";
type CardProps = React.HTMLAttributes<HTMLDivElement>;

function Card({ className = "", ...props }: CardProps) {
  return <div className={className} {...props} />;
}

function CardContent({ className = "", ...props }: CardProps) {
  return <div className={className} {...props} />;
}

// =========================
// 这里是文案总区：后面你主要改这里就行
// =========================
const siteContent = {
  brand: {
    englishName: "Aline",
    chineseName: "吴信泽",
    fullName: "吴信泽 / Aline",
    role: "Graduate Student",
    heroTag: "Xinze Wu · Aline",
    topBadge: "Personal Website / Dark Minimal Style",
    motto: "在长期主义里积累，向更懂人的技术靠近。",
  },

  hero: {
    titleLine1: "在读计算机研究生，",
    titleAccent: "AI 私人订制服务",
    titleLine2: "的可能性。",
    description:
      "关注技术如何真正服务个体，希望把 AI 做成更懂人、更贴近真实需求的长期型能力。除了技术，本人也热爱读书、跑步、羽毛球、徒步，并准备开始学习游泳。",
    primaryButton: "联系我",
    secondaryButton: "查看我的方向",
  },

  about: {
    label: "About",
    title: "关于我",
    paragraphs: [
      "目前是一名在读计算机研究生。相比单纯追求技术堆叠，更关心技术如何真正落到现实场景中。",
      "对 销售、AI 私人订制服务感兴趣，热爱阅读和运动。相比于及时的快乐，我更愿意以长期主义的方式看待成长。",
    ],
  },

  navigation: {
    about: "关于",
    experience: "经历",
    vision: "方向",
    interests: "兴趣",
    contact: "联系",
    scrollDown: "向下浏览",
  },

  contact: {
    identityLabel: "Identity",
    quickContactLabel: "Quick Contact",
    quickContactTitle: "常用联系方式",
    contactBadge: "Reach Me",
    emailLabel: "Email",
    email: "0323wxz@gmail.com",
    wechatLabel: "WeChat",
    wechat: "18656812539",
    moreLabel: "More",
    moreText: "这里后续还可以继续补充 GitHub、简历下载、电话、公众号或其他社交平台链接。",
  },

  experienceSection: {
    label: "Experience",
    title: "项目与经历",
    currentProjectsTitle: "正在做的项目",
    experienceTitle: "经历",
  },

  currentProjects: [
    {
      title: "QuietReader APP设计",
      description:
        "目前正在完善个人的读书APP设计。",
    },
    {
      title: "个人网站搭建与完善",
      description:
        "正在持续完善个人网站的内容结构、展示逻辑与视觉风格，希望把个人介绍、项目展示、经历整理和联系方式统一到一个简洁清晰的线上主页中。",
    },
  ],

  experiences: [
    {
      title: "销售经历",
      description:
        "具备四年销售相关实践经历，接触过与用户沟通、需求理解、表达说服和关系维护等工作内容。",
    },
    {
      title: "App 开发经历",
      description:
        "目前正在开发一款读书app：QuietReader，已经完成1.0版本。",
    },
  ],

  vision: {
    label: "Vision",
    title: "想持续深耕的方向",
    items: [
      {
        title: "AI × 个体化服务",
        description:
          "希望未来能围绕 AI 赋能的私人订制服务展开更深入的学习和实践，让技术更懂人。",
      },
      {
        title: "知识积累与表达",
        description:
          "去年阅读60本经典书籍，今年目标阅读100本经典书籍，建立自己的知识体系，同时提升把复杂内容讲清楚、做出来、落下去的能力。",
      },
      {
        title: "平衡技术与生活",
        description:
          "阅读与运动，是我理解“长期主义”的具体方式。",
      },
    ],
  },

  interestsSection: {
    label: "Interests",
    title: "兴趣与关注",
  },

  interests: [
    {
      title: "AI 私人订制服务",
      description:
        "对 AI 在个性化服务中的应用非常感兴趣，尤其关注它如何真正理解个体需求，并形成长期、稳定、可持续的服务体验。",
    },
    {
      title: "阅读与持续学习",
      description:
        "阅读是我长期保持输入与思考的方式。每天起床第一件事：阅读一小时。",
    },
    {
      title: "运动与长期主义",
      description:
        "跑步、羽毛球、徒步是我目前比较喜欢的运动方式，接下来准备开始学习游泳。",
    },
  ],
};

const AVATAR_SRC = "/avatar.jpg";

const interests = [
  { ...siteContent.interests[0], icon: Brain },
  { ...siteContent.interests[1], icon: BookOpen },
  { ...siteContent.interests[2], icon: Dumbbell },
];

const currentProjects = [
  { ...siteContent.currentProjects[0], icon: Brain },
  { ...siteContent.currentProjects[1], icon: Sparkles },
];

const experiences = [
  { ...siteContent.experiences[0], icon: BriefcaseBusiness },
  { ...siteContent.experiences[1], icon: Smartphone },
];

const visionItems = [
  { ...siteContent.vision.items[0], icon: Brain },
  { ...siteContent.vision.items[1], icon: BookOpen },
  { ...siteContent.vision.items[2], icon: Waves },
];

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white shadow-lg shadow-black/30">
              <img
                src={AVATAR_SRC}
                alt="吴信泽头像"
                className="h-full w-full scale-[0.82] object-cover object-[center_58%]"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/50">{siteContent.brand.englishName}</div>
                <div className="text-base font-semibold text-white">{siteContent.brand.chineseName}</div>
              </div>
              <div className="hidden md:block max-w-[320px] text-sm leading-6 text-white/45">
                {siteContent.brand.motto}
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">{siteContent.navigation.about}</a>
            <a href="#experience" className="transition hover:text-white">{siteContent.navigation.experience}</a>
            <a href="#vision" className="transition hover:text-white">{siteContent.navigation.vision}</a>
            <a href="#interests" className="transition hover:text-white">{siteContent.navigation.interests}</a>
            <a href="#quick-contact" className="transition hover:text-white">{siteContent.navigation.contact}</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto flex min-h-[60vh] max-w-6xl items-start px-6 py-12">
          <div className="grid w-full items-start gap-10 lg:grid-cols-2">
            <motion.div
              id="about"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="h-full"
            >

              <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
                <CardContent className="flex h-full min-h-[520px] flex-col justify-start p-8 md:p-10">
                  <div className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">{siteContent.about.label}</div>
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">{siteContent.about.title}</h2>
                  <div className="mt-6 space-y-5 text-sm leading-9 text-white/68 md:text-lg">
                    {siteContent.about.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              id="quick-contact"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/45">{siteContent.contact.identityLabel}</p>
                        <h2 className="mt-1 text-2xl font-semibold text-white">{siteContent.brand.fullName}</h2>
                      </div>
                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        {siteContent.brand.role}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 px-6 py-6">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/45">{siteContent.contact.quickContactLabel}</p>
                          <p className="mt-1 text-base font-medium text-white">{siteContent.contact.quickContactTitle}</p>
                        </div>
                        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                          {siteContent.contact.contactBadge}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <a
                          href={`mailto:${siteContent.contact.email}`}
                          className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition hover:bg-white/[0.06]"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <Mail className="h-4 w-4 text-cyan-300" />
                          </div>
                          <p className="text-sm text-white/45">{siteContent.contact.emailLabel}</p>
                          <p className="mt-2 break-all text-sm leading-7 text-white/80">{siteContent.contact.email}</p>
                        </a>

                        <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <MessageCircle className="h-4 w-4 text-cyan-300" />
                          </div>
                          <p className="text-sm text-white/45">{siteContent.contact.wechatLabel}</p>
                          <p className="mt-2 text-sm leading-7 text-white/80">{siteContent.contact.wechat}</p>
                        </div>

                        <div className="rounded-2xl border border-dashed border-white/10 bg-neutral-900/50 p-4 sm:col-span-2">
                          <p className="text-sm text-white/45">{siteContent.contact.moreLabel}</p>
                          <p className="mt-2 text-sm leading-7 text-white/60">{siteContent.contact.moreText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex">
            <a
              href="#experience"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:text-white"
            >
              {siteContent.navigation.scrollDown} <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">{siteContent.experienceSection.label}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{siteContent.experienceSection.title}</h2>
          </div>

          <div className="space-y-14">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-cyan-300/60" />
                <h3 className="text-2xl font-semibold text-white">{siteContent.experienceSection.currentProjectsTitle}</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {currentProjects.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                        <CardContent className="p-6">
                          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <Icon className="h-5 w-5 text-cyan-300" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                          <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-white/30" />
                <h3 className="text-2xl font-semibold text-white">{siteContent.experienceSection.experienceTitle}</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {experiences.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                        <CardContent className="p-6">
                          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <Icon className="h-5 w-5 text-cyan-300" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                          <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-6xl px-6 py-8">
          <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">{siteContent.vision.label}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{siteContent.vision.title}</h2>
              </div>

              <div className="space-y-5 text-white/70">
                {visionItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <div className="mb-2 flex items-center gap-2 text-white">
                        <Icon className="h-4 w-4 text-cyan-300" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <p className="text-sm leading-7 text-white/65">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="interests" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">{siteContent.interestsSection.label}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{siteContent.interestsSection.title}</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {interests.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
