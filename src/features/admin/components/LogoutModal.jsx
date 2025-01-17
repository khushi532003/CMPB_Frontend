import { useAuthContext } from '@/context';
import React from 'react';
import { CiWarning } from "react-icons/ci";

const LogoutModal = ({ setLogoutOpen }) => {
    const { Logout } = useAuthContext();

    return (
        <div className="relative z-50" >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <CiWarning className='h-7 w-7 text-red-500' />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h5 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Logout account</h5>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">Are you sure you want to Logout  your account?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={Logout} >Logout</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={setLogoutOpen} >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogoutModal;