import clsx from "clsx";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";

export default function AboutPage() {
  return (
    <div>
      <h1 className={clsx(title(), "underline")}>TIC TAC TOE</h1>
      <Card className="max-w-[400px] mt-10">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">HeroUI</p>
            <p className="text-small text-default-500">heroui.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/heroui-inc/heroui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>

      <Card className="py-4 mt-10">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>

      <Card isFooterBlurred className="border-none mt-10" radius="lg">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://heroui.com/images/hero-card.jpeg"
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>

    </div>
  );
}
