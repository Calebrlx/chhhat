import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to the LawnLink Pro Assistant!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This assistant is here to answer any questions you may have about LawnLink Pro. Whether you need help setting up your lawn care website, want to know more about our services, or have any other inquiries, feel free to ask.
        </p>
        <p className="leading-normal text-muted-foreground">
          Additionally, this assistant can forward any relevant information to our development team. Rest assured, the assistant will confirm all details with you before forwarding any information to ensure accuracy and clarity.
        </p>
        <p className="leading-normal text-muted-foreground">
          LawnLink Pro is dedicated to making it easy for your customers to choose you. Our services include professional subdomains, simple and effective website setups, and a dedicated team to help you every step of the way.
        </p>
      </div>
    </div>
  )
}
