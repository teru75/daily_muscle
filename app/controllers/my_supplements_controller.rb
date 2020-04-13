class MySupplementsController < ApplicationController
  def new
    @my_supplement = MySupplement.new
  end
  
  def create
    @my_supplement = MySupplement.new(my_supplement_params)
    @my_supplement.customer_id = current_customer.id

    if @my_supplement.save
      flash[:success] = "マイサプリメントを登録しました！"
       redirect_to customer_my_supplement_path(@my_supplement.customer_id, @my_supplement)
    else
      render :new
    end
  end

  def index
    @my_supplements = MySupplement.all
  end

  def show
    @customer = Customer.find(params[:customer_id])
    @my_supplement = @customer.my_supplements.find(params[:id])
  end


  def update
    @my_supplement = MySupplement.find(params[:id])
    if @my_supplement.customer_id != current_customer.id
      flash[:danger] = "他アカウントの編集はできません。"
      redirect_to customer_my_supplements_path
    end
    if @my_supplement.update(my_supplement_params)
      flash[:success] = "マイサプリメントを編集しました！"
      redirect_to customer_my_supplement_path(@my_supplement)
    else
      render :edit
    end
  end

  def destroy
    @my_supplement = MySupplement.find(params[:id])
    if @my_supplement.customer_id != current_customer.id
      flash[:danger] = "他アカウントの編集はできません。"
      redirect_to customer_my_supplements_path
    end
    @my_supplement.destroy
    flash[:notice] = "マイメニューを削除しました。"
    redirect_to customer_my_supplements_path
  end

  private
  def my_supplement_params
    params.require(:my_supplement).permit(:name, :genre, :brand)
  end
end