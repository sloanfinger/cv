import Splash from "@/components/Splash";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contact · Sloan Finger",
  description: "...",
};

export default function Contact() {
  return (
    <Splash title="Contact">
      <form action="mailto:sloanfinger@uga.edu" method="post">
        <fieldset>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="John Doe" required />
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Hi there!"
              rows={3}
              required
            />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </Splash>
  );
}
