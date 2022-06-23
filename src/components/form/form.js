import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskFetchAction } from '../../store/api-action';
import './form.css'

function Form() {
  const [formData, setFormData] = useState({
    'username': '',
    'email': '',
    'text': '',
    'status': 0,
  });

  const dispatch =  useDispatch();

  function fieldChangeHandle(evt) {
    const { name, value } = evt.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const reviewData = {
      ...formData
    };
    dispatch(addTaskFetchAction(reviewData, reviewData.username));

    evt.target.reset()
  };

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <h2>Add task</h2>
      <div className="form-wrapper">
        <label>
          <span>Name</span>
        <input onChange={fieldChangeHandle} name="username" type="text" />
      </label>
      <label>
      <span>Email</span>
        <input name="email" type="email" onChange={fieldChangeHandle}/>
      </label>
      <label>
      <span>Text</span>
        <textarea onChange={fieldChangeHandle} name="text" cols="30" rows="10"></textarea>
      </label>
      <button type="submit">add task</button>
      </div>
    </form>
  )
}

export default Form