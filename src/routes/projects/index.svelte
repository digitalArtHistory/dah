<script>
  export let item;
  let projects = item.projects


</script>

<h1>{item.title}</h1>

{#each projects as project }
<article>
  <h2>{project.title}</h2>
  <p>Date : {project.date}</p>
  <p><a href="{project.idno}">{project.idno}</a></p>
  <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src={project.idno}
/>

</article>

{/each}