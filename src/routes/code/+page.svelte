<script lang="ts">
  import '../../styles.css'
  import Menu from "../Menu.svelte";``
</script>


<Menu></Menu>
<div>
    <ul>
      <li class="item">
          <a href="https://github.com/nettijoe96/bloom">
              <span>
                  <i class="fa-brands fa-golang"></i>
                  go bloom filter package
              </span>
          </a>
      </li>
      <li class="item">
          <a href="https://github.com/nettijoe96/nettijoe96.github.io">
              <span>
                  <img class="svelte" src="svelte_red.jpg" alt="svelte icon"/>
                  sveltekit static website
              </span>
          </a>
      </li>
      <li class="item">
          <a href="https://github.com/rustyrussell/million-channels-project">
              <span>
                  <i class="fa-brands fa-python"></i>
                  lightning network simulation
              </span>
          </a>
      </li>
      <li class="item">
          <a href="https://github.com/nettijoe96/jwt-factory">
              <span>
                  <i class="fa-brands fa-golang"></i>
                  JWT c-lightning plugin
              </span>
          </a>
      </li>
      <li class="item">
          <a href="https://github.com/nettijoe96/c-lightning-graphql">
              <span>
                  <i class="fa-brands fa-golang"></i>
                  graphql c-lightning plugin
              </span>
          </a>
      </li>
      <li class="item">
          <a href="https://github.com/nettijoe96/BM-BGP/tree/master/indexedMerkleTree">
              <span>
                  <i class="fa-brands fa-python"></i>
                  indexed merkle tree
              </span>
          </a>
      </li>
    </ul>
</div>

<style>

  div {
      padding: 20px;
      text-align: center;
  }

  ul {
      padding: 20px;
      padding-top: 0px;
      text-align: left;
      display: inline-block;
  }

  li {
      padding: 5px;
      list-style: none
  }

  a {
      font-weight: 100;
      text-decoration: none;
      color: inherit;
      font-size: large;
  }

  .fa-golang {
      margin-right: 1px;
      color: #00aed9;
  }

  .svelte {
      padding-left: 5px;
      padding-right: 4px;
      width: 13px;
      color: #ff3c00
  }

  .fa-python {
      padding-left: 5px;
      padding-right: 3px;
      color: #551a8b;
  }

  span:hover {
      color: #878787;
  }

</style>
