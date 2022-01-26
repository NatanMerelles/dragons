BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

export const DragonsAPI = {
  find: async () => {
    try {
      const res = await fetch(BASE_URL);

      return res.json();
    } catch (error) {
      return error;
    }
  },

  findOne: async (dragonId) => {
    try {
      const res = await fetch(`${BASE_URL}/${dragonId}`);

      return res.json();
    } catch (error) {
      return error;
    }
  },

  insert: async (dragon) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dragon),
      });

      return res.json();
    } catch (error) {
      return error;
    }
  },

  update: async (dragonId, dragon) => {
    try {
      const res = await fetch(`${BASE_URL}/${dragonId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dragon),
      });

      return res.json();
    } catch (error) {
      return error;
    }
  },

  remove: async (dragonId) => {
    try {
      const res = await fetch(`${BASE_URL}/${dragonId}`, { method: 'DELETE' });

      return res.json();
    } catch (error) {
      return error;
    }
  },

  removeMany: async (dragonsIds) => {
    try {
      const promises = dragonsIds.map(dragonId => DragonsAPI.remove(dragonId));

      return await Promise.all(promises);
    } catch (error) {
      return error;
    }
  }

}