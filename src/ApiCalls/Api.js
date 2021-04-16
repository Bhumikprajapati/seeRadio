import * as  network from './Network';

export const getAllCountries=()=>network.publicGet('/pub/country');
export const getState=(country)=>network.publicGet(`/pub/states/${country}`);

export const getIndustries=()=>network.getWithHeader('/api/wholesalepricing/getIndustries');
export const getAdvertiser=()=>network.getWithHeader('/api/company/clients');
export const getTargetMarket=()=>network.getWithHeader('/api/wholesalepricing/getMarkets');

export const addAdvertiserpost=(client)=>network.postWithHeader('/api/company/client',client);
export const addCampaign=(campaign)=>network.postWithHeader('/api/campaign',campaign);
export const addFile=(file)=>network.postWithToken('/api/campaign/upload',file);

export const loginwith=(loginInfo)=>network.postWithPayload('/pub/login',loginInfo);
export const changePassWith=(payload)=>network.postWithHeader('api/person/changePassword',payload)

export const campaign=(id)=>network.getWithHeader(`/api/campaign/${id}`);