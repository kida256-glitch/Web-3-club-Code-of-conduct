import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Scale, AlertCircle, FileText, Target } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,oklch(0.20_0.03_250)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.20_0.03_250)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image src="/images/web3-logo.jpg" alt="Web3 Logo" fill className="object-contain" priority />
              </div>
            </div>
            <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-sm px-4 py-1.5">
              Makerere University
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Web3 MUK Club
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">Code of Conduct</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
              <Shield className="w-4 h-4 text-primary" />
              <span>Building a professional, inclusive, and collaborative community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Our Pledge */}
          <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Pledge</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed text-lg">
              We, as members, contributors, and leaders of the Web3 MUK Club, pledge to create a harassment-free and
              welcoming environment for everyone, regardless of age, gender, gender identity or expression, sexual
              orientation, disability, physical appearance, body size, ethnicity, nationality, socio-economic status,
              level of experience, or personal beliefs.
            </p>
            <p className="text-foreground/90 leading-relaxed text-lg mt-4">
              We are committed to acting in ways that foster an open, inclusive, professional, and supportive community
              where members can learn, collaborate, and grow in the Web3 space.
            </p>
          </Card>

          {/* Our Standards */}
          <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Standards</h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Examples of behavior that contributes to a positive environment include:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Treating all members with respect, empathy, and kindness.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Listening to differing opinions and viewpoints respectfully.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Giving and accepting constructive feedback gracefully.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Taking responsibility for mistakes and learning from them.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Focusing on the best outcomes for the community as a whole.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-destructive mb-4">
                  Examples of unacceptable behavior include:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Insults, harassment, bullying, hate speech, or discrimination of any kind.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Sharing scams, misleading information, or fraudulent links.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Publishing others&apos; private information without consent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Vulgar, offensive, or inflammatory language or media.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Political or religious debates that could create division or conflict.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      Any other behavior that is unprofessional or disruptive to the community.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Responsibilities */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Our Responsibilities</h2>
                  <div className="h-1 w-16 bg-accent rounded-full" />
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Community leaders and moderators are responsible for clarifying and enforcing our standards, and will
                take fair and appropriate corrective action when necessary. Leaders have the right and responsibility to
                remove or edit messages, posts, or other contributions that violate this Code of Conduct, and to
                communicate reasons for moderation decisions when appropriate.
              </p>
            </Card>

            {/* Scope */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Scope</h2>
                  <div className="h-1 w-16 bg-primary rounded-full" />
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This Code of Conduct applies within all Web3 MUK Club spaces, including online platforms (Whatsapp,
                Twitter, LinkedIn) and in-person events, as well as whenever a member represents the community in any
                official capacity.
              </p>
            </Card>
          </div>

          {/* Reporting and Enforcement */}
          <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Reporting and Enforcement</h2>
                <div className="h-1 w-20 bg-destructive rounded-full" />
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed text-lg mb-4">
              If you experience or witness behavior that violates this Code of Conduct, please report it to the
              community leadership team at{" "}
              <a
                href="mailto:makerereweb3@gmail.com"
                className="text-primary hover:text-primary/80 underline underline-offset-4"
              >
                makerereweb3@gmail.com
              </a>
              . All reports will be reviewed and addressed promptly and fairly, with confidentiality respected to the
              greatest extent possible.
            </p>
          </Card>

          {/* Consequences */}
          <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <Scale className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Consequences of Unacceptable Behavior</h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Consequences may vary depending on severity and recurrence of the behavior:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Badge variant="outline" className="h-fit text-lg font-bold px-3 py-1 border-primary/30 text-primary">
                  1
                </Badge>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Correction / Verbal Warning</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Minor infractions may result in a private warning and clarification of the violation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Badge
                  variant="outline"
                  className="h-fit text-lg font-bold px-3 py-1 border-secondary/30 text-secondary"
                >
                  2
                </Badge>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Temporary Mute / Suspension</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Repeated or serious infractions may lead to temporary restrictions from community interactions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Badge
                  variant="outline"
                  className="h-fit text-lg font-bold px-3 py-1 border-destructive/30 text-destructive"
                >
                  3
                </Badge>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Removal from Community</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Severe or persistent violations may result in removal from the community and denial of future
                    participation.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 italic">
              Leaders will follow these guidelines to determine consequences fairly and consistently, considering the
              impact on the community and individuals involved.
            </p>
          </Card>

          {/* Our Goal */}
          <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/20 border border-primary/30 mb-2">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Goal</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
              <p className="text-foreground/90 leading-relaxed text-lg max-w-3xl mx-auto pt-2">
                The Web3 MUK Club exists to create a professional, inclusive, and collaborative environment where
                students at Makerere University can learn, share opportunities, and grow together in Web3. By
                participating, you agree to follow this Code of Conduct and help maintain a respectful and safe
                community for everyone.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground text-sm">
            <p>Web3 MUK Club • Makerere University</p>
            <p className="mt-2">
              Contact:{" "}
              <a href="mailto:makerereweb3@gmail.com" className="text-primary hover:text-primary/80">
                makerereweb3@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
