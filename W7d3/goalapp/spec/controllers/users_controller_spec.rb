require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe 'GET #new' do
    it 'renders the new user template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'POST #create' do
    # let (:user_params) do 
    #   {user: {
    #   email: 'jim@aa.io',
    #   password: 'jimspen'
    #           }
    #   }
    # end
    context 'with valid params' do
      it 'logs in the user' do
        post :create, params: {user: {
          email: 'jim@aa.io',
          password: 'jimspen'
        }}
        jim = User.find_by(email: 'jim@aa.io')
        expect(session[:session_token]).to eq(jim.session_token)
      end
    end
    
      it 'redirects to the users show page' do 
        post :create, params: {user: {
          email: 'jim@aa.io',
          password: 'jimspen'
        }}
        jim = User.find_by(email: 'jim@aa.io')
        expect(response).to redirect_to(user_url)
      end

    context 'with invalid params' do 
      it 'validates the presence of password and renders the new template with errors' do 
        post :create, params: {user: {
          email: 'jim@aa.io',
          password: '12345' 
        }}
        
        expect(response).to render_template(:new)
        expect(flash[:errors]).to be_present
      end
    end
  end
end