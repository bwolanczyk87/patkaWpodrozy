module.exports = (dato, root, i18n) => {
    root.directory("content/blog", (dir) => {
      // ...iterate over the "Blog post" records...
      dato.posts.forEach((post) => {
        // ...and create a markdown file for each article!
        dir.createPost(`${post.id}.md`, "md", {
          frontmatter: {
            title: post.title,
            type: "post",
            categories: post.categories.map(cat => cat.name),
            date: post.date
          },
          content: post.content
        });
      });
    });
  }