import React, { useState, type ChangeEvent } from 'react';
import './DishForm.css';
import type { IDishMutation } from '../../types/dish/dish-mutation';
import { PLACEHOLDER_IMAGE } from '../../shared/constants/images';
import { useForm } from 'react-hook-form';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';

interface IDishFormProps {
  onSubmitDish: (dish: IDishMutation) => void;
  defaultValueDish?: IDishMutation;
  isEdit?: boolean;
  isLoading: boolean;
}

const formValue: IDishMutation = {
  title: '',
  price: null,
  image: '',
};

const DishForm: React.FC<IDishFormProps> = ({
  onSubmitDish,
  defaultValueDish,
  isEdit = false,
  isLoading,
}) => {
  const defaultValues: IDishMutation = defaultValueDish
    ? defaultValueDish
    : formValue;

  const [imagePreview, setImagePreview] = useState<string>(
    defaultValues.image.trim().length > 0
      ? defaultValues.image
      : PLACEHOLDER_IMAGE,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data: IDishMutation) => {
    onSubmitDish(data);
    reset(formValue);
  };

  return (
    <>
      <div className="form-block fixed-position-center">
        <p className="form-block-title">
          {isEdit ? 'update dish' : 'add dish'}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-block-content">
            <div className="form-input-block">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                title="Title"
                id="title"
                placeholder="title"
                className="form-input"
                {...register('title', {
                  required: 'Title is required',
                  disabled: isLoading,
                  minLength: {
                    value: 2,
                    message: 'Title must be at least 2 characters',
                  },
                  maxLength: {
                    value: 40,
                    message: 'Title must be at most 20 characters',
                  },
                  validate: (value) =>
                    value.trim() !== '' || 'Title is required',
                })}
              />
              {errors.title && (
                <p className="input-error-message">{errors.title.message}</p>
              )}
            </div>

            <div className="form-input-block">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                title="Price"
                id="price"
                placeholder="Price"
                className="form-input"
                {...register('price', {
                  required: 'Price is required',
                  disabled: isLoading,
                  minLength: {
                    value: 1,
                    message: 'Price must be more than 0',
                  },
                  maxLength: {
                    value: 100000,
                    message: 'Price must be less than 100000',
                  },
                  validate: {
                    isNumber: (value) =>
                      !isNaN(Number(value)) || 'Price must be a number',
                    isPositive: (value) =>
                      Number(value) > 0 || 'Price must be greater than 0',
                  },
                })}
              />
              {errors.price && (
                <p className="input-error-message">{errors.price.message}</p>
              )}
            </div>

            <div className="form-input-block">
              <label htmlFor="image-url">Image url</label>
              <input
                type="url"
                title="Image Url"
                id="image-url"
                placeholder="Image URL"
                className="form-input"
                {...register('image', {
                  disabled: isLoading,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    setImagePreview(event.target.value);
                  },
                  required: 'Image is required',
                  validate: (value) =>
                    value.trim() !== '' || 'Image is required',
                })}
              />
              {errors.image && (
                <p className="input-error-message">{errors.image.message}</p>
              )}
            </div>

            <div className="form-image-preview">
              <img src={imagePreview} alt="image placeholder" />
            </div>
            <Button
              className="form-submit-btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loader-button">
                  <Loader />
                </div>
              ) : (
                'save'
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DishForm;
