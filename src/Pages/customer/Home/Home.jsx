import React from 'react';
import MainHeader from '../../../components/customer/Header/MainHeader';
import Search from '../../../components/customer/Search/Search';
import Services from '../../../components/customer/Service_list/Services';
import PartnerListView from '../../../components/customer/PartnerListView/PartnerListView';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <MainHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-800">
            Book Local Beauty And Wellness Services
          </h1>
        </div>

        <div className="mb-8">
          <Search />
        </div>

        <div className="mb-8">
          <Services />
        </div>

        <div>
          <PartnerListView />
        </div>
      </div>
    </div>
  );
}

export default Home;
