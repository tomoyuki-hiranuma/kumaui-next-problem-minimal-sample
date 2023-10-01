import { k } from "@kuma-ui/core"

export default function Home() {
return (
  <k.div>
    <k.p _hover={{
      bgColor: "colors.gray.200"
    }}>
      bg gray when hovering(not work)
    </k.p>
    <k.p _hover={{
      bgColor: "#edf2f7"
    }}>
      bg gray when hovering
    </k.p>
    <k.button _active={{
      bgColor: "colors.red.100"
    }}>
      bgColor is changed to gray when hovering(not work)
    </k.button>
    <k.button _active={{
      bgColor: "#fed7d7"
    }}>
      bgColor is changed to gray when hovering
    </k.button>
  </k.div>
)
}
