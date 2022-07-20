module Api
    module V1
        class SubjectsController < ApplicationController
            def index
                subjects = Subject.select{|sub| sub.photo.id.to_s === params[:photo_id].to_s}

                render json: SubjectSerializer.new(subjects, options).as_json
            end

            private

            def options
                @options ||= { include: [:target_box] }
            end 
        end 
    end
end