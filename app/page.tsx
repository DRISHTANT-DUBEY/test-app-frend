"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  MapPin,
  UserCheck,
  CreditCard,
  Sparkles,
  CheckCircle,
  Calendar,
  Clock,
  Ticket,
  Gift,
  Star,
  Download,
  ChevronRight,
} from "lucide-react"
import LanguageSwitcher from "./components/language-switcher"
import StructuredData from "./components/structured-data"
import { useTranslation } from "./i18n/use-translation"

export default function PriestBookingPlatform() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      <StructuredData />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              SpiriGo
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary" hrefLang="en">
              {t("how-it-works")}
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary" hrefLang="en">
              {t("services")}
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary" hrefLang="en">
              {t("testimonials")}
            </Link>
            <Link href="#referral" className="text-sm font-medium hover:text-primary" hrefLang="en">
              {t("referral-program")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t("login")}
            </Button>
            <Button size="sm">{t("sign-up")}</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">
                {t("spiritual-services-platform")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t("hero-heading")}</h1>
              <p className="text-xl text-muted-foreground">{t("hero-subheading")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" aria-label={t("book-priest")}>
                  {t("book-priest")}
                </Button>
                <Button size="lg" variant="outline" className="gap-2" aria-label={t("download-app")}>
                  <Download size={18} /> {t("download-app")}
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Priest performing traditional Hindu puja ceremony with sacred fire and offerings"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-[200px] w-[180px] overflow-hidden rounded-lg shadow-lg border-4 border-white">
                <Image
                  src="/placeholder.svg?height=200&width=180"
                  alt="SpiriGo mobile app interface showing priest booking process"
                  width={180}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10">
            <div className="h-[500px] w-[500px] rounded-full bg-orange-500 blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 right-0 opacity-10">
            <div className="h-[300px] w-[300px] rounded-full bg-purple-500 blur-3xl"></div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("how-it-works")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("booking-simple")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  icon: <Home className="h-10 w-10 text-orange-600" />,
                  title: t("choose-ritual"),
                  description: t("choose-ritual-desc"),
                },
                {
                  icon: <MapPin className="h-10 w-10 text-orange-600" />,
                  title: t("pick-location"),
                  description: t("pick-location-desc"),
                },
                {
                  icon: <UserCheck className="h-10 w-10 text-orange-600" />,
                  title: t("select-priest"),
                  description: t("select-priest-desc"),
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-orange-600" />,
                  title: t("secure-payment"),
                  description: t("secure-payment-desc"),
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-orange-600" />,
                  title: t("hassle-free"),
                  description: t("hassle-free-desc"),
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>

                  {index < 4 && (
                    <div className="hidden md:block absolute transform translate-x-[80px] translate-y-[40px]">
                      <ChevronRight className="h-8 w-8 text-orange-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-white to-orange-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform offers unique advantages for all your spiritual needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Verified & Experienced Priests",
                  description: "Only trusted and reviewed priests.",
                },
                {
                  title: "Hassle-Free Booking",
                  description: "Book in minutes, get instant confirmations.",
                },
                {
                  title: "Multiple Services",
                  description: "Puja, havan, sanskar, last rites, temple tickets, & more.",
                },
                {
                  title: "Affordable & Transparent Pricing",
                  description: "No hidden costs, clear pricing.",
                },
                {
                  title: "Referral & Rewards Program",
                  description: "Earn discounts by referring friends & family.",
                },
                {
                  title: "24/7 Customer Support",
                  description: "We're always here to help with your queries.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section id="services" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive spiritual services for all your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Calendar className="h-10 w-10 text-orange-600" />,
                  title: "Pujas & Rituals",
                  description: "Griha Pravesh, Satyanarayan Katha, Navgrah Puja, Ganesh Puja, etc.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-orange-600" />,
                  title: "Havan & Yajnas",
                  description: "Vedic havans for positivity & prosperity.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-orange-600" />,
                  title: "Sanskar Services",
                  description: "Naamkaran, Annaprashan, Mundan, Upanayan.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-orange-600" />,
                  title: "Last Rites & Shraddh Services",
                  description: "Antim Sanskar, Tarpan, Pind Daan.",
                },
                {
                  icon: <Ticket className="h-10 w-10 text-orange-600" />,
                  title: "Temple Ticket Booking",
                  description: "Book VIP darshan & temple passes easily.",
                },
                {
                  icon: <Calendar className="h-10 w-10 text-orange-600" />,
                  title: "Online Consultations",
                  description: "Get guidance from priests through video calls.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-purple-600"></div>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-orange-100 p-3 w-fit">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-orange-600 hover:text-orange-700 hover:bg-transparent"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-orange-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from people who have experienced our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Ramesh",
                  location: "Mumbai",
                  rating: 5,
                  comment:
                    "Amazing service! The priest was knowledgeable, on time, and performed the puja beautifully. Highly recommended!",
                },
                {
                  name: "Priya",
                  location: "Delhi",
                  rating: 5,
                  comment: "Booking was super easy! Transparent pricing and hassle-free experience.",
                },
                {
                  name: "Suresh",
                  location: "Bangalore",
                  rating: 5,
                  comment:
                    "We needed a priest urgently for a ceremony and got one within hours. The app is a blessing!",
                },
                {
                  name: "Anita",
                  location: "Pune",
                  rating: 4,
                  comment:
                    "Very professional service. The priest explained all the rituals clearly and was patient with our questions.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-lg mb-4 italic">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center">
                        <span className="font-semibold text-orange-800">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                See More Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Referral Program */}
        <section id="referral" className="py-20 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Refer & Earn Rewards</h2>
                <p className="text-xl mb-6 text-orange-100">
                  Invite your friends and family to use our platform and earn discounts on your next booking.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-300 mt-1" />
                    <span>Get ₹200 off on your next booking for each referral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-300 mt-1" />
                    <span>Your friend gets ₹100 off on their first booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-300 mt-1" />
                    <span>No limit on the number of referrals you can make</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
                  <Gift className="h-5 w-5 mr-2" /> Invite Now
                </Button>
              </div>
              <div className="flex-1 relative">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="SpiriGo referral program - Share with friends and earn rewards"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Next Ritual?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of satisfied users who have simplified their spiritual journey with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" aria-label="Book a priest now">
                  Book a Priest Now
                </Button>
                <Button size="lg" variant="outline" className="gap-2" aria-label="Download the SpiriGo app">
                  <Download size={18} /> Download the App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">SpiriGo</h3>
              <p className="mb-4">Connecting devotees with verified priests for all spiritual needs.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Pujas & Rituals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Havan & Yajnas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sanskar Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Last Rites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Temple Tickets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span>123 Spiritual Lane, Devotee City, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 9876543210</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>support@devapuja.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SpiriGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

