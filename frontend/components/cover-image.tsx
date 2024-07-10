import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
  hasAspectRatio?: boolean
}

export default function CoverImage({ title, coverImage, slug, hasAspectRatio }: Props) {
  const imageProps = hasAspectRatio ? { fill: true } : {width: 2000, height: 1000}

  const image = (
    <div className={cn({
      "relative aspect-[3/2]": hasAspectRatio
    })}>
      <Image
        {...imageProps}
        alt={`Cover Image for ${title}`}
        src={coverImage?.node.sourceUrl}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200 object-cover": slug,
          "object-cover": hasAspectRatio,
        })}
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
