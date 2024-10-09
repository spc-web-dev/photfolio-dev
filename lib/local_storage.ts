export const setLocalStorageItemWithExpiry = (key: string, value: boolean, expiryInDays = 1) => {
    if(typeof window !== 'undefined'){
        const now = new Date();
        const item = {
          value: value,
          expiry: now.getTime() + expiryInDays * 24 * 60 * 60 * 1000, // 1 day in milliseconds
        };
        localStorage.setItem(key, JSON.stringify(item));
    }
  };
  

export const getLocalStorageItemWithExpiry = (key: string) => {
    if(typeof window !== 'undefined') {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;
      
        const item = JSON.parse(itemStr);
        const now = new Date();
      
        if (now.getTime() > item.expiry) {
          localStorage.removeItem(key);
          return null;
        }
        return item.value;
    }
  };
  