import { Card, CardContent } from "@/components/ui/card"
import { Users, Share2, MessageSquare, Heart, Camera, Globe } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Connect with Friends",
    description: "Find and connect with friends, family, and people you know. Build meaningful relationships online.",
  },
  {
    icon: Share2,
    title: "Share Your Story",
    description: "Share photos, videos, and updates about your life. Let your friends know what you're up to.",
  },
  {
    icon: MessageSquare,
    title: "Stay in Touch",
    description: "Send messages, make video calls, and chat with friends in real-time. Never lose touch again.",
  },
  {
    icon: Heart,
    title: "Express Yourself",
    description: "React to posts, share your thoughts, and engage with content that matters to you.",
  },
  {
    icon: Camera,
    title: "Capture Moments",
    description: "Share your favorite memories with beautiful photos and videos that tell your story.",
  },
  {
    icon: Globe,
    title: "Discover Communities",
    description: "Join groups and communities based on your interests. Meet like-minded people from around the world.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-balance mb-4">Everything you need to stay connected</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Discover all the ways SocialConnect helps you build relationships and share experiences with the people you
            care about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
