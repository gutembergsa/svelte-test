
<script lang="ts">
    import Title from '$lib/title.svelte'
    import type { LayoutData } from "./$types"
    import '../../styles/global.css'
    //SSG adapter
    export const prerender = true;


    export let data: LayoutData
    </script>
  
  <header>
    <Title title="Gutem Gaming Guides" />
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <p>Copyright 2024 Gutem Gaming Guides</p>
  </footer>
  
  <style>
    header {
      display: flex;
      justify-content: center;
    }
    main {
      max-width: 960px;
      margin: 20px auto;
    }
    footer {
      text-align: center;
    }
  </style>