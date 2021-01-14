import axios from 'axios';
import config from '../config';


const get = async () => {
  const plans = await axios.get(config.api_url).then((resp) => resp).catch((error) => error);
  if (plans.status === 200) {
    return plans.data.shared.products;
  }
  return {
    status: plans.status,
    error: 'Failed do load the products',
  };
};

const ServicePlans = {
  get,
}

export default ServicePlans;