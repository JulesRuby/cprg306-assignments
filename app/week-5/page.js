// week-5 NewItem part 2 + Form Interactivity
'use client';

import { useState } from 'react';

  function Page() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleInputChange = e => {
    const { name: field, value } = e.target;

    setFormData({
      ...formData,
      [field]: value
    })
  };

  


}