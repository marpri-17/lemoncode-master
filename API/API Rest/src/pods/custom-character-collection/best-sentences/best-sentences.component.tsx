import React from 'react';
import { Formik, useFormik } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { TextFieldComponent } from 'common/components';
import * as classes from '../custom-characters.styles';

interface Props {
  characterId: number;
  characterName: string;
  onSubmit: (values) => void;
}

export const BestSentencesComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterName, characterId, onSubmit } = props;

  const getInputName = (characterId: string | number): string => {
    return `best-sentence-${characterId}`;
  };

  const defaultSubmit = (values: object) => {
    console.log('DEFAULT SUBMIT ' + values);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: onSubmit ?? defaultSubmit,
  });

  React.useEffect(() => {
    const initialValues = {};
    initialValues[getInputName(characterId)] = '';
    formik.initialValues = initialValues;
  }, [characterId]);

  const wrapperSubmitForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    formik.handleSubmit();
  };

  const customLabel = `Save your favorite ${characterName} quotes`;

  return (
    <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
      <form>
        <TextFieldComponent
          label={customLabel}
          name={getInputName(characterId)}
          id={getInputName(characterId)}
          onChange={formik.handleChange}
        ></TextFieldComponent>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={(event) => wrapperSubmitForm(event)}
        >
          Save
        </Button>
      </form>
    </Formik>
  );
};
