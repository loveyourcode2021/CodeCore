require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
    describe "#new" do
        context "signed in" do
            before do
                session[:user_id]=FactoryBot.create(:user).id
            end
            it "open new page" do
                get(:new) 
                expect(response).to(render_template(:new))
            end
            it "requires setting an instance variable with a new ideas" do
                get(:new)
                expect(assigns(:idea)).to(be_a_new(Idea))
            end 
        end
    end

    describe "#create" do
        def valid_request
            post(:create, params: {
                idea: FactoryBot.attributes_for(:idea)
            })
        end
        context "with signed in user" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
            end

            context "with valid parameters" do
        
                it "requires a new creation of job post in the database" do
                    count_before = Idea.count
                    valid_request
                    count_after = Idea.count
                    expect(count_after).to(eq(count_before + 1))
                end
        
                it "requires a redirect to the show page e for the idea" do
                    valid_request
                    idea = Idea.last
                    expect(response).to(redirect_to(idea_path(idea.id)))
                end
    
            end
      

            context "with invalid request" do
                def invalid_request
                post(:create, params:{idea: FactoryBot.attributes_for(:idea, title: nil)}) 
                end

                it "requires that the database does not save the new record of the job post" do
                    count_before = Idea.count
                    invalid_request
                    count_after = Idea.count
                    expect(count_after).to eq(count_before) 
                end

                it "renders the new template" do
                    invalid_request
                    expect(response).to render_template(:new)
                end
            end
        end
        context "without signed in user" do
            it "should redirect to the sign in page" do
            valid_request
            expect(response).to redirect_to(new_session_path)
            end
        end

    
    end
end

