import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { MainRoutes } from "routes";
import SearchInput from "components/SearchInput";

const Main = () => {
  const getRoutes = (mainRoutes: any) => {
    return mainRoutes.map((prop: any, key: any) => (
      <Route
        path={prop.path}
        key={key}
        element={<prop.component {...prop} />}
      />
    ));
  };

  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="flex items-center justify-center w-full shadow-md bg-brand-white">
          <div className="flex flex-col w-2/5 justify-center p-8">
            <SearchInput />
          </div>
        </div>
        <div className="container-w-full mx-auto sm:px-6 lg:px-8 bg-slate-100">
          <div className="px-4 py-8 sm:px-0">
            <Routes>{getRoutes(MainRoutes)}</Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
