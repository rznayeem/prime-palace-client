import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const EstateDetails = () => {
  const { loader } = useContext(AuthContext);

  const selectedEstates = useLoaderData();
  const { id } = useParams();

  const selectedEstate = selectedEstates.find(
    selectedEstate => selectedEstate.id === parseInt(id)
  );

  const { name, image } = selectedEstate;

  return <div>{image}</div>;
};

export default EstateDetails;
