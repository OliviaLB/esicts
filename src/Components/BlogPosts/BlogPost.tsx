import classes from "./BlogPost.module.css";

const BlogPost = (props: any) => {
  return (
    <div className={`${classes.card} flex1x5 `}>
      <header
        className={classes.card__header}
        style={{
          backgroundSize: "cover",
          background: `url(${props.image})`,
        }}
      ></header>

      <div className={classes.card__body}>
        <h3 className={classes.blog__name}>{props.title}</h3>
        <p className={classes.blog__desc}>{props.desc}</p>
        <button className={classes.arrow}>
          Read More
          <i
            className={`${classes.linkarrow} fa-sharp fa-solid fa-arrow-right`}
          ></i>
        </button>
      </div>
    </div>
  );
};

// const BlogPost = () => {
//   return (
//     <div className={`${classes.card} flex1x5 `}>
//       <header className={classes.card__header} />

//       <div className={classes.card__body}>
//         <h3 className={classes.blog__name}>Hello</h3>
//         <p className={classes.blog__desc}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Doloribus cumque, quaerat placeat harum iure tempora cum,
//           quia assumenda aut quisquam dolores obcaecati sint sit
//           perspiciatis mollitia. Enim eius aspernatur pariatur vel
//           optio, nihil sunt reprehenderit iure rerum sit impedit fugit
//           aliquam doloribus fugiat, corporis eveniet quaerat! Non odio
//           error expedita.
//         </p>
//         <button ref="#" className={classes.arrow}>
//           Read More
//           <i
//             className={`${classes.linkarrow} fa-sharp fa-solid fa-arrow-right`}
//           ></i>
//         </button>
//       </div>
//     </div>
//   );
// };

export default BlogPost;
