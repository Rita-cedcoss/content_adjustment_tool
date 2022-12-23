import React from "react";

const Adjustcontent = ({
  count,
  readfont,
  title,
  link,
  fontSize,
  textHieght,
  letterSpace,
  alignleft,
}) => {
  return (
    <div className={`content ${readfont} ${alignleft} `} style={{ count }}>
      <h1 style={{ ...count, ...fontSize }} className={title}>
        Title1
      </h1>
      <p style={{ ...count, ...textHieght, ...letterSpace }}>
        Lorem ipsum dolor sit amet. Est vitae natus aut maiores rerum vel quasi
        obcaecati. Aut vero fugit est blanditiis sunt aut ipsa laborum. Quo
        voluptates sapiente nam nemo eveniet quo ipsam sint. Quo veritatis autem
        et autem totam qui optio voluptas qui molestiae quia et quidem quam. Aut
        accusamus fugiat et officiis recusandae quo iure perspiciatis et
        laboriosam voluptas ut recusandae dolores aut quidem deserunt eum
        cupiditate placeat. Vel fuga rerum quo amet dolores eum labore animi a
        molestiae quaerat vel incidunt dolore in fugiat quia.
      </p>
      <h1 style={{ ...count, ...fontSize }} className={title}>
        Title2
      </h1>
      <p style={{ ...count, ...textHieght, ...letterSpace }}>
        Lorem ipsum dolor sit amet. Est vitae natus aut maiores rerum vel quasi
        obcaecati. Aut vero fugit est blanditiis sunt aut ipsa laborum. Quo
        voluptates sapiente nam nemo eveniet quo ipsam sint. Quo veritatis autem
        et autem totam qui optio voluptas qui molestiae quia et quidem quam. Aut
        accusamus fugiat et officiis recusandae quo iure perspiciatis et
        laboriosam voluptas ut recusandae dolores aut quidem deserunt eum
        cupiditate placeat. Vel fuga rerum quo amet dolores eum labore animi a
        molestiae quaerat vel incidunt dolore in fugiat quia.
      </p>
      <a
        href="https://www.loremipzum.com/en/text-generator"
        className={link}
        style={{ ...count, ...textHieght, ...letterSpace }}
      >
        Lorem ipsum
      </a>
    </div>
  );
};

export default Adjustcontent;
