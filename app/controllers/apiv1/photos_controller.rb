module Api
    module V1
        class ScoresController < ApplicationController
            protect_from_forgery with: :null_session
            skip_before_action :verify_authenticity_token

            before_action :set_photo

            def index
                scores = @photo.scores.order(Arel.sql("time::integer ASC")).limit(10)
                
                render json: ScoreSeriallizer.new(scores).as_json
            end

            def create
                score = @photo.scores.new(score_params)

                if score.save
                    render json: ScoreSeriallizer.new(score).as_json
                else
                    render json: { error: score.errors.messages }, status: 422
            end
        end

        private

        def set_photo
            @photo = Photo.find(params[:photo_id])
        end

        def score_params
            params.require(:score).permit(:time, :initials)
        end
    end
end
