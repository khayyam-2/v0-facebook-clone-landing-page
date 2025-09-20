import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Connect with friends and the world around you
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Share moments, discover communities, and stay connected with the people who matter most to you.
              </p>
            </div>

            {/* Sign Up Form */}
            <div className="bg-card p-6 rounded-lg shadow-lg border max-w-md">
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Create a new account</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="First name" className="bg-background" />
                  <Input placeholder="Last name" className="bg-background" />
                </div>
                <Input placeholder="Email address" type="email" className="bg-background" />
                <Input placeholder="Password" type="password" className="bg-background" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                  Sign Up
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  By clicking Sign Up, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/diverse-group-of-friends-connecting-and-sharing-mo.jpg"
              alt="People connecting on social media"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
