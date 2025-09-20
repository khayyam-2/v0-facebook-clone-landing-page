import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "College Student",
    avatar: "/smiling-woman-profile.png",
    content:
      "SocialConnect has made it so easy to stay in touch with my friends from high school and college. I love how simple and clean the interface is!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    avatar: "/professional-man-smiling-profile-photo.jpg",
    content:
      "As a business owner, I use SocialConnect to connect with my customers and build a community around my brand. The engagement has been amazing!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Travel Blogger",
    avatar: "/woman-with-camera-travel-blogger-profile-photo.jpg",
    content:
      "I've tried many social platforms, but SocialConnect feels different. It's focused on real connections rather than just likes and follows.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-balance mb-4">What our community says</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join millions of people who are already connecting and sharing on SocialConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
