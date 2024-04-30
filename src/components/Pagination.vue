<template>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <button type="button" class="btn btn-outline-info d-inline m-1 " @click.prevent="goToPage(page)">&laquo;</button>
          <!-- <a class="page-link" href="#" aria-label="Previous" @click.prevent="goToPage(currentPage - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a> -->
        </li>
  
        <li class="page-item" v-for="page in visiblePages" :key="page" :class="{ 'active': currentPage === page }">
          <button type="button" class="btn btn-outline-info d-inline m-1 " @click.prevent="goToPage(page)">{{ page }}</button>
          <!-- <a class="page-link" href="#" @click.prevent="goToPage(page)"></a> -->
        </li>
  
        <li class="page-item dots" v-if="pages.length > 7 && currentPage > 4 && currentPage < pages.length - 3">
          <span class="page-link">...</span>
        </li>
  
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <button type="button" class="btn btn-outline-info d-inline m-1 " @click.prevent="goToPage(page)">&raquo;</button>
          <!-- <a class="page-link" href="#" aria-label="Previous" @click.prevent="goToPage(currentPage - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a> -->
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      totalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true,
        default: 10
      },
      currentPage: {
        type: Number,
        required: true,
        default: 1
      }
    },
    computed: {
      pages() {
        const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        const pages = [];
  
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
  
        return pages;
      },
      visiblePages() {
        const totalPages = this.pages.length;
  
        if (totalPages <= 7) {
          return this.pages;
        }
  
        if (this.currentPage <= 4) {
          return [1, 2, 3,'...', totalPages - 1, totalPages];
        }
  
        if (this.currentPage >= totalPages - 3) {
          return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }
        return [1, 2, 3,'...', totalPages - 1, totalPages];
        // return [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', totalPages];
      }
    },
    methods: {
        goToPage(page) {
    if (typeof page === 'number') {
      this.$emit('pageChanged', page);
    }
  }
    }
  }
  </script>
  
  <style scoped>
  .pagination .dots {
    pointer-events: none;
  }
  .pagination .dots .page-link {
  cursor: not-allowed;
  color: #6c757d;
}


.btn {

background: var(--darkwhite);
border: none;
color: var(--GreenColor);
}

  </style>