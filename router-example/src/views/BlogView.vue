<template>
  <section>
    <h3>Blog</h3>
    <ul>
      <li>
        <RouterLink :to="{name:'post', params:{id:1}}">
          <h3>1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia dignissimos
            voluptas molestiae, odit nisi quia distinctio, id vitae laboriosam provident, libero
            quibusdam nobis ipsam iusto! Minima est doloremque ut.
          </p>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{name:'post', params:{id:2}}">
          <h3>2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia dignissimos
            voluptas molestiae, odit nisi quia distinctio, id vitae laboriosam provident, libero
            quibusdam nobis ipsam iusto! Minima est doloremque ut.
          </p>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
