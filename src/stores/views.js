export const changeView = () => {
  
    function incrementPage() {
        router.go(1);
    }

    function decrementPage() {
        router.go(-1);
    }
};
