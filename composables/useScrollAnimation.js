import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px" } = options;

  const sectionRef = ref(null);
  const isVisible = ref(false);
  let observer = null;

  onMounted(() => {
    if (!sectionRef.value) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(sectionRef.value);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { sectionRef, isVisible };
}

export function useScrollAnimationList(count, options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px" } = options;

  const itemRefs = ref([]);
  const visibleItems = ref(new Array(count).fill(false));
  let observer = null;

  const setItemRef = (el, index) => {
    if (el) itemRefs.value[index] = el;
  };

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            visibleItems.value[index] = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    itemRefs.value.forEach((el) => {
      if (el) observer.observe(el);
    });
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { setItemRef, visibleItems };
}
